import {StyleSheet} from 'react-native';
import fonts from '@utils/fonts';
import colors from '@utils/colors';
import styled from 'styled-components/native';

export const NotificationButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 5%;
`;

export default StyleSheet.create({
  tab_bar: {
    height: 55,
    backgroundColor: colors.white,
    shadowColor: colors.white,
    elevation: 0,
  },
  indicator: {
    backgroundColor: colors.blue_purple,
    height: 5,
  },
  indicator_container: {
    backgroundColor: colors.white,
  },
  content_container: {
    backgroundColor: colors.white,
  },
  tab_bar_title: {
    fontFamily: fonts.NotoSansKRBold,
    fontSize: 14,
    lineHeight: 17,
  },
  tab: {
    backgroundColor: colors.white,
    height: 50,
  },
});
