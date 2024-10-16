
const url= "https://jsonplaceholder.typicode.com/users" 
fetch (url) 
.then(res=> { 
    return res.json() 
}) 
 
.then(dato=>{ 
    return Promise.resolve(dato.map(d=> 
    ({id:d.id, 
    name:d.name, 
    username:d.username, 
    email:d.email}))) 
}) 
.then(dato=>{ 
    return Promise.resolve(dato.map(d=>{ 
        `<tr> 
            <td> ${d.id} </td> 
            <td> ${d.name} </td> 
            <td> ${d.userName} </td> 
            <td> ${d.email} </td> 
        </tr> 
        ` 
    })) 
}) 
.then (dato=>{ 
    console.log(dato) 
})