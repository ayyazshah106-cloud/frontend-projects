
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();

const firstName = document.getElementById("First_name").value;
const lastName = document.getElementById("Last_Name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


const passworda_match = document.getElementById("password_match").value;
console.log(passworda_match);
const phoneNumber = document.getElementById("phone_number").value;
const dateBirth = document.getElementById("date_brith");

const genderMale = document.getElementById("Gender"); // Note: HTML me sab radio ka same id hai, ideally unique ID deni chahiye
const genderFemale = document.getElementById("Gender");
const genderOther = document.getElementById("Gender");
const Firstname_error = document.getElementById("Firstname_error");
const Lastname_error = document.getElementById("Lastname_error");
const email_error = document.getElementById("email_error");
const passoword_error = document.getElementById("passoword_error");
const notmatch_error = document.getElementById("notmatch_error");
// const passoword_error = document.getElementById("phone_error");





const skillWeb = document.getElementById("skills"); // 

const fileUpload = document.getElementById("file_upload");
const timeInput = document.getElementById("time");
const experienceLevel = document.getElementById("range");

const aboutTextarea = document.getElementById("textarea");
const termsAndConditions = document.getElementById("term_and_condition");


const firstNameRegex = /^[A-Za-z]{3,20}$/;
const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,20}/
const phoneNumberRegex = /^(\+92|0)?3\d{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


document.querySelectorAll('.error').forEach((Element) =>(Element.textContent=''));



if(!firstNameRegex.test(firstName)){
    Firstname_error.textContent="User name not valid";
}

if(!firstNameRegex.test(lastName)){
    Lastname_error.textContent="User name not valid";
}

if(!emailRegex.test(email)){
    email_error.textContent="Email not valid";
}


if(!phoneNumberRegex.test(phoneNumber)){
    phone_error.textContent="Phone number must be a valid Pakistani number starting with 03 or +92";
}
if(!passwordRegex.test(password)){
    passoword_error.textContent="Password must be 8-20 characters and include uppercase, lowercase, number, and special character";
}

if(password !== password_match){
    passoword_error.textContent="Password not match"
    notmatch_error.textContent="Password not match";
}

})


