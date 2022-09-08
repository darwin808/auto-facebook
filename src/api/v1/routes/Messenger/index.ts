// const messagenEve = "Good Night 😊"
import { Request, Response, Router } from "express"
// const messageMorning = "Good Morning 😊"
import chromium from "chrome-aws-lambda"
// import puppeteer from "puppeteer-core"
import puppeteer from "puppeteer"

const email = process.env.EMAIL || ""
const pass = process.env.PASS || ""
const messenger = process.env.MESSENGER || ""
const msg = Router()

export const main = async ({ message = "hi 😊" }: any) => {
  const browser = await puppeteer.launch({
    args: chromium.args,
    executablePath:
      process.env.NODE_ENV !== "development" ? await chromium.executablePath : "/bin/chromium",
    headless: true
  })
  const page = await browser.newPage()
  await page.goto("https://www.facebook.com/messages/")

  await page.type("#email", email)
  await page.type("#pass", pass)
  await page.click('[data-testid="royal_login_button"]')

  await page.waitForNavigation()

  await page.goto(messenger)

  await page.type("#composerInput", message)
  await page.waitForSelector("button[name=send]:not([disabled])").then((b) => b?.click())
  await browser.close()
}

msg.get("/messenger", async (req: Request, res: Response) => {
  const { q } = req.query
  console.log("123")
  try {
    await main({ message: q })
    return res.send({ message: "success" })
  } catch (error) {
    console.log(error)
    return res.send({ error, msg: "error" })
  }
})
export default msg
