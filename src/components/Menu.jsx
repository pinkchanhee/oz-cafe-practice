import { useMenu } from '../context/menuContext';
import { useCart } from '../context/cartContext';
import Item from './Item';
import { useState } from 'react';
import OrderModal from './OrderModal';

function Menu() {
  const { menu } = useMenu();
  const { addToCart } = useCart();
  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);

  if (!menu) {
    return <div style={{ textAlign: 'center', margin: '80px' }}>메뉴 정보가 없어요!</div>;
  }

  const categorys = Object.keys(menu);

  return (
    <>
      {categorys.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu">
            {menu[category].map((item) => (
              <Item
                key={item.name}
                item={item}
                clickHandler={() => {
                  setModalMenu(item);
                  setModalOn(true);
                }}
              />
            ))}
          </ul>
        </section>
      ))}
      {modalOn && <OrderModal modalMenu={modalMenu} setModalOn={setModalOn} addToCart={addToCart} />}
    </>
  );
}

export default Menu;