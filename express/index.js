import express from "express"
const app = express()
app.use(express.json());
app.get("/",(req, res)=>{
    // console.log(req);
    res.status(200).json("hello world")
})
app.post("/", (req, res)=>{
    let q = req.body ? req.body.test : "No test data sent"
     res.status(200).json({ received: q })
})
app.listen(3000,()=> {
    console.log("app is listenning at post number 3000");
    
})