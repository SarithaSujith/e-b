import React from 'react';
import data from '../data';
import ProductItem from '../components/ProductItem';
import Basket from '../components/Basket';
import '../styles/Main.css';
import { useState } from 'react';

function Main() {
	// const {products} = props
	
	
	const [query, setQuery] = useState("")
	
	const [cartItems, setCartItems] = useState([]);
	const onAdd = (productItem) => {
		const exist = cartItems.find((x) => x.id === productItem.id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === productItem.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...productItem, qty: 1 }]);
		}
	};

	
	return (
		<div className='main'>
			<h1 className='mainTitle'>Our Products</h1>

			<div className='block'><Basket  onAdd={onAdd} cartItems={cartItems} /></div>
			<div className="uk-inline ">
        <input className='uk-input' type='text' placeholder='Enter product' onChange={event => setQuery(event.target.value)}/> 
				</div>
				<div className='mainList'>
					{data.filter(productItem => {
    if (query === '') {
      return productItem;
    } else if (productItem.name.toLowerCase().includes(query.toLowerCase())) {
      return productItem;
    }
  }).map((productItem, key) => {
						return (
							<ProductItem
								key={productItem.id}
								image={productItem.image}
								name={productItem.name}
								price={productItem.price}
								onAdd={onAdd}
							/>
						);
					})}
				</div>
				
		</div>
	);
}

export default Main;
