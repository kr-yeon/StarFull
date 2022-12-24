import styled from 'styled-components/native';
import colors from '@utils/colors';
import fonts from '@utils/fonts';

export const NotificationFlat = styled.FlatList`
  padding-right: 5%;
  padding-left: 5%;
`;

export const NotiView = styled.TouchableOpacity`
  width: 100%;
`;

export const NotiHead = styled.View`
  display: flex;
  flex-direction: row;
`;

export const NotiTitle = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 14px;
  color: ${colors.black};
  line-height: 18px;
  margin-top: 15px;
  width: 84%;
`;

export const NotiDate = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 14px;
  color: ${colors.gray_black};
  line-height: 18px;
  margin-top: 15px;
`;

export const NotiRes = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 12px;
  color: ${colors.gray_black};
  line-height: 16px;
  margin-top: 5px;
`;

export const NotiLine = styled.View`
  width: 100%;
  border-bottom-color: ${colors.white_gray};
  border-bottom-width: 1px;
  margin-top: 10px;
`;
