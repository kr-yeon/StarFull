import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import fonts from '@utils/fonts';
import colors from '@utils/colors';

const windowWidth = Dimensions.get('window').width;

export const Root = styled.View`
  display: flex;
  flex-direction: row;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 15px;
`;

export const ProfileImage = styled.Image`
  width: ${windowWidth * 0.2}px;
  height: ${windowWidth * 0.2}px;
  border-radius: ${windowWidth * 0.1}px;
`;

export const Number = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 20px;
  line-height: 24px;
  color: ${colors.black};
  text-align: center;
  margin-top: 5px;
`;

export const InfoText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 14px;
  line-height: 18px;
  color: ${colors.gray_black};
  margin-top: 5px;
  text-align: center;
`;

export const VerticalView = styled.View`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

export const InfoView = styled.View`
  margin-left: auto;
  margin-right: auto;
`;

export const InfoContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PinkButton = styled.TouchableOpacity`
  width: 27%;
  height: 30px;
  border-radius: 5px;
  background-color: ${colors.pink};
  margin-top: 5px;
`;

export const OutLIneButton = styled.TouchableOpacity`
  width: 27%;
  height: 30px;
  border-radius: 5px;
  border-width: 1px;
  border-color: ${colors.black_gray};
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  padding-top: 3px;
`;

export const ButtonText = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  color: ${colors.black_gray};
`;
