let n= 10;
let count=0;
for(let i=1;i<=n;i++){
    if (n%i==0){
        count++
    }
}
if(count===2){
    console.log("The number is a prime");
}else{
    console.log('the number is not a Prime');
}