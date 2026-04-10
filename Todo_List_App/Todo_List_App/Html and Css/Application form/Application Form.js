// Submit button ko select kar rahe hain
const submitBtn = document.getElementById("submit");

// Jab button click ho to yeh function chale
submitBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Form submit hone par page reload rokta hai

  // Input fields ki values le rahe hain
  const firstName = document.getElementById("First_name").value.trim();
  const lastName = document.getElementById("Last_Name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const password_match = document.getElementById("password_match").value;
  const phoneNumber = document.getElementById("phone_number").value;
  const dateBirth = document.getElementById("date_brith").value;
  const select = document.getElementById("select").value;
  const field = document.getElementById("field").value;
  const file_upload = document.getElementById('file_upload').value;
  const time = document.getElementById('time').value;
  const range = document.getElementById('range').value;
  const textarea = document.getElementById('textarea').value;
  const term_and_condition = document.getElementById('term_and_condition');

  // Radio aur checkbox groups
  const genderRadios = document.getElementsByName("gender");
  const skillCheckbox = document.getElementsByName("skills");

  // Error message show karne ke liye elements
  const Firstname_error = document.getElementById("Firstname_error");
  const Lastname_error = document.getElementById("Lastname_error");
  const email_error = document.getElementById("email_error");
  const passoword_error = document.getElementById("passoword_error");
  const notmatch_error = document.getElementById("notmatch_error");
  const date_error = document.getElementById("date_error");
  const phone_error = document.getElementById("phone_error");
  const gender_error = document.getElementById("gender_error");
  const study_error = document.getElementById("study_error");
  const skills_error = document.getElementById("skills_error");
  const upload_error = document.getElementById("upload_error");
  const time_error = document.getElementById("time_error");
  const level_error = document.getElementById("level_error");
  const textarea_error = document.getElementById("textarea_error");
  const term_error = document.getElementById("term_error");
  const sumbit_error = document.getElementById("sumbit_error");

  // Validation ke liye regex patterns
  const firstNameRegex = /^[A-Za-z]{3,20}$/;
  const passwordRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,20}/;
  const phoneNumberRegex = /^(\+92|0)?3\d{9}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Pehle se jo errors hain unko clear karna
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  let isvalid = true; // Form valid hai ya nahi track karega

  // First Name Validation
  if (firstName === "") {
    Firstname_error.textContent = "Enter your first name";
    isvalid = false;
  } else if (!firstNameRegex.test(firstName)) {
    Firstname_error.textContent = "First name not valid";
    isvalid = false;
  }

  // Last Name Validation
  if (lastName === "") {
    Lastname_error.textContent = "Enter your last name";
    isvalid = false;
  } else if (!firstNameRegex.test(lastName)) {
    Lastname_error.textContent = "Last name not valid";
    isvalid = false;
  }

  // Email Validation
  if (email === "") {
    email_error.textContent = "Please enter your email";
    isvalid = false;
  } else if (!emailRegex.test(email)) {
    email_error.textContent = "Email not valid";
    isvalid = false;
  }

  // Phone Number Validation
  if (phoneNumber === "") {
    phone_error.textContent = "Please enter your phone number";
    isvalid = false;
  } else if (!phoneNumberRegex.test(phoneNumber)) {
    phone_error.textContent = "Phone number must start with 03 or +92";
    isvalid = false;
  }

  // Password Validation
  if (password === "") {
    passoword_error.textContent = "Please enter your password";
    isvalid = false;
  } else if (!passwordRegex.test(password)) {
    passoword_error.textContent =
      "Password must contain uppercase, lowercase, number and special character";
    isvalid = false;
  }

  // Confirm Password Match
  if (password !== password_match) {
    notmatch_error.textContent = "Passwords do not match";
    isvalid = false;
  }

  // Date of Birth Validation (Age check)
  if (!dateBirth) {
    date_error.textContent = "Please select your date of birth";
    isvalid = false;
  } else {
    const dob = new Date(dateBirth);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // Exact age calculate karna
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    // Age restriction
    if (age < 18) {
      date_error.textContent = "You must be 18 years or older";
      isvalid = false;
    }
  }

  // Gender Validation (radio button)
  let selected = false;

  for (let i = 0; i < genderRadios.length; i++) {
    if (genderRadios[i].checked) {
      selected = true;
      break;
    }
  }

  if (!selected) {
    gender_error.textContent = "Please select your gender";
    isvalid = false;
  }

  // Dropdown Validation
  if (select == "") {
    education_error.textContent = "Please select your education";
    isvalid = false;
  }

  if (field == "") {
    study_error.textContent = "Please select your Field";
    isvalid = false;
  }

  // Skills Validation (checkbox)
  selected = false; // reset karna zaroori hai

  for (let i = 0; i < skillCheckbox.length; i++) {
    if (skillCheckbox[i].checked) {
      selected = true;
      break;
    }
  }

  if (!selected) {
    skills_error.textContent = "Please select your skills";
    isvalid = false;
  }

  // File Upload Validation
  if (!file_upload) {
    upload_error.textContent = "Please upload your pic";
    isvalid = false;
  }

  // Time Validation
  if (!time) {
    time_error.textContent = "Please enter time";
    isvalid = false;
  }

  // Range Validation
  if (range == 0) {
    level_error.textContent = "Please select your Experience";
    isvalid = false;
  } else if (range > 10) {
    level_error.textContent = "Please select your experience between 0-10";
    isvalid = false;
  }

  // Textarea Validation
  if (!textarea) {
    textarea_error.textContent = "Please enter information about yourself";
    isvalid = false;
  }

  // Terms & Conditions Validation
  if (!term_and_condition.checked) {
    term_error.textContent = "Please agree to the Terms & Conditions";
    isvalid = false;
  }
sumbit_error
  // Final Submit Check
  if(isvalid == false){
sumbit_error.textContent =  "Please fill in all required fields before submitting"
  }
  else if (isvalid) {
    alert("Form Submitted Successfully ✅");
  }
});
document.getElementById("reset").addEventListener("click",function rest(){
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
})
