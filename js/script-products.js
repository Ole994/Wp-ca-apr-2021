
//get the data from wordpress from the URL and fetch the data and into the 
//console.log to check if it is set up right
const url = "https://olekorvald.no/wp-json/wc/store/products/";
           
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    listProducts (data)
  });

  // .catch (error)=> {
  //   console.log ("error:", error)
  // }



const output = document.querySelector("#products");
  function listProducts(products) {
  let myList = "";
  for (let product of products) {
    console.log(product);
    myList += `
      <div>
          <img src="${product.images[0].thumbnail}"/>  
          <h2>${product.name}</h2>      
          <h3>${product.price_html}</h3> 

          <a href="product.html?id=${product.id}">view more</a>
      </div>`; 
  }
    output.innerHTML = myList;
}
