import styled from 'styled-components/native';
import colors from '@utils/colors';

export const Button = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 40px;
  background-color: ${colors.pink};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 20px;
`;
