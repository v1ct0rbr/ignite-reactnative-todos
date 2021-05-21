import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { HeaderThemeProps } from '../@types/ThemeProps';
import { Picker } from '@react-native-picker/picker';

interface HeaderProps {
	theme: HeaderThemeProps;
	currentThemeId: number;
	setCurrentThemeId: (id: number) => void;
}

interface ThemeData {
	id: number;
	name: string;
}

export function Header({ theme, currentThemeId, setCurrentThemeId }: HeaderProps) {
	const themes = [
		{ id: 1, name: 'Default' },
		{ id: 2, name: 'Dark1' },
		{ id: 3, name: 'Dark2' },
	] as ThemeData[];

	const themeStyles = StyleSheet.create({
		header: {
			backgroundColor: theme.backgroundColor,
		},
		headerText: {
			color: theme.textColor,
		},
	});

	return (
		<View style={[styles.header, themeStyles.header]}>
			<View
				style={{
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
					alignSelf: 'baseline',
					position: 'absolute',
					top: StatusBar.currentHeight,
					right: 2,
				}}
			>
				<Picker
					itemStyle={{ backgroundColor: '#ffffff' }}
					mode="dropdown"
					selectedValue={currentThemeId}
					style={[{ height: 50, width: 150 }, themeStyles.headerText]}
					onValueChange={(itemValue, itemIndex) => setCurrentThemeId(Number(itemValue))}
				>
					{themes.map((theme) => (
						<Picker.Item key={theme.id} label={theme.name} value={theme.id} />
					))}
				</Picker>
			</View>

			<Text style={[styles.headerText, themeStyles.headerText]}>to.</Text>
			<Text style={[styles.headerText, themeStyles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		paddingTop: StatusBar.currentHeight,
		paddingBottom: 44,

		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	headerText: {
		fontSize: 24,

		fontFamily: 'Poppins-Regular',
	},
});
