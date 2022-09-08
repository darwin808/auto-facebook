import { Request, Response } from "express"
import user from "./Users"
import posts from "./Posts"
import Msg from "./Messenger"

const Home = (req: Request, res: Response) => {
  console.log(req.hostname)
  res.send("Hello World")
}
const NotFound = (req: Request, res: Response) => {
  console.log(req.hostname)
  res.sendStatus(404)
}

export const routes = {
  Home,
  NotFound,
  user,
  posts,
  Msg
}
