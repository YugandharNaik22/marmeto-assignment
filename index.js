
window.onload = async function () {
  
    try {
      const response = await fetch('https://products-api-2ttf.onrender.com/api/products');
      const products = await response.json();
      renderProducts(products); // Initially render all products
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  
    function renderProducts(productsArray) {
        const productsContainer = document.getElementById('productsContainer');
        productsContainer.innerHTML = ''; // Clear previous products
        
        // Render only the second and third products
        for (let i = 1; i <= 2; i++) {
          const product = productsArray[i];
          if (product) {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
              <img alt="${product.title}" src="${product.image}" >
              <h3>${product.title}</h3>
            `;
            productsContainer.appendChild(productElement);
          }
        }
        
        // Add text after the two images
        const textElement = document.createElement('div');
        textElement.innerHTML = `
          <p>"Fashion is not <br/> about clothes,
          it is <br/> about a look"</p>
        `;

// Apply CSS styles directly
textElement.style.fontFamily = 'Gilroy, sans-serif'; // Font family
textElement.style.fontWeight = '600'; // Font weight
textElement.style.fontSize = '22px'; // Font size


textElement.style.textAlign = 'center'; // Align center
textElement.style.paddingBlockStart = "10%";

        productsContainer.appendChild(textElement);
      }
      
  };
  