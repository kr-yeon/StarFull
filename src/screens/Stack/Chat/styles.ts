import styled from 'styled-components/native';
import colors from '@utils/colors';
import fonts from '@utils/fonts';

export const BoostButton = styled.TouchableOpacity`
  width: 20%;
  height: 33px;
  margin-left: auto;
  background-color: ${colors.blue_purple};
  border-radius: 5px;
  margin-right: 5%;
`;

export const BoostText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 16px;
  height: 33px;
  color: ${colors.white};
  text-align: center;
  line-height: 33px;
  margin-top: 3px;
`;

export const ChatView = styled.View`
  width: 100%;
  height: 60px;
  border-top-color: ${colors.black_gray};
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 3%;
  padding-left: 3%;
`;

export const ChatScroll = styled.ScrollView`
  flex: 1;
`;

export const ChatInput = styled.TextInput`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 14px;
  line-height: 18px;
  padding: 0;
  color: ${colors.black};
  width: 75%;
  margin-left: 3%;
  margin-right: 3%;
`;

export const ChattingVertical = styled.View`
  display: flex;
  flex-direction: row;
`;

export const TimeText = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 12px;
  color: ${colors.black_gray};
  line-height: 16px;
  margin-top: auto;
  margin-left: auto;
  margin-right: 5px;
`;

export const ChattingView = styled.View`
  margin-right: 15px;
  background-color: ${colors.white_gray};
  border-radius: 16px;
  margin-top: 10px;
`;

export const Chatting = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 16px;
  line-height: 20px;
  color: ${colors.black};
  padding: 7px 13px;
`;

export const ChattingDate = styled.View`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  border-radius: 16px;
  background-color: ${colors.white_gray};
`;

export const ChattingDateText = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 14px;
  line-height: 18px;
  color: ${colors.black_gray};
  padding: 5px 13px;
`;
