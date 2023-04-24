let gridProduct = document.getElementById('gridProduct');
const array = [
  {
    id: '',
    name: '',
    image: './img/shoe3bck.jpg',
  },
  {
    id: '',
    name: '',
    image: './img/dreams2.jpeg',
  },
  {
    id: '',
    name: '',
    image: './img/shoe7bck.jpg',
  },
  {
    id: '',
    name: '',
    image: './img/shoe5ck.jpg',
  },
];
const solve= (data)=>{
  return `
   <div class="j1">
                        <div class="prodImg">
                            <img src=${data.image} alt="">
                        </div>
                        <div class="prod-descrip">
                        <h4>Name:</h4>
                        <h4>Price:</h4>
                        <h4>Quantity:</h4>
                        <h4><a href="#">Edit</a> / <a href="#">Delete</a></h4>
                        </div>

                    </div>
                   
  `;
}

for(i=0; i<array.length; i++){
let p = array[i]
gridProduct.innerHTML += solve(p);
}

