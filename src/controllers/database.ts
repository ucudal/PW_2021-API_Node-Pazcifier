const Database = require("@replit/database")
const db = new Database()

export const init = () => {
// db.set("experiencia-laboral-1", {"empresa": "IBM", "puesto": "Cloud Adoption Leader"}).then(() => { console.log("done!") });

// db.set("experiencia-laboral-2", {"empresa": "IBM", "puesto": "Innovation Lab Student"}).then(() => { console.log("done!") });

// db.set("otro", "otro").then(() => { console.log("done!") });

db.list("experiencia-laboral").then((matches: any) => { for (const match of matches) {
  
db.get(match).then((value: any) => { console.log(value) });
} })
}
