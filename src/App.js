import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';

const App = () => {
	useEffect(
		// eslint-disable-next-line react-hooks/exhaustive-deps
		async () => {
			const response = await fetch(
				'https://api.covidtracking.com/v1/us/current.json'
			);

			console.log('response', response);

			const data = await response.json();

			console.log('data', data);

			return () => {
				console.log('useEffect done');
			};
		},
		[]
	);

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>COVID Dashboard</h1>
			</header>
		</div>
	);
};

export default App;
