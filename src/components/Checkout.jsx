
export default function Checkout() {
  return (
    <div className="checkout-container">
      <div>
        <p>Items</p>
        <div>Sum</div>
      </div>
      <div className="total-container">
        <h3>Total</h3>
        <div>Sum</div>
      </div>
      <div className="total-buttons">
        <button>Proceed to Checkout</button>
        <button>Continue Shopping</button>
      </div>
    </div>
  )
}