import express from "express"
import { sendcontact } from "../Controllers/Contact.controller.js"

const router = express.Router()


router.post("/contact",sendcontact)

export default router