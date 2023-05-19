


// fetch product

async function fetchData(){
    try {
     const data = await fetch('https://fakestoreapi.com/products')
     let product = await data.json()
     console.log(product);
     dataCollection = "";

     // for (each in data) {
         product.forEach(Element => {
      dataCollection+=`<div class="card col-12 col-md-6 col-lg-4 d-flex justify-content-between align-items-center">
               <div class="productBox text-dark">
                        <h6>Category : ${Element.category}</h6>
                        <h6>description : ${Element.description}</h6>
                        <img src=${Element.image} alt="" class="img-fluid">
                        <h6>id : ${Element.id}</h6>
                        <h1>price : ${Element.price}</h1>
                        <p>title : ${Element.title}</p>
                        <button class="btn btn-dark">View</button>
                 </div>
         </div>
         `
 });
//  <p>Rate :${[...Array(Math.floor(Element.rating.rate))].forEach((elem,i)=>{})}</p> 
 document.querySelector('#display').innerHTML = dataCollection
    } catch (error) {
     console.log(error);
    }
    
 }
 
 
 fetchData()