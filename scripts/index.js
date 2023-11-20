document.addEventListener("DOMContentLoaded", () => {
  const containerElement = document.getElementById("container");

  let data = [];

  const fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=3");
    data = await response.json();

    let card = null;
    data.results.forEach((item) => {
      console.log(item.name.first);
      card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
      <div class="photo-container">
        <img src=${item.picture.large} alt="Card of ${item.name.first} ${item.name.last}"  class="photo"/>
      </div>
      <div class="card-item">
        <p class="name">${item.name.title}.</p>
        <p class="name">${item.name.first}</p>
        <p class="name">${item.name.last}</p>
      </div>
      <div>
        <p class="address">
          ${item.location.street.number} 
          ${item.location.street.name} - 
          ${item.location.state} / 
          ${item.location.country}
        </p>
      </div>
      <div class="contact-details">
        <p>Phone number: ${item.phone}</p>
        <p>Email address: ${item.email}</p>
      </div>
      `;

      container.appendChild(card);
    });
    console.log(data.results);
    return card;
  };

  fetchData();
});
