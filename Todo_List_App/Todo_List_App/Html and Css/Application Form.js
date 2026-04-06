
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();

const firstName = document.getElementById("First_name").value;
const lastName = document.getElementById("Last_Name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password_match = document.getElementById("password_match");
const phoneNumber = document.getElementById("phone_number");
const dateBirth = document.getElementById("date_brith");

const genderMale = document.getElementById("Gender"); // Note: HTML me sab radio ka same id hai, ideally unique ID deni chahiye
const genderFemale = document.getElementById("Gender");
const genderOther = document.getElementById("Gender");




const skillWeb = document.getElementById("skills"); // 

const fileUpload = document.getElementById("file_upload");
const timeInput = document.getElementById("time");
const experienceLevel = document.getElementById("range");

const aboutTextarea = document.getElementById("textarea");
const termsAndConditions = document.getElementById("term_and_condition");

console.log(firstName);

const firstNameRegex = /^[A-Za-z]{3,20}$/;
const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,20}/
const phoneNumberRegex = /^(\+92|0)?3\d{9}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

})


