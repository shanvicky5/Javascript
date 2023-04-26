var text = [{
    "id":"1",
    "message":"hi",
    "age":"28"
},
{
    "id":"2",
    "message":"hello",
    "name":"vicky"

}];
console.log(text[0]);
console.log(text[1]);
for(var i=0;i<text.length;i++) {
    var obj =text[i];
    console.log(obj.id +" "+obj.message + " " +obj.age +" "+obj.name);
}