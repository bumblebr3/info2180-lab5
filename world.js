let lookupBtn = document.getElementById("lookup");
let result = document.getElementById("result");
 
lookupBtn.addEventListener("click", function(){
    const httpRequest = new XMLHttpRequest();
    let country = document.getElementById("country").value;
    let url = "world.php?country=" + encodeURIComponent(country);
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                let respone = httpRequest.responseText;
                result.innerHTML = respone;
            }else{
                result.innerHTML = "Country not found";
            }
        }
    }
    httpRequest.open('GET', url);
    httpRequest.send();
});

