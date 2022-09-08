import { NextFunction, Request, Response, Router } from "express"
const user = Router()

// Middleware
user.use((req: Request, res: Response, next: NextFunction) => {
  console.log("user route")

  if (req.headers.test === "123") {
    return res.sendStatus(404)
  }
  return next()
})

user.get("/users", async (_: Request, res: Response) => {
  try {
    return res.send({ message: "Users1" })
  } catch (error) {
    return res.send({ error })
  }
})
export default user
