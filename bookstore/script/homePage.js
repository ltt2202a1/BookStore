async function fetchAPI(url) {
  const response = await fetch(url);
  return response.json();
}
function showHomeProducts(query, url) {
  const products = document.querySelector(
    `#home-products-${query} .home-products__list`
  );
  fetchAPI(url).then((data) => {
    data.forEach((product) => {
      products.innerHTML += `<div class="product-card">
      <img src="${product.img}" alt="${product.name}" />
      <div class="product-card__name">${product.name}</div>
      <div class="product-card__price">${product.price} đ</div>
    </div>`;
    });
  });
}
showHomeProducts(
  "1",
  "http://localhost:3000/products?_sort=quantitySold&_order=desc&_end=5"
);
showHomeProducts(
  "2",
  "http://localhost:3000/products?collection=Doraemon&_order=desc&_end=5"
);
showHomeProducts(
  "3",
  "http://localhost:3000/products?category=manga&_order=desc&_end=5"
);
