 let p=new Promise((resolve,reject)=>{
let n=15;
let count=0;
for(let i=1;i<=n;i++){
    if(i%2==0){
count++;
    }
    if(count==2){
        resolve(i);
    }
}
reject("Second even number not found");
});
p.then((result) => {
    console.log("Second even number:", result);
}).catch((result) => {
    console.log(result);
});