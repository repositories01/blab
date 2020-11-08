import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface User {
  id: number;
  name: string;
  email: string;
  // avatar_url: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  name?: string;
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  signUp(credentials: SignInCredentials): Promise<void>;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@Blab:token");
    const user = localStorage.getItem("@Blab:user");

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.get("login", {
      auth: {
        username: email,
        password,
      },
    });
    
    const { token, user } = response.data;
    
    console.log( token, user )
    localStorage.setItem("@Blab:token", token);
    localStorage.setItem("@Blab:user", JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signUp = useCallback(async ({ name, email, password }) => {
    const response = await api.post("/signup", { name, email, password });
    // const { token, user } = response.data;
    // localStorage.setItem("@Blab:token", token);
    // localStorage.setItem("@Blab:user", JSON.stringify(user));
    // api.defaults.headers.authorization = `Bearer ${token}`;
    // setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Blab:token");
    localStorage.removeItem("@Blab:user");

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem("@Blab:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token]
  );
  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signUp, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
