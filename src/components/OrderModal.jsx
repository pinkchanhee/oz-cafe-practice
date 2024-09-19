import { useState } from 'react';
import data from '../assets/data';

function OrderModal({ modalMenu, setModalOn, addToCart }) {
  const [options, setOptions] = useState({ 온도: 0, 진하기: 0, 사이즈: 0 });
  const [quantity, setQuantity] = useState(1);
  const itemOptions = data.options;

  return (
    <section className="modal-backdrop" onClick={() => setModalOn(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-item">
          <img src={modalMenu.img} alt={modalMenu.name} />
          <h3>{modalMenu.name}</h3>
          <ul className="options">
            {Object.keys(itemOptions).map((option) => (
              <li key={option}>
                {option}
                <select
                  onChange={(e) => setOptions({ ...options, [option]: e.target.value })}
                  value={options[option]}
                >
                  {itemOptions[option].map((opt, idx) => (
                    <option key={idx} value={idx}>
                      {opt}
                    </option>
                  ))}
                </select>
              </li>
            ))}
          </ul>
          <div>
            <label htmlFor="count">개수</label>
            <input
              id="count"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <button
            onClick={() => {
              addToCart({ ...modalMenu, quantity, options });
              setModalOn(false);
            }}
          >
            장바구니에 추가
          </button>
        </div>
      </div>
    </section>
  );
}

export default OrderModal;