const arr=[1,2,3,4,5];
//const res=arr.map((el)=>el*2);

//console.log(res);

Array.prototype.myMap=function(cb){
    let res=[];
    for(let index=0;index<this.length;index++){
        res.push(cb(this[index]));
    }
    return res;
}
const res=arr.myMap((el)=>el*2);
console.log(res);