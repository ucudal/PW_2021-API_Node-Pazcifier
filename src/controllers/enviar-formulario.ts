import { Request, Response } from "express"

export const enviarFormulario = (req: Request, res: Response) => {
  try {
    const { body } = req;
    res.status(200).send(body);
  } catch(err) {
    res.status(500).send(err)
  }
}