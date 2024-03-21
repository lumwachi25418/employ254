
const inputs=document.querySelectorAll("input");
console.log(inputs)
const submitbtn=document.querySelector(".submitbtn")
console.log(submitbtn)
const forgotbtn=document.querySelector(".forgotbtn")
console.log(forgotbtn)


const signin_error=document.querySelector(".signin-error")

console.log(signin_error)
submitbtn.addEventListener("click",function(e){
    e.preventDefault()
    inputs.forEach((input)=>{

        if(input.value===""){
            signin_error.textContent="Kindly fill all fields"
            input.style.border="2px solid red" 
        }
    })
    console.log(signin_error)
    window.location.href="profile.html"
})






