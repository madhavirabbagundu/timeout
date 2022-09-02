const promise = new Promise(function(res,rej){
    var a = "10"
    var b = "10"
    if(a === b){
        res()
    }
    else{
        rej()
    }
})
promise.then((function(res){
    console.log("sucess")
})).catch((function(){
    console.log("failure")
}))