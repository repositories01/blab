export interface User{
    id: number;
    name: string;
    role: string;
    email: string;
    password: string;

    updateAvatar(avatar: string): void;
    updatePassword(password: string): void;
    updateRole(role: string): void;
    login(password: string): boolean;
    signup(password: string): boolean;
    
}