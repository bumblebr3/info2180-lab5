let lookupBtn = document.getElementById("lookup");
let citiesBtn = document.getElementById("lookupCities");
let result = document.getElementById("result");

function requestHttp(){
    if (this.readyState === XMLHttpRequest.DONE){
        if (this.status === 200){
            let respone = this.responseText;
            result.innerHTML = respone;
        }else{
            result.innerHTML = "An error occured";
        }
    }
}
 
lookupBtn.addEventListener("click", function(){
    const httpRequest = new XMLHttpRequest();
    let country = document.getElementById("country").value;
    let url = "world.php?country=" + encodeURIComponent(country)+"&lookup=country";
    httpRequest.onreadystatechange = requestHttp;
    httpRequest.open('GET', url);
    httpRequest.send();
});

citiesBtn.addEventListener("click",function(){
    const httpRequest = new XMLHttpRequest();
    let country = document.getElementById("country").value;
    let url = "world.php?country=" + encodeURIComponent(country) +"&lookup=cities";
    httpRequest.onreadystatechange = requestHttp;
    httpRequest.open('GET', url);
    httpRequest.send();
})
