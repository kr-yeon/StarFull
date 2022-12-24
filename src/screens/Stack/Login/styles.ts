import styled from 'styled-components/native';
import {ImageBackgroundProps} from 'react-native';
import fonts from '@utils/fonts';
import {getBottomSpace} from 'react-native-iphone-x-helper';

interface ILoginButton {
  backgroundColor: string;
}

interface ILoginText {
  color: string;
}

export const BackGround = styled.ImageBackground<ImageBackgroundProps>`
  flex: 1;
`;

export const FlexSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const IdentityText = styled.Text`
  letter-spacing: 4px;
  color: white;
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 14px;
`;

export const TitleText = styled.Text`
  color: white;
  font-family: ${fonts.NotoSansKRBlack};
  font-size: 65px;
  margin-top: 5px;
  margin-bottom: 55px;
`;

export const LoginButton = styled.TouchableOpacity<ILoginButton>`
  width: 90%;
  height: 65px;
  background-color: ${props => props.backgroundColor};
  border-radius: 10px;
  margin-bottom: 25px;
`;

export const LoginText = styled.Text<ILoginText>`
  font-family: ${fonts.NotoSansKR};
  font-size: 18px;
  color: ${props => props.color};
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
`;

export const CopyRight = styled.Text`
  position: absolute;
  bottom: ${25 + getBottomSpace()}px;
  color: white;
  font-family: ${fonts.NotoSerif};
  font-size: 14px;
  letter-spacing: 1.5px;
  text-align: center;
`;
