var operation = {
    a: 1,
    b: 2,
    add: function(){
        console.log(this.a + this.b);
        console.log(`a= ${this.a}, b= ${this.b}`);
        var print = function () {
            console.log("inner");
            console.log(`a= ${this.a}, b= ${this.b}`);
        }
        print();
    }
}
operation.add();

var person ={
    name: "vicky",
    get: function() {
        console.log("outer "+ this.name);
        var print = function () {
            console.log("inner" + this.name);
        }
        print();
    }
}
person.get();