import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
// import { init } from "./controllers/database";

// init()

import health from "./routes/health"
import experiencia from "./routes/experiencia-laboral"
import formulario from "./routes/enviar-formulario"

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: "https://cv.tets.site", credentials: true }));

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", health);
app.use("/", experiencia);
app.use("/", formulario);

app.use("*", (_req: Request, res: Response) => {
  res.status(404).send("404 - No fue encontrado")
})

// app.get('/hola-mundo', function(_req: Request, res: Response) {
//   res.send("¡Hola mundo!")
// });

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
 
export = app