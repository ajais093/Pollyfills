const arr=[1,2,3,4,5];

// let res=arr.reduce((acc,cur)=>{
//     return acc+cur;
// },0);

//console.log(res);

Array.prototype.myReduce=function(cb,initialValue){
    let acc=initialValue;
    for(let index=0;index<this.length;index++){
       acc=acc?cb(acc,this[i]):this[i];
    }
    return acc;
   
};

let res=arr.myReduce((acc,cur)=>{
   return acc+cur;
},0);

console.log(res);