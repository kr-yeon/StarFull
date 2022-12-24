import styled from 'styled-components/native';
import fonts from '@utils/fonts';
import colors from '@utils/colors';
import { StyleSheet } from 'react-native';

export const View = styled.TouchableOpacity`
  width: 45%;
  height: 250px;
  border-radius: 15px;
  border-color: ${colors.gray};
  border-width: 1px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Title = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 14px;
  line-height: 17px;
  color: ${colors.black};
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15px;
`;

export const TagView = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
`;

export const TagText = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 11px;
  line-height: 14px;
  color: ${colors.gray_white};
`;

export const ResText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 13px;
  line-height: 16px;
  margin-top: 15px;
  color: ${colors.gray_black};
  margin-left: 5%;
  margin-right: 5%;
`;

export const HeartView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
`;

export const HeartText = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 11px;
  line-height: 13px;
  color: ${colors.white};
  margin-left: 2px;
`;

export default StyleSheet.create({
  isOddAndLast: {
    marginRight: 'auto',
    marginLeft: '3%',
  },
});
