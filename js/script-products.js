
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








































// const productUl = document.querySelector(".ul-products")
// const productContainer = document.querySelector (".image-box-products-flowers")

// const getProductsForProduct = (featuredProductsId) => {
//   return fetch(`https://olekorvald.no/wp-json/wc/store/products/${featuredProductsId}`)
//     .then(response => response.json())
//     .then(data => {

//       const thumbnailUrl = data.products_details.sizes.thumbnail.source_url
//       return thumbnailUrl
//     })
// }
// /*Feth the data from the product*/
// fetch("https://olekorvald.no/wp-json/wp/v2/product")
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(product => {


//       const featuredProductsId = product.featured_products
//       console.log(featuredProductsId)


//       const productBox = document.createElement ("div")
//       productBox.setAttribute ("class", "add-to-cart-button")



//       const title = document.createElement ("h1")
//       title.innerHTML = product.title.rendered
//       productBox.appendChild (title)





//       productContainer.appendChild(productBox)
//       getProductsForProduct(featuredProductsId)
//         .then(thumbnailUrl => {
//           const productImages = document.createElement("img")
//           productImages.setAttribute("src",thumbnailUrl) 
//           productImages.setAttribute("class", "single-flower-products")
//           productBox.appendChild (productImages)

//         })
//     });
//   })






















// const productUl = document.querySelector(".ul-products")
// const productContainer = document.querySelector (".image-box-products-flowers")



// const getMediaForProduct = (featuredMediaId) => {
//   return fetch(`https://olekorvald.no/wp-json/wp/v2/media/${featuredMediaId}`)
//     .then(response => response.json())
//     .then(data => {

//       const thumbnailUrl = data.media_details.sizes.thumbnail.source_url
//       return thumbnailUrl
//     })
// };






// /*Fetch the data from the product*/
// fetch("https://olekorvald.no/wp-json/wp/v2/product")
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(product => {


//       const featuredMediaId = product.featured_media
//       console.log(featuredMediaId)

//       //Creating a ghost button
//       const mainButton = document.createElement ("button")
//         mainButton.textContent = "view more"

//         mainButton.classList.add ("mainButton")
//         mainButton.innerHTML = "hey"

      
      
//       const productBox = document.createElement ("div")
//       productBox.setAttribute ("class", "productBox")



//       const title = document.createElement ("h1")
//       title.innerHTML = product.title.rendered
//       productBox.appendChild (title)





//       productContainer.appendChild(productBox)
//       getMediaForProduct(featuredMediaId)
//         .then(thumbnailUrl => {
//           const productImages = document.createElement("img")
//           productImages.setAttribute("src",thumbnailUrl) 
//           productImages.setAttribute("class", "single-flower-products")
//           productBox.appendChild (productImages)

          

//         })
//     });
//   })


