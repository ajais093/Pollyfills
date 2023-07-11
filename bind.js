let person1={
    name:"Akash",
}

let person2={
    name:"John",
}

function printAge(age){
    console.log(`${this.name} is  ${age} years old`);
}

//let newFun=printAge.bind(person1);
//newFun(25);


Function.prototype.myBind= function(obj={},...args1){
    if(typeof this!=="function"){
      throw new Error("not callable");
    }
    obj.fn=this;
    return function(...args2){
        obj.fn(...args1,...args2);
    }
  }
  
 let newFun= printAge.myBind(person1);
 newFun(25);
