import CloseLine from '../../assets/svg/CloseLine';
import { getColors } from '../../token/hooks';
import { TIconColor, TIconSize, TIconType } from '../../token/types';

export interface IconProps {
  size?: TIconSize;
  color?: string;
}

export interface IconAllProps extends IconProps {
  icon: TIconType;
  size?: TIconSize;
  color?: TIconColor;
}

const Icon = ({ icon = 'Close_Line', size = '24px', color = 'Black' }: IconAllProps) => {
  const settingColor = getColors(color);
  switch (icon) {
    case 'Close_Line':
      return <CloseLine size={size} color={settingColor} />;
    default:
      return <CloseLine size={size} color={settingColor} />;
  }
};

export default Icon;
