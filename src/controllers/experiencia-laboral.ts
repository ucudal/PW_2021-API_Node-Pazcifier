import { Request, Response } from "express"
import fs from "fs"

export const experienciaLaboral = (_req: Request, res: Response) => {
  try {
    let jobs = fs.readFileSync("./src/assets/experiencia-laboral.csv").toString().split("\n");
    const keys = jobs.shift()!.split(";");

    let finalJobs = [];
    for (const job of jobs) {
      const jobData = job.split(";");
      let parsedJob : any = {};
      for (let i = 0; i < keys!.length; i++) {
        parsedJob[keys[i]] = jobData[i] ? jobData[i] : null;
        if (i === keys.length - 1) {
          parsedJob[keys![i]] = jobData[i].split(".")
        }
      }
      finalJobs.push(parsedJob);
    }

    res.status(200).send({ "experiencia-laboral": finalJobs })
  } catch(err) {
    console.log(err);
    res.status(500).send(err)
  }
}