
const divtag = document.getElementsByClassName("data-values");
function fetchPromise() {
  const url = "https://api.tcgdex.net/v2/en/sets";
  
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((values) => {

     
      values.forEach((content) => {
        let res = document.createElement("div");
        res.setAttribute("class", "card");
        res.setAttribute("style", "width: 18rem");
        res.innerHTML += ` 
    <img src= "${
      content.logo
    }.png" class="card-img-top" alt="Image Not Available">
    <div class="card-body">
      <p class="card-text"> ID : ${content.id.toUpperCase()} </p>
      <p>Name : ${content.name}</p>
      <p>Card-Count : ${content.cardCount.total}</p>
    </div>`;
        divtag[0].append(res);
      });
    })
    .catch((error) => console.log(error));
}


fetchPromise();