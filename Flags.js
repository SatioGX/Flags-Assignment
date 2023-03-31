async function flagInfo(){
    let data = await fetch('https://restcountries.com/v3.1/all');
    let dataWithJSON = await data.json();
    let finalOutputArray = dataWithJSON;

    let container = document.querySelector('#maincontainer');

    for(let i = 0; i < finalOutputArray.length; i++){
        let cardElement = document.createElement("div");

        cardElement.classList.add("countryCard");
        let flagElement = document.createElement("img");
        flagElement.src = finalOutputArray[i].flags.png;
        flagElement.classList.add("flag");
        cardElement.appendChild(flagElement);

        let countryName = document.createElement("h3");
        countryName.textContent = finalOutputArray[i].name.common;

        let countryPop = document.createElement("h3");
        countryPop.textContent = `Population: ${finalOutputArray[i].population}`;

        cardElement.appendChild(countryName);
        cardElement.appendChild(countryPop);
        container.appendChild(cardElement);
    }
}

flagInfo();