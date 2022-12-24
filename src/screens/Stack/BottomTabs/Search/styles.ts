import styled from 'styled-components/native';
import colors from '@utils/colors';
import fonts from "@utils/fonts";

export const SearchView = styled.View`
  width: 90%;
  height: 50px;
  background-color: ${colors.white_gray};
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  width: 88%;
  height: 50px;
  font-family: ${fonts.NotoSansKR};
  font-size: 15px;
  color: ${colors.black};
  padding: 5px 10px 5px 15px;
`;

export const RecentTitle = styled.Text`
  font-size: 16px;
  font-family: ${fonts.NotoSansKRBold};
  color: ${colors.black};
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 10px;
`;

export const RecentFlat = styled.FlatList`
  padding-left: 5%;
  margin-top: 10px;
`;

export const RecentButton = styled.TouchableOpacity`
  width: 45%;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.black_gray};
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RecentText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 16px;
  line-height: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  color: ${colors.black_gray};
  width: 90%;
`;
