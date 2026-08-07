// User loaded a website page
fbq('track', 'PageView');

// User viewed an important product page
fbq('track', 'ViewContent');

// User added a product to cart
fbq('track', 'AddToCart');

// User started checkout
fbq('track', 'InitiateCheckout');

// User completed purchase
fbq('track', 'Purchase', {
  value: 1499.00,
  currency: 'INR'
});
