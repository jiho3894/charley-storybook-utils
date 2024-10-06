import { Colors } from './styles';
import { TIconColor } from './types';

export const getColors = (color: TIconColor) => {
  switch (color) {
    case 'Black':
      return Colors.Opacity_Black;
    case 'Gray':
      return Colors.Gray500;
  }
};
