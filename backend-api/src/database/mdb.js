import mongoose from "mongoose";

const mdb = () => {
  mongoose.connect(
    "mongodb+srv://proffy:root@cluster0.bt43a.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

export default mdb;
