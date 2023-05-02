import "./CartWidget.css"

const CartWidget = () => {
    const imgCarrito ="https://www.xenonfactory.es/wp-content/uploads/2019/01/carrito-compras-desarrollo-tienda-virtual.png";
  return (
    <div>
        <img src={imgCarrito} alt="Carrito de compras"/>
        <p>5</p>
    </div>
  )
}

export default CartWidget