function cbr(a){
    console.log(a.name);
    a.name="hema";
    console.log(a.name);
  }
  var person = { name: "vicky"};
  cbr(person);
  console.log(person.name);

  var namee ="vicky";
  function pbv(x){
    console.log(x);
    x="hello";
    console.log(x);
  }
  pbv(namee);
  console.log(namee);
  