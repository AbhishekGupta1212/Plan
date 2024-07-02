// Question-1
function codingScoreCheck(arr,score){
let sum=0;
let avg=1;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    avg=sum/arr.length;
}
    let promise=new Promise((resolve,reject)=>{
if(avg>=score){
    resolve(avg)
}else{
    reject("Sory you haven't cleared the score")
}
})
console.log(promise)
}

codingScoreCheck([15,20,18,16,14],15)