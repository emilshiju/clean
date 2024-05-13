import express from "express"

// import useRoute from "./routes/userRoute"

const app=express()

app.use(express.json())
// app.use(useRoute)


app.listen(9000,()=>{
    console.log("runnin gon port 9000")
})