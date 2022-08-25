const save= async()=>{
    let nombre = document.getElementById('1').value
    let precio = document.getElementById('2').value
    let url = document.getElementById('3').value

try {
    const data ={nombre, precio, url}
    const response= await fetch('/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}

    })
    const result = await response.json()
    return result
} catch (error) {
    console.log(error);
}}