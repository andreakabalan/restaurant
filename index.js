function fill(linkName) {
    document.getElementById("menu").innerHTML='';

    var link = "http://restaurant12032020.herokuapp.com/" + linkName;

    fetch(link)
        .then(response => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                var card = document.createElement("div");
                card.className = "card";

                var content = `<img class="card-img-top" src="item-img" alt="Card image">
                    <div class="card-body">
                    <h4 class="card-title">item-name</h4>
                    <h6 class="card-subtitle mb-2 text-danger">item-offer</h6>
                    <p class="card-text">item-des</p>
                    <div class="buy d-flex justify-content-between align-items-center" id="price">
                    <div class="price text-success"><h5 class="mt-4">$item-price</h5></div>
                    </div>
                    </div>`;
                
                    content = content.replace("item-name", json[i].name);
                    content = content.replace("item-img", json[i].picture);
                    content = content.replace("item-des", json[i].description);
                    content = content.replace("item-offer", json[i].offer);
                    content = content.replace("item-price", json[i].price);
                                
                    card.innerHTML = content;

                    document.getElementById("menu").appendChild(card);
                
            }
        })
}