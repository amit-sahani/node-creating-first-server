const routes = (app)=>{
    app.routes('/todo')

        .get((re, res)=>{
            res.send("Hey how are you")
        })
        .post((res, req)=>{
            res.send("Hey I am post")
        })
}