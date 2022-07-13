import React from 'react';
import '../styles/Basket.css';
function Basket(props) {
	const { cartItems, onAdd } = props;
	return (
		<aside >
			<h3>Cart Items</h3>
			<div>{cartItems.length === 0 && <div> Cart Is Empty</div>}</div>
			{cartItems.map((item) => {
				<div key={item.id} className='row'>
					<div>{item.name}</div>
					<div>
						<button onClick={() => onAdd(item)} className='add'>
							+
						</button>
						{/* <button onClick={() => onRemove(item)} className='remove'>
							-
						</button> */}
					</div>
          <div>{item.qty}* €{item.price.toFixed(2)}</div>
				</div>;
			})}
		</aside>
	);
}

export default Basket;
