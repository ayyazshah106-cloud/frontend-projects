const qrinput = document.getElementById('qr-input');


const qrbtn = document.getElementById('qr-button');


const qrimg = document.getElementById('qr-img');


qrbtn.addEventListener('click',()=> {
const inputvalue = qrinput.value;
console.log(inputvalue)
  if (!inputvalue) {
    alert('Please Enter Vaild URL');
    return;
  }else {
    qrimg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
    qrimg.alt = `QR Code for that ${inputvalue}`;

  }

});

