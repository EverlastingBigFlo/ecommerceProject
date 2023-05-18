// fetch product

async function fetchData(){
    try {
     const data = await fetch('https://dummyjson.com/products')
     let product = data.json()
     console.log(product);
     dataCollection = "";

     // for (each in data) {
         product.forEach(Element => {
      dataCollection+=`<div class="card d-flex justify-content-center text-center col-12 col-md-6 col-lg-4 ">
               <div class=" text-dark">
                 <h6>Category : ${Element.category}</h6>
                 <h6>description : ${Element.description}</h6>
                 <h6>id : ${Element.id}</h6>
                 <img src=${Element.image} alt="" class="img-fluid">
                 <h1>price : ${Element.price}</h1>
                 <p>title : ${Element.title}</p>
                 
                 <p>Rate :${[...Array(Math.floor(Element.rating.rate))].forEach((elem,i)=>{
                  
               })}</p> 

                
                 </div>
         </div>
         `
 });
    } catch (error) {
     console.log(error);
    }
    
 }
 
 
 fetchData()