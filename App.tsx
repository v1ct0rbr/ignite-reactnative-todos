import React from 'react';
import { StatusBar } from 'react-native';
// import FlashMessage from 'react-native-flash-message';
import { Home } from './src/pages/Home';

export default function App() {
	return (
		<>
			<StatusBar backgroundColor="transparent" translucent barStyle="light-content" />

			<Home />
			{/* <FlashMessage position="bottom" /> */}
		</>
	);
}
