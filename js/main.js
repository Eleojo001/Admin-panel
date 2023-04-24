

let prouctIpAdd = "http://159.65.21.42:9000";
product = [];



GetNewProduct();
function GetNewProduct() {
    $.ajax({
        type: 'GET',
        url: `${prouctIpAdd}/products`,
        success: function (response) {
            product = response;
            console.log(response)
            let cover = '';
            let coverTwo = '';
            for (let index = 0; index < product.length; index++) {
                if (product[index]["category"] == "men's-slippers") {
                  cover += `<div class="mens-grider">
                        <div class="mens-grider-hold">
                            <div class="shoe-imgs">
                                <a my book ></a>
                                <a href="product.html"><img src="${prouctIpAdd}${product[index]["image"]}"  alt=""></a>
                            </div>
                            <p><b>${product[index]["name"]}</b></p>
                            <p>${product[index]["description"]}<br>${product[index][price]}</p>
                            </div>
                        </div>`;
                  $("#mens-grider").html(cover);
                }
                
                if (product[index]['category'] == "ele-men") {
                    coverTwo+=`<div class="j1">
                        <img src="${prouctIpAdd}${product[index]['image']}" alt="">
                        <h4>Name:${product[index]['name']}</h4>
                        <h4>Price:${product[index]['pirce']}</h4>
                        <h4>Quantity:${product[index]['quantity']}</h4>
                        <h4><a href="#">Edit</a> / <a href="#">Delete</a></h4>
                    </div>`

                    
                    $('.gridProduct').html(coverTwo);
                    console.log(coverTwo);

                }
            }
        }
        
    
    })
}