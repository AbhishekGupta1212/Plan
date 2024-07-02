function HUKUMUScoreCheck(arr,score){
let sum=0;
let avg=1;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
    
}
avg=sum/arr.length;
    let promise=new Promise((resolve,reject)=>{
        if(avg>=score){ 
            resolve(avg)
        }else{
            reject("Sorry you haven't cleared the HUKUMU round.")
        }
    })
    console.log(promise) 

}

HUKUMUScoreCheck([80,90,70,60,85],85)