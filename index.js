const app = require('express')();
const port = 4000 || process.env.port;


app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});


app.get('/', (req, res)=>{
    const result = isPrime(parseInt(req.query.number));
    console.log(result);
    res.send(result);
})


const isPrime = (number) =>{
    const start = new Date();
    let prime =  true;
    let time;
    for(let i=3;i<number;i++){
        if(number % i==0){
            prime=false;
            time = new Date() - start; 
            break;
        }
    }
    if(prime){
        time=new Date() - start;
    }
    return{
        number,
        prime, 
        time
    };
};