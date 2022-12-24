import styled from 'styled-components/native';
import fonts from '@utils/fonts';
import colors from '@utils/colors';
import { StyleSheet } from 'react-native';

interface IMyStarProps {
  color: string;
}

export const InfoView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 20px;
`;

export const Image = styled.Image`
  width: 23%;
  padding-bottom: 23%;
  border-radius: 500px;
`;

export const NickName = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 24px;
  line-height: 28px;
  color: ${colors.black};
  margin-right: 5%;
  margin-left: 3%;
`;

export const Response = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 14px;
  color: ${colors.black_gray};
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15px;
  min-height: 130px;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${colors.white_gray};
`;

export const MyStarView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const MyStarText = styled.Text<IMyStarProps>`
  font-family: ${fonts.NotoSansKR};
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.color};
`;

export const BoostStarView = styled.View`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border-bottom-color: ${colors.black_gray};
  height: 50px;
  border-bottom-width: 2px;
`;

export const BoostStarInput = styled.TextInput`
  width: 90%;
  height: 50px;
  color: ${colors.black};
  font-size: 20px;
  line-height: 24px;
  font-family: ${fonts.NotoSansKR};
  padding: 0;
  margin: 0;
`;

export const AddStarView = styled.View`
  display: flex;
  flex-direction: row;
  border-width: 1px;
  border-color: ${colors.gray};
  border-radius: 5px;
  width: 90%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
`;

export const AddStarText = styled.Text`
  font-size: 18px;
  font-family: ${fonts.NotoSansKR};
  color: ${colors.black_gray};
  margin-left: auto;
  margin-right: auto;
`;

export const AddStarButton = styled.TouchableOpacity`
  width: 25%;
  border-right-width: 1px;
  border-right-color: ${colors.black_gray};
`;

export const BoostButton = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${colors.blue_purple};
  width: 90%;
  height: 50px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuyView = styled.TouchableOpacity`
  width: 15%;
  height: 25px;
  border-width: 1px;
  border-color: ${colors.black_gray};
  border-radius: 15px;
  margin-left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BuyText = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 14px;
  color: ${colors.black_gray};
  line-height: 18px;
`;

export const BoostText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 20px;
  color: ${colors.white};
  line-height: 24px;
`;

export default StyleSheet.create({
  last_star_button: {
    borderRightWidth: 0,
  },
});
