const express   = require('express')
const {randomBytes}  = require('crypto')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(cors())

app.use(express.json())

const posts = {}

// no se usa api / se consulta a micro query
app.get('/posts', (req,res)=>{
    res.send(posts)
});


app.post('/posts/create',async (req,res)=>{
    const id = randomBytes(4).toString('hex')
    const {title}  =req.body
    posts[id] = {
        id,
        title:'eaeafeafae'+title
    }
    await axios.post('http://event-bus-srv:4005/events', {
        type: 'PostCreated',
        data: {
            id, title:'eaeafeafae'+title
        }
    })
    res.status(201).send(posts[id])
});

app.post('/events', (req,res)=>{
    console.log('Received Event', req.body.type)
    res.send()
})

app.listen(4000, ()=>{
    console.log('v1000')
    console.log('listen in port 4000')
});
