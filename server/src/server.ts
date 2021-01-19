import express from "express";
import routes from "./routes";
import cors from "cors";
import uploadConfig from './config/upload'

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use('/files', express.static(uploadConfig.directory))

app.listen(3333, () => {
    // eslint-disable-next-line
    console.log('⚡️ Server started on port 3333!');
  });
