import { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import "./App.css";

function App() {

const products = [
{ id: 1, name: "Headphones", price: 1500 },
{ id: 2, name: "Smart Watch", price: 2500 },
{ id: 3, name: "Bluetooth Speaker", price: 3000 }
];

const [cart, setCart] = useState([]);

const addToCart = (product) => {
setCart([...cart, product]);
};

const removeFromCart = (indexToRemove) => {
setCart(cart.filter((_, index) => index !== indexToRemove));
};

return (
<div className="container">

<h1>🛒 Smart Shopping Cart</h1>

<div className="layout">

<div>
<h2>Products</h2>

<div className="product-list">
{products.map((product) => (
<ProductCard
key={product.id}
product={product}
addToCart={addToCart}
/>
))}
</div>

</div>

<Cart
cart={cart}
removeFromCart={removeFromCart}
/>

</div>

</div>
);
}

export default App;
