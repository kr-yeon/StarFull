import styled from 'styled-components/native';
import fonts from '@utils/fonts';
import colors from '@utils/colors';
import {StyleSheet} from 'react-native';

export const NoticeFlat = styled.FlatList`
  padding-left: 5%;
  padding-right: 5%;
`;

export const NoticeView = styled.TouchableOpacity`
  width: 100%;
  margin-top: 25px;
`;

export const NoticeImage = styled.Image`
  width: 100%;
  height: 120px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const NoticeTitleInfo = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-right: 2%;
  padding-left: 2%;
`;

export const NoticeTitle = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  color: ${colors.black};
  font-size: 16px;
  line-height: 20px;
  margin-top: 10px;
`;

export const NewText = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  color: ${colors.white};
  font-size: 10px;
  padding-left: 2px;
  padding-right: 2px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  margin-top: 10px;
  background-color: ${colors.red};
  border-radius: 5px;
  margin-left: 5px;
`;

export const DateText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  color: ${colors.gray_black};
  font-size: 14px;
  line-height: 18px;
  margin-top: 5px;
  padding-right: 2%;
  padding-left: 2%;
`;

export default StyleSheet.create({
  notice_image: {
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 8,
  },
});
