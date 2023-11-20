document.addEventListener("DOMContentLoaded", () => {
  const containerElement = document.getElementById("container");
  const button = document.getElementById("btn");

  button.addEventListener("click", () => submitForm());

  const fetchData = async (cardsQty) => {
    try {
      containerElement.innerHTML = "";

      const response = await fetch(
        `https://randomuser.me/api/?results=${cardsQty}`
      );
      data = await response.json();

      data.results.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <div class="photo-container">
          <img src=${item.picture.large} alt="Card of ${item.name.first} ${item.name.last}"  class="photo"/>
        </div>
        <div class='info-container'>
          <div class="card-name">
            <p>${item.name.title}.</p>
            <p>${item.name.first}</p>
            <p>${item.name.last}</p>
          </div>
          <div class="info-item">
            <h5>Address:</h5>
              <h6>${item.location.street.number} ${item.location.street.name} st</h6> 
                <h6> ${item.location.state} / ${item.location.country}</h6> 
          </div>
            <div class="info-item">
              <h5>Phone number: </h5>
              <p>${item.phone}</p>
            </div>
            <div class="info-item">
              <h5>Email address: </h5>
              <p>${item.email}</p>
            </div>
        </div>
      `;
        containerElement.appendChild(card);
      });
    } catch (err) {
      alert("ERROR: " + err);
    }
  };

  function submitForm() {
    const cardsQty = document.getElementById("cards-qty").value;

    if (cardsQty <= 0) {
      console.log(cardsQty);
      alert("Please select a number bigger than zero.");
      return;
    } else {
      fetchData(cardsQty);
    }

    document.getElementById("cards-qty").value = "";
  }

  fetchData(3);
});
