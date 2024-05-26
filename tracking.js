var x = document.getElementById('about')
x.style.color = 'green'

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.visited) {
    localStorage.visited = Number(localStorage.visited)+1;
  } else {
    localStorage.visited = 1;
  }
  var string = `url-visited: ${document.URL} \n user-agent: ${navigator.userAgent} \n times-visited: ${localStorage.visited}`
  data = {content:string}
  fetch('https://discord.com/api/webhooks/1244270751159422996/a4EUkyAkKXb8GJi5hL8jNg9HFNwrNBdACSsiDpYMJym0CLavvj4iYrw2fjIfyEHQvAt4', {
     method: "POST", // *GET, POST, PUT, DELETE, etc.
     headers: {
       "Content-Type": "application/json",
       // 'Content-Type': 'application/x-www-form-urlencoded',
     },
     body: JSON.stringify(data), // body data type must match "Content-Type" header
   }).then(() => {
      console.log('w')
      if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
      }
   }).catch(error =? {
    console.log(error)
  }
})
