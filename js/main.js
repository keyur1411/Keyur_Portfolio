var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.width = "230px";
}

function closemenu() {
  sidemeu.style.width = "0";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbxP_LLJf2PwYwKBWIbPoWLlVgXLN8aoJwQTlx6B8F1qs7SFRhLWPUY-ozCF9DkdixUa/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML ="Message Sent Successfully !"
      setTimeout(function(){
        msg.innerHTML=""
      },5000)
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
