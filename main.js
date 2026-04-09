function classify() {
    let kwh = document.getElementById("kWhInput").value;
    kwh = Number(kwh);

    if (kwh >= 0 && kwh <= 100)
    {
        window.alert("Lifeline Consumer: Discounted electricity rates");
    }

    else if (kwh<= 200) {
        window.alert ("Low Consumptuon: Normal residential rate");
    }

     else if (kwh<= 300) {
        window.alert ("Average Consumption: Typical residential rate");
    }

     else if (kwh<= 500) {
        window.alert ("High Consumption: Higher elecetricity usage");
    }

     else if (kwh > 500) {
        window.alert ("Very High Consumption: Heavy electricty users");
    }

     else {
        window.alert ("Please enter a valid number.");
    }
}
