import styled from 'styled-components/native';
import colors from '@utils/colors';

interface IProps {
  size: number;
}

export const Profile = styled.View<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  background-color: ${colors.gray};
`;
