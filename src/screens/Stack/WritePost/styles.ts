import styled from 'styled-components/native';
import fonts from '@utils/fonts';
import colors from '@utils/colors';
import {Dimensions, Platform} from 'react-native';

const ScreenWidth = Dimensions.get('window').width;
const ScreenHeight = Dimensions.get('window').height;

export const WriteButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 4%;
`;

export const WriteText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  color: ${colors.gray};
  font-size: 20px;
`;

export const Photos = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  margin-bottom: 20px;
`;

export const AddPhotoButton = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${ScreenWidth * 0.23}px;
  height: ${ScreenWidth * 0.23}px;
  border-radius: 6px;
  background-color: ${colors.white_gray};
  margin-right: ${ScreenWidth * 0.025}px;
  margin-left: 5%;
`;

export const PhotoNumberText = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  color: ${colors.black};
  font-size: 13px;
  line-height: 20px;
`;

export const PhotoButton = styled.TouchableOpacity`
  margin-right: ${ScreenWidth * 0.025}px;
`;

export const Photo = styled.Image`
  width: ${ScreenWidth * 0.23}px;
  height: ${ScreenWidth * 0.23}px;
  border-radius: 6px;
`;

export const Line = styled.View`
  width: 90%;
  height: 1px;
  background-color: ${colors.white_gray};
  margin-left: auto;
  margin-right: auto;
`;

export const BigInput = styled.TextInput`
  ${Platform.OS === 'android' ? 'padding: 0' : ''};
  font-family: ${fonts.NotoSansKRRegular};
  color: ${colors.black};
  font-size: 17px;
  ${Platform.OS === 'android' ? 'height: 35px' : ''};
  ${Platform.OS === 'android' ? 'margin-top: 15px' : 'margin: 15px 5%'};
  margin-left: 5%;
  margin-right: 5%;
`;

export const SmallInput = styled.TextInput`
  padding: 0;
  font-family: ${fonts.NotoSansKRRegular};
  color: ${colors.black};
  flex: 1;
  font-size: 15px;
  line-height: 20px;
  margin: 15px 5%;
  height: ${ScreenHeight - ScreenWidth * 0.23 - 350}px;
`;
