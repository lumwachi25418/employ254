
const inputs=document.querySelectorAll(".signupinputs");
console.log(inputs)
const submitbtn2=document.querySelector(".submitbtn2")
console.log(submitbtn2)
const signuperror=document.querySelector(".signuperror")
console.log(".signuperror")
submitbtn2.addEventListener("click",function(e){
    e.preventDefault()
    const company={};
    let companies=[];
   inputs.forEach((signupinputs)=>{
    if(signupinputs.value===""){
        signuperror.textContent="kindly fill in all fields"
        signupinputs.style.border="2px solid red"
    }else if(document.querySelector("[name=password]").value !==document.querySelector("[name=confirm]").value)
    {
signuperror.textContent="passwords don't match";
document.querySelector("[name=password]").style.border="2px solid red";
document.querySelector("[name=confirm]").style.border="2px solid red";

        
    }
    else{
        signupinputs.style.border="none";

        if(signupinputs.name!=="confirm"){
            signuperror.textContent="";
            companies[`${signupinputs}`]=signupinputs.value;
        }
    }
    
   } );
   console.log(signuperror);




   if(signuperror.texcontent === ""){
    if(localStorage.getItem("companies") === null){
        companies.push(company);
        localStorage.setItem("companies",JSON.stringify(companies));

    }else{
        companies= JSON.parse(localstorage.getItem(companies));
        companies.push(company);
        localStorage.setItem("companies",JSON.stringify(companies));

    }
    console.log(company);
   }
})

const type = document.querySelectorAll(".signp");
console.log(type);
const submitbtn1 = document.querySelector(".submitbtn1");
console.log(submitbtn1);
const sign = document.querySelector(".sign");
console.log(sign);

let employees = [];

submitbtn1.addEventListener("click", function(e) {
    e.preventDefault();
    const employee = {};
    
    type.forEach((signp) => {
        if (signp.value === "") {
            sign.textContent = "Kindly fill in all fields";
            signp.style.border = "2px solid red";
        } else if (document.querySelector("[password]").value !== document.querySelector("[confirm]").value) {
            sign.textContent = "Passwords don't match";
            document.querySelector("[password]").style.border = "2px solid red";
            document.querySelector("[confirm]").style.border = "2px solid red";
        } else {
            signp.style.border = "none";
        }
        if (signp.name !== "confirm") {
            sign.textContent = "";
            employee[signp.name] = signp.value;
        }
    });

    console.log(sign);
    
    if (sign.textContent === "") {
        if (localStorage.getItem("employees") === null) {
            employees.push(employee);
            localStorage.setItem("employees", JSON.stringify(employees));
        } else {
            employees = JSON.parse(localStorage.getItem("employees"));
            employees.push(employee);
            localStorage.setItem("employees", JSON.stringify(employees));
        }
        console.log(employee);
    }
    window.location.href="sign_in.html"

});
