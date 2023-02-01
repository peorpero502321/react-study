import { useEffect, useState } from 'react';

function CoinPrice() {
	const [loading, setLoading] = useState(true);
	const [usd, setUsd] = useState('');
	const [coins, setCoins] = useState([]);
	const [price, setPrice] = useState('');
	const [sellCoin, setSellCoin] = useState('');
	const onChange = (event) => {
		setUsd(event.target.value);
	};
	const onCoinChange = (event) => {
		setPrice(event.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		if (price === '' || isNaN(usd)) {
			return;
		}
		setSellCoin(usd / price);
	};
	useEffect(() => {
		fetch('https://api.coinpaprika.com/v1/tickers')
			.then((response) => response.json())
			.then((json) => {
				setCoins(json);
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<h1>The Coins! {loading ? '' : `(${coins.length})`} </h1>
			{loading ? (
				<strong>Loading...</strong>
			) : (
				<select onChange={onCoinChange}>
					<option value=''>선택</option>
					{coins.map((coin, index) => (
						<option key={index} value={coin.quotes.USD.price}>
							{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
						</option>
					))}
				</select>
			)}
			<form onSubmit={onSubmit}>
				<input onChange={onChange} value={usd} placeholder='My money!' />
				<button>sell coid</button>
				<h3>{sellCoin}</h3>
			</form>
		</div>
	);
}
export default CoinPrice;
