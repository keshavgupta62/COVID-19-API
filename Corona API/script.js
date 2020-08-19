var data1 = document.querySelector(".data1");
var data2 = document.querySelector(".data2");
var data3 = document.querySelector(".data3");
var data4 = document.querySelector(".data4");
var data5 = document.querySelector(".data5");
var data6 = document.querySelector(".data6");

function getData() {
    var url = "https://api.covid19api.com/summary";
    fetch(url).then((response)=> {
        return response.json();
    })
    .then((data)=> {
        data1.innerHTML = `${data.Global.NewConfirmed}`;
        data2.innerHTML = `${data.Global.NewDeaths}`;
        data3.innerHTML = `${data.Global.NewRecovered}`;
        data4.innerHTML = `${data.Global.TotalConfirmed}`;
        data5.innerHTML = `${data.Global.TotalDeaths}`;
        data6.innerHTML = `${data.Global.TotalRecovered}`;
    })
}
getData();