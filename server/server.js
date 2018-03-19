
const express=require('express');
let app=express();

app.get('/',(req,res)=>{
    res.status(404).send({
        error:'Page Not Found.',
        name:' Todo App v1.0'
    });
    //res.end('Hello World!');
});

app.get('/users',(req,res)=>{
    res.send([
        {
            Name:'Hython',
            ID:'001'
        },
        {
            Name:'Xuanxuan',
            ID:'002'
        },
        {
            Name:'Jianjian',
            ID:'007'
        }
    ]
    );
});
app.listen(3000,()=>{
    console.log('server is listening on port 3000:');
});

module.exports.app=app;