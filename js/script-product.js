const queryString = window.location.search;
const id = new URLSearchParams(queryString).get('id');
if (!id) { window.location = "products.html"; }
const output = document.querySelector(".product");

const displayProduct = (data) => {
console.log (data)
    const name = data.name;
    const description = data.description
    const link = data.permalink;
    const pictureUrl = data.images[0].thumbnail

    let content = `
          <h1>${name}</h1>
          ${description}
          <img src ="${pictureUrl}"/>
            <p>&gt; <a href="${link}" target="_blank">view more @ olekorvald.no</a></p>  
            `;

    output.innerHTML = content;
    document.title = name;
}

const url = `https://olekorvald.no/wp-json/wc/store/products/${id}`;
fetch(url)
    .then(response => response.json())
    .then(data => {
       
        displayProduct(data);
    })

    .catch((error) => {
        console.error('Error:', error);
    });

