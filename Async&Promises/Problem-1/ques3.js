function unitMovementCheck(avgCodingScore,HUKUMUMScore,score){
    let sum=0;
    let sum1=0;
    let avg=1;
    let avg1=1;
    for(let i=0;i<avgCodingScore.length;i++){
sum+=avgCodingScore[i]
    }
    for(let i=0;i<HUKUMUMScore.length;i++){
        sum1+=HUKUMUMScore[i]
    }
    avg=sum/avgCodingScore.length;
    avg1=sum1/HUKUMUMScore.length;

let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
if(avg>=score && avg1>=score){
    resolve(avg,avg1)
}else{
    reject("Sory you haven't cleared the final cuttoff.")
}
    },2000)
})
console.log(promise)
}

unitMovementCheck([15,20,18,16,14],[12,18,15,16,13],15)