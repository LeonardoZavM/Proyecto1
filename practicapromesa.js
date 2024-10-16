const p= new Promise((resolve,reject)=>{
    if(false){
        resolve("exito")
    }
    else {
        reject("fracaso")
    }
 })
 p.then(
    resp=>{
        console.log("f1=",resp)
    }
)
.catch(error=>{
    console.log(error)
} )
.then(data=>{
    return Promise.resolve(
        data.map(d=>{
            
        })
    )
})