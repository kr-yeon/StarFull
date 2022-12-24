import styled from 'styled-components/native';
import fonts from '@utils/fonts';
import colors from '@utils/colors';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const NickName = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 16px;
  line-height: 20px;
  color: ${colors.black};
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15px;
`;

export const Res = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 14px;
  line-height: 18px;
  color: ${colors.gray_black};
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15px;
`;

export const ImageButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5px;
`;

export const Image = styled.Image`
  width: ${windowWidth * 0.32}px;
  height: ${windowWidth * 0.32}px;
`;

export const Flat = styled.FlatList`
  margin-top: 15px;
`;
