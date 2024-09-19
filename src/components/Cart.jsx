import { useCart } from '../context/cartContext';
import data from '../assets/data';

function Cart() {
  const { cart, removeFromCart } = useCart();

  if (!cart.length) {
    return <div style={{ textAlign: 'center', margin: '80px' }}>장바구니에 담긴 상품이 없어요!</div>;
  }

  const allMenus = [...data.menu.커피, ...data.menu.논커피];

  return (
    <>
      <h2>장바구니</h2>
      <ul className="cart">
        {cart.map((el) => {
          const item = allMenus.find((menu) => menu.id === el.id);
          return (
            <li key={el.id}>
              <div className="cart-item-info">
                <img height={100} src={item.img} alt={item.name} />
                <div>{item.name}</div>
              </div>
              <div>{el.quantity}개</div>
              <button onClick={() => removeFromCart(el.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cart;