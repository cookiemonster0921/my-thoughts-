var form = document.getElementById('form')
var fname = document.getElementById('name')
var contact = document.getElementById('contact')
var message = document.getElementById('message')
var submit = document.getElementById('submit')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  var text =  `contact: ${contact.value} \n message ${message.value}`
  var data = {content: text, username:  fname.value}
fetch('https://discord.com/api/webhooks/1245648086152249344/4iLdubpxFuUWapOfTDyFj9o46fBJt9towUYn8ajKrIXK3l6XOoxK5YcfviVXtfhFXTG4', {
     method: "POST", // *GET, POST, PUT, DELETE, etc.
     headers: {
       "Content-Type": "application/json",
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
     body: JSON.stringify(data), // body data type must match "Content-Type" header
   }).then(() => {
      submit.value = 'Submitted! Thank you!'
      console.log('sent')
   }).catch((error) => {
      submit.value = 'Error occured :('
   })
  
})
