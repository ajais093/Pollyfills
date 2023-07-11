let person1={
    name:"Akash",
}

let person2={
    name:"John",
}
function printAge(age){
    console.log(`${this.name} is  ${age} years old`);
}

//printAge.apply(person2,[26]);

Function.prototype.myApply= function(obj={},...args){
    if(typeof this!=="function"){
      throw new Error("not callable");
    }
    if(!Array.isArray(...args)){
        throw new Error("TypeError: CreateListFromArrayLike called on non-object");
    }
    obj.fn=this;
    obj.fn(...args);
  }

  printAge.myApply(person2,[25]);