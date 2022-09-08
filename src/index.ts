import express from "express"
import * as dotenv from "dotenv"
dotenv.config()
import { routes } from "./api/v1/routes"
import { middlewares } from "./api/v1/middlewares"

const msg = () => {
  const PORT = process.env.PORT || 3000
  console.log(`✅✅✅  App Running in Port: ${PORT} 🚀🚀🚀 💯`)
}

const main = () => {
  const app = express()
  const port = process.env.PORT || 3000

  app.listen(port, msg)
  middlewares.defaultMiddleware(app)

  app.get("/", routes.Home)

  app.use("/api", routes.user)
  app.use("/api", routes.posts)
  app.use("/api", routes.Msg)
  app.get("*", routes.NotFound)
}

main()
