import { Request, Response } from "express"

export const experienciaLaboral = (_req: Request, res: Response) => {
  try {
    res.status(200).send([
      {
        "empresa": "IBM",
        "puesto": "Cloud Adoption Leader"
      },
      {
        "empresa": "IBM",
        "puesto": "Innovation Lab Student"
      }
    ])
  } catch(err) {
    res.status(500).send(err)
  }
}