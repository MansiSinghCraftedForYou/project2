function customize(productType) {
    const modal = document.getElementById('customization-modal');
    // Show the customization modal
    modal.style.display = 'block';
    // You can add customization options dynamically based on the product type
}

function closeModal() {
    const modal = document.getElementById('customization-modal');
    // Close the customization modal
    modal.style.display = 'none';
}

// function goBack() {
//     window.location.href = document.referrer + "?from=product-details";
//   }