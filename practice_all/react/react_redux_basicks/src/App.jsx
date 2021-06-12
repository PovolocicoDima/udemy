import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetchCustomers } from './asyncAction/customers';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';


function App() {
	const dispatch = useDispatch();
	const cash = useSelector(state => state.cash.cash);
	const customers = useSelector(state => state.customers.customers);

	const addCash = (cash) => {
		dispatch({type: 'ADD_CASH', payload: cash})
	};

	const getCash = (cash) => {
		dispatch({type: 'GET_CASH', payload: cash})
	};

	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now(),
		}
		dispatch(addCustomerAction(customer))
	}

	const removeCustomer = (customer) => {
		dispatch(removeCustomerAction(customer.id))
	}


  return (
		<div className={'app'}>
			<div style={{fontSize: '3rem', color: 'darkviolet'}}>Баланс: {cash}</div>
			<div>
				<button onClick={() => addCash(Number(prompt('Введите число')))}>Пополнить счёт</button>
				<button onClick={() => getCash(Number(prompt('Введите число')))}>Снять со счёта</button>
				<button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
				<button onClick={() => dispatch(fetchCustomers())}>Добавить клиентов из базы</button>
			</div>
			{customers.length > 0 ?
				<div>
					{customers.map(customer => 
						<div
							key={customer.id}
							onClick={() => removeCustomer(customer)} 
							style={{fontSize: '2rem', border: '1px solid black', padding: '5px', marginTop: 5}}
						>
								{customer.name}
						</div>	
					)}
				</div>
				:
				<div style={{fontSize: '2rem', marginTop: 20}}>
					Клиенты отсутствуют
				</div>
			}
		</div>
  );
};

export default App;
