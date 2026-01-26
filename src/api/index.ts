import { Hono } from "hono"
import { HTTPException } from "hono/http-exception"
import { logger } from "hono/logger"
import { profile } from "./modules/profile/route"


const customLogger = (message: string, ...rest: string[]) => {
  console.log(message, ...rest)
}

const app = new Hono()
  .basePath("/api")
  .use(logger(customLogger))
  .onError((err, c) => {
    if (err instanceof HTTPException) {
      return c.json({ error: err.message }, err.status)
    }
    
    if (err.name === "ZodError") {
      return c.json({ error: err }, 400)
    }

    console.error(err)
    return c.json({
      error: err.message || "Internal Server Error"
    }, 500)
  })
  .get("/",(c)=>{
      return c.text("Hello world")
   })
   .route("/profile", profile)

export default app
export type AppType = typeof app
