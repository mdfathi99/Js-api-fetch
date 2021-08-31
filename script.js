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
        mainContainer.innerHTML += `
            <div class="news">
              <img src=${data[i]["image_url"]} />
              <h1 class="heading">${data[i].name}</h1>
              <p class="excerpt">${data[i].description.slice(0, 100)}</p>
            </div>
          `
    }
}