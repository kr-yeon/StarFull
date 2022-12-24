import styled from 'styled-components/native';
import colors from '@utils/colors';
import fonts from '@utils/fonts';

export const HeaderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${colors.light_gray};
`;

export const HeaderTitle = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 18px;
  color: ${colors.black};
  margin-left: 5%;
`;

export const BackButton = styled.TouchableOpacity`
  margin-left: 2%;
`;
