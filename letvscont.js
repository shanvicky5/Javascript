const a=10;
console.log(a);
a=20;
console.log(a);

function placeorder(status){
    if(status){
        let message =" Order placed sucessfully";
        console.log(message); 
    }
    console.log(message);
}
placeorder(true);