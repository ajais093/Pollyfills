let person1={
    name:"Akash",
}

let person2={
    name:"John",
}

function printAge(age){
    console.log(`${this.name} is  ${age} years old`);
}

//printAge.call(person1,25);

Function.prototype.myCall= function(obj={},...args){
  if(typeof this!=="function"){
    throw new Error("not callable");
  }
  obj.fn=this;
  obj.fn(...args);
}

printAge.myCall(person1,25);