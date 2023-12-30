import { DefaultTheme } from '@react-navigation/native';
import { Colors } from './style/Colors';

export const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.gsFF,
  },
};
