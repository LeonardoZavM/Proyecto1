url="https://jsonplaceholder.typicode.com/users"

async function leer(){
    const result= await fetch(url)
    const data= await result.json()
    return data

}

async function muestra(){
    const data= await leer()
    console.log(data)
}
muestra()