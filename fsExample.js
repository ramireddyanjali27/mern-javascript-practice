/*const fs=require("fs");
fs.writeFileSync("Employee.txt","Ranjith sir CSE Department");
console.log("....End....");
const fs=require("fs");
fs.writeFileSync("Student.txt","Anjali 23G01A05E7 CSE Department");
console.log("...Student Details...");
const fs=require("fs");
fs.writeFile("Demo.tx","Hello hii Demo",(err)=>{
    if(err){
        console.log("Error");
    }else{
        console.log("Created successfully");
    }
})
const fs=require("fs");
const data=fs.readFileSync("Employee.txt","utf-8");
console.log(data);
const fs=require("fs");
fs.writeFileSync("Customer.txt","Rajesh buy a new computer with cost of 80000");
console.log("Created");*/
const fs=require("fs");
data=fs.readFileSync("Customer.txt","utf-8");
console.log(data);