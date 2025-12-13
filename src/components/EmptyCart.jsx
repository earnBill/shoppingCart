import { useNavigate } from "react-router";

export default function EmptyCart() {
  const navigate =useNavigate();
  return (
    <div className="empty-card-container">
      <h2>Your cart is empty</h2>
      <p>Add some products to get started</p>
      <button className="empty-card-button" onClick={()=>navigate("/shop")}>Browse Products</button>
    </div>
  )
}