import express from "express"
import dotenv from "dotenv"
import ConnectDB from "./config/db.js"
import router from "./routes/products.routes.js"
import cors from "cors"

const port = process.env.PORT || 5000
dotenv.config()

const app = express()
ConnectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use("/product", router)

app.listen(port, () => {
    console.log("Serveur démarré sur le port " + port)
})

