const productUl = document.querySelector(".ul-products")
const productContainer = document.querySelector (".image-box-products-flowers")

const getMediaForProduct = (featuredMediaId) => {
  return fetch(`https://olekorvald.no/wp-json/wp/v2/media/${featuredMediaId}`)
    .then(response => response.json())
    .then(data => {

      const thumbnailUrl = data.media_details.sizes.thumbnail.source_url
      return thumbnailUrl
    })
}
/*Feth the data from the product*/
fetch("https://olekorvald.no/wp-json/wp/v2/product")
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {


      const featuredMediaId = product.featured_media
      console.log(featuredMediaId)
      

      const productBox = document.createElement ("div")
      productBox.setAttribute ("class", "add-to-cart-button")

 

      const title = document.createElement ("h1")
      title.innerHTML = product.title.rendered
      productBox.appendChild (title)



     
      
      productContainer.appendChild(productBox)
      getMediaForProduct(featuredMediaId)
        .then(thumbnailUrl => {
          const productImages = document.createElement("img")
          productImages.setAttribute("src",thumbnailUrl) 
          productImages.setAttribute("class", "single-flower-products")
          productBox.appendChild (productImages)

        })
    });
  })


