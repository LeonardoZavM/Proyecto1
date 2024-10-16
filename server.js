import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const port = process.env.port

const app = express()
app.get("/",(request ,  response)=>{
response.send(`
    <h1> hola mundo </h1>
    `)
})
app.listen(port , ()=>{
    console.log(`servidor corriendo en http://loaclhost:${port}`)
})