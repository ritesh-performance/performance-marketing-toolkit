// User loaded a website page
fbq('track', 'PageView');

// User viewed an important product page
fbq('track', 'ViewContent');

fbq('track', 'AddToCart', {
  content_ids: ['SHOE123'],
  content_type: 'product',
  value: 2000,
  currency: 'INR'
});
// User started checkout
fbq('track', 'InitiateCheckout');

// User completed purchase
fbq('track', 'Purchase', {
  value: 1499.00,
  currency: 'INR'
});
