const submit=document.getElementById('form')


submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.getElementById('name').value
const email=document.getElementById('email').value
const phno=document.getElementById('phno').value
const country=document.getElementById('country').value
const state=document.getElementById('state').value


console.log(
   ` name=${name}
    email=${email}
    phno=${phno}
    country=${country}
    state=${state}`

)
})

