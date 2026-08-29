/*console.log("Start");
function getData(){
    return new Promise((resolve)=>{
setTimeout(()=>{
    console.log("College");
},3000);
    });
}
getData();
console.log("End");*/
function getData(){
    return new Promise((resolve)=>{
setTimeout(()=>{
    for(let i=0;i<=20;i++){
        if(i%2==0){
            console.log(i);
        }
    }
    resolve();
    console.log("College");
},3000);
    });
}
async function display(){
console.log("Start");
let r=await getData();
console.log("End");
}
display();