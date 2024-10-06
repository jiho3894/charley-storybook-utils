import styled from '@emotion/styled';
import { Colors } from '../../token/styles';
import { TDividerProps } from '../../token/types';

interface IDividerProps {
  type: TDividerProps;
}

const Divider = ({ type = 'Thin' }: IDividerProps) => {
  return <DividerWrapper type={type} />;
};

const DividerWrapper = styled.div<IDividerProps>`
  width: 100%;
  height: ${({ type }) => (type === 'Thin' ? '1px' : type === 'Thinner' ? '0.5px' : '8px')};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: ${({ type }) => (type === 'Thin' ? Colors.Gray500 : Colors.Opacity_Black)};
`;

export default Divider;
