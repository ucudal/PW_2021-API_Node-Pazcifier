import express from "express";
import bodyParser from "body-parser";
import { init } from "./controllers/database";

init()

import health from "./routes/health"
import experiencia from "./routes/experiencia-laboral"
import formulario from "./routes/enviar-formulario"

export const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use("/", health);
app.use("/", experiencia);
app.use("/", formulario);

// app.get('/hola-mundo', function(_req: Request, res: Response) {
//   res.send("¡Hola mundo!")
// });

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
 
// module.exports = app;