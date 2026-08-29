let p=new Promise((resolve,reject)=>{
   let x=true;
    if(x){
        console.log("Data received");
    }else{
        console.log("Data not received");
    }
});
p.then((result)=>{
console.log(result);

});