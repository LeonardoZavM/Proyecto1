
fetch ("https://jsonplaceholder.typicode.com/users") 
.then(res=> { 
    return res.json() 
})

.then(dato=>{ 
    return Promise.resolve(
        dato.map(d=> ({
            id:d.id, 
    name:d.name, 
    username:d.username, 
    email:d.email}))) 
}) 
.then(dato=>{
    return Promise.resolve(
        dato.map(d=>{
            return`
            <tr>
                <tr>${d.id}</tr>
                <tr>${d.name}</tr>
                <tr>${d.username}</tr>
                <tr>${d.email}</tr>
            </tr>
        `
})
    )
})
.then (str=>{ 
    console.log(str) 
})

.catch(err=>{
    console.log(err)
})