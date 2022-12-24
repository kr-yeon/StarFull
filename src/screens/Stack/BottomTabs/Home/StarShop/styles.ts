import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import fonts from '@utils/fonts';
import colors from '@utils/colors';
import { Platform, StyleSheet } from "react-native";

export const TopView = styled(LinearGradient)`
  width: 100%;
  height: 180px;
  margin-bottom: 40px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const InfoView = styled.View`
  position: absolute;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 26px;
  line-height: 29px;
  color: ${colors.white};
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 20px;
  width: 67%;
`;

export const MyStarView = styled.View`
  width: 90%;
  height: 130px;
  margin-left: 5%;
  margin-right: 5%;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: 20px;
  background-color: ${colors.blue_purple};
  border-radius: 20px;
  z-index: 2;
`;

export const StarImage = styled.Image`
  position: absolute;
  top: 15px;
  width: 25%;
  right: 5%;
  z-index: 1;
`;

export const MyStarTextView = styled.View`
  width: 45%;
  height: 30px;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${colors.white};
  margin-top: 15px;
`;

export const MyStarText = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 14px;
  line-height: ${Platform.OS === 'ios' ? 28 : 33}px;
  text-align: center;
  color: ${colors.white};
`;

export const MyStarNumberView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const MyStarNumberText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 34px;
  line-height: 42px;
  color: ${colors.white};
  margin-left: 3%;
`;

export const ExchangeRequestButton = styled.TouchableOpacity`
  position: absolute;
  width: 25%;
  height: 35px;
  border-radius: 5px;
  background-color: ${colors.indigo};
  top: 85px;
  right: 12px;
`;

export const ExchangeRequestText = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 12px;
  line-height: 35px;
  text-align: center;
  color: ${colors.white};
`;

export const PriceView = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  border-radius: 10px;
  background-color: ${colors.blue};
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
`;

export const PriceText = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 25px;
  line-height: 41px;
  margin-left: 5%;
  color: ${colors.white};
`;

export const ResponseText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 14px;
  line-height: 18px;
  color: ${colors.gray_black};
  margin: 20px 5% 10px;
`;

export default StyleSheet.create({
  my_star_view: {
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 8,
  },
  exchange_view: {
    shadowColor: colors.white,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
  },
  price_text: {
    marginLeft: 'auto',
    marginRight: '4%',
  },
});
