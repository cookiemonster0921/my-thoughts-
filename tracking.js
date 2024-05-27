console.log('hello there')

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.visited) {
    localStorage.visited = Number(localStorage.visited)+1;
  } 
  else {
    localStorage.visited = 1;
  }
  var string = `url-visited: ${document.URL} \n user-agent:   ${navigator.userAgent} \n times-visited: ${localStorage.visited}`
  data = {content:string}
  const requestOptions = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: data,
  };

  fetch("https://discord.com/api/webhooks/1244270751159422996/a4EUkyAkKXb8GJi5hL8jNg9HFNwrNBdACSsiDpYMJym0CLavvj4iYrw2fjIfyEHQvAt4?", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

})
