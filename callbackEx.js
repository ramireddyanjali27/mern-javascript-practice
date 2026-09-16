function display(){
    console.log("Hello");
}
function execute(callback){
    callback();
}
execute(display);