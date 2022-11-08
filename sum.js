function sum(a,b){
    return a+b;
}

function diff(a,b){
    return a-b;
}

function prod(a,b){
    return a*b;
}

function div(a,b){
   if(b==0){
    return "not defined";
   } else{return a/b;}
    
}
module.exports.sum=sum;
module.exports.prod=prod;
module.exports.diff=diff;
module.exports.div=div;
