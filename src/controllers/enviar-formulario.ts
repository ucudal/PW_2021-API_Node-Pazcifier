import { Request, Response } from "express"

export const enviarFormulario = (req: Request, res: Response) => {
  try {
    const { body } = req;

    if (!body.nombreContacto) {
      throw "Falta el nombre de contacto"
    }

    res.cookie('PW_2021-CV_Contacto', body.nombreContacto);
    res.status(200).send({ status: "OK", message: "Cookie seteada!" });
  } catch(err) {
    res.status(400).send(err)
  }
}