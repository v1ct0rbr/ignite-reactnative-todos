
import { ThemeProps } from '../@types/ThemeProps';
import { ThemeDefault } from '../styles/ThemeDefault';
import { ThemeDark } from '../styles/ThemeDark';
import { ThemeHome2 } from '../styles/ThemeDark2';

export function getTheme(num: number): ThemeProps {
	switch (num) {
		case 1:
			return ThemeDefault;
		case 2:
			return ThemeDark;
		case 3:
			return ThemeHome2;
		default:
			return ThemeDefault;
	}
}
