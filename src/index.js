import express from 'express';

    const app = express();
    const PORT = 4010;

    app.get('/', (req, res)=>{
        res.send(`Node and Express starting at port ${PORT}`)
    });

    app.get('/greet', (req, res)=>{
        res.send(`Node and Express routed at ${PORT}/greet`)
    })


    app.listen(PORT, ()=>{
        console.log("Hello Node server started")
    })
