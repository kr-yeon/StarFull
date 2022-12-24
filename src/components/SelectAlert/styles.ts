import styled from 'styled-components/native';
import colors from '@utils/colors';
import fonts from '@utils/fonts';

export const Modal = styled.Modal`
  flex: 1;
`;

export const Root = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Alert = styled.View`
  width: 80%;
  border-radius: 15px;
  background-color: ${colors.white};
`;

export const Text = styled.Text`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 20px;
  line-height: 26px;
  color: ${colors.black};
  margin: 20px 5% 20px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 7px;
  height: 50px;
  border-radius: 30px;
  background-color: ${colors.blue_purple};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button2 = styled.TouchableOpacity`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 15px;
  height: 50px;
  border-radius: 30px;
  background-color: ${colors.red};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  font-family: ${fonts.NotoSansKRRegular};
  line-height: 22px;
  color: ${colors.white};
`;
