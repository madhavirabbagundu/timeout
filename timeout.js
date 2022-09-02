var arr = [1,2,3,4,6]
for(let i = 0; i < arr.length; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}