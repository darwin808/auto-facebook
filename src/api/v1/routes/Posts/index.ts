import { NextFunction, Request, Response, Router } from "express"
const posts = Router()

// middlware
posts.use((req: Request, res: Response, next: NextFunction) => {
  console.log("posts1 route")

  if (req.headers.test === "123") {
    return res.sendStatus(404)
  }
  return next()
})

posts.get("/posts", async (_: Request, res: Response) => {
  try {
    return res.send({ message: " Post123" })
  } catch (error) {
    return res.send({ error })
  }
})
export default posts
