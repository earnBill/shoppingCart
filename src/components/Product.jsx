
export default function Product({
    id,
    image, 
    title, 
    price, 
    category, 
    updateQuantity, 
    addToCart
}) {
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={image} />    
      </div>
      <div className="product-info">
        <h2>{title}</h2>
        <div className="product-price">{price}</div>
        <div className="product-category">{category}</div>
        <div className="quantity-container"></div>
        <p className="quantity-p">Qty:</p>
        <div className="quantity-items">
          <button className="button-minus">-</button>
          <input type="text" value={1} onChange={updateQuantity}/>
          <button className="button-plus">+</button>
        </div>
        <button className="add-t0-cart" onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}