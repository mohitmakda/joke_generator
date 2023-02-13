const button = document.getElementById("btn");
const jokey = document.getElementById("joke");
const apikey = "cLKjDEFw8gFKepYHPb2c2g==ziF2wSA659fweTIy";
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apikey,
    },
  };
  





async function getJoke(){
  try {
    jokey.innerText="updating..";
    button.disabled=true;
    button.innerText="loading..";

    const response = await fetch(apiUrl,options);
    const data = await response.json();

    button.disabled=false;
    button.innerText="tell me a joke";
    jokey.innerText= data[0].joke;
    
  } catch (error) {
    jokey.innerText="An error occured,try again!";
    button.disabled=false;
    button.innerText="tell me a joke";
    console.log(error);
  }

}





button.addEventListener("click",getJoke);


// const btnEl = document.getElementById("btn");
// const jokeEl = document.getElementById("joke");

// const apiKey = "4kqGcJx8uDXo3XIskcbzokAz7rN8nWJs3PL9Mcll";

// const options = {
//   method: "GET",
//   headers: {
//     "X-Api-Key": apiKey,
//   },
// };

// const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// async function getJoke() {
//   try {
//     jokeEl.innerText = "Updating...";
//     btnEl.disabled = true;
//     btnEl.innerText = "Loading...";
//     const response = await fetch(apiURL, options);
//     const data = await response.json();

//     btnEl.disabled = false;
//     btnEl.innerText = "Tell me a joke";

//     jokeEl.innerText = data[0].joke;
//   } catch (error) {
//     jokeEl.innerText = "An error happened, try again later";
//     btnEl.disabled = false;
//     btnEl.innerText = "Tell me a joke";
//     console.log(error);
//   }
// }

// btnEl.addEventListener("click", getJoke);
