function addToCart() {
    // Get product details
    var productName = document.querySelector('.product-details-container h2').innerText;
    var productPrice = 45.00; 

    // Get selected size and quantity
    var selectedSize = document.getElementById('size').value;
    var selectedQuantity = parseInt(document.getElementById('quantity').value);

    // Calculate total price
    var totalPrice = productPrice * selectedQuantity;

    // Construct the cart item
    var cartItem = {
      name: productName,
      size: selectedSize,
      quantity: selectedQuantity,
      price: productPrice,
      total: totalPrice
    };

    // Add the item to the cart 
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Product added to cart!");

  }

  function goBack() {
    window.location.href = document.referrer + "?from=product-details";
  }