document.getElementById("helloBtn").addEventListener("click", function() {
  alert("Hello, world!");
 
}
 function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      const jokeText = `${data.setup} — ${data.punchline}`;
      document.getElementById("joke").textContent = jokeText;
    })
    .catch(error => {
      document.getElementById("joke").textContent = "Oops, couldn't load a joke!";
      console.error("Error fetching joke:", error);
    });
});

