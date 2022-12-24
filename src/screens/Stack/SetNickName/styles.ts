import styled from 'styled-components/native';
import fonts from '@utils/fonts';
import colors from '@utils/colors';

interface IRightText {
  color: string;
}

export const RightButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 5%;
`;

export const RightText = styled.Text<IRightText>`
  font-family: ${fonts.NotoSansKR};
  font-size: 18px;
  color: ${props => props.color};
`;

export const TextInput = styled.TextInput`
  padding-left: 20px;
  padding-right: 20px;
  font-family: ${fonts.NotoSansKR};
  width: 90%;
  height: 60px;
  background-color: ${colors.white_gray};
  color: ${colors.black};
  font-size: 14px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  margin-top: 40px;
`;

export const GuideText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 12px;
  color: ${colors.gray_black};
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
`;
