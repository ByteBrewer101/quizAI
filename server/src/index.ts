import express from "express"

const PORT = process.env.APP_PORT || 5000
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        msg:"test"
    })
    return 
})


app.listen(PORT,()=>{
    console.log(`running on ${PORT}`);
})