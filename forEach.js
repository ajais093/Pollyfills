const arr=[1,2,3,4,5];
//arr.forEach((el)=>console.log(el));

function printSth(el){
    console.log(el);
}

Array.prototype.myForEach=function(cb){
    for(let index=0;index<this.length;index++){
        cb(this[index]);
    }

}

arr.myForEach(printSth);