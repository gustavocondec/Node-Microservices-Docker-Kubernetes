const express = require("express")
const axios = require('axios')

const app = express()

app.use(express.json())

app.post('/events', (req,res)=>{
    try{
        const event = req.body

        void axios.post('http://localhost:4000/events',event)
        void axios.post('http://localhost:4001/events',event)
        void axios.post('http://localhost:4002/events',event)
        void axios.post('http://localhost:4003/events',event)

    }catch (e) {
        console.error(e.message)
    }finally {
        res.send({status:'OK'})

    }
})

app.listen(4005,()=>{
    console.log('Server en 4005')
})
