fetch ('https://api.punkapi.com/v2/beers')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
    var mainContainer = document.getElementById("news1");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.className = "news"

        const h1 = document.createElement("h1")
        h1.className="heading"

        const img = document.createElement("img")
        const p = document.createElement("p")
        p.className="excerpt"
        
        h1.innerHTML = data[i].name
        img.src= data[i]["image_url"]
        img.style.height = '300px';
        img.style.display = 'block';
        img.style.marginLeft = "auto";
        img.style.marginRight = "auto";
        img.style.width = "50%";
        p.innerHTML = data[i].description;

        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(p)

        mainContainer.appendChild(div)
    }
}
