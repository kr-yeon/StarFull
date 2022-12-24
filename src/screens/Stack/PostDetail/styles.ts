import styled from 'styled-components/native';
import fonts from '@utils/fonts';
import colors from '@utils/colors';
import {Dimensions, StyleSheet} from 'react-native';

interface IRelationText {
  color: string;
}

const windowWidth = Dimensions.get('window').width;

export const ScrollLView = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 22px;
  color: ${colors.black};
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15px;
`;

export const NotificationButton = styled.TouchableOpacity`
  margin-left: auto;
  margin-right: 5%;
`;

export const InfoView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15px;
`;

export const ProfileImage = styled.Image`
  width: ${windowWidth * 0.13}px;
  height: ${windowWidth * 0.13}px;
  border-radius: ${(windowWidth * 0.13) / 2}px;
`;

export const NickInfo = styled.View`
  margin-left: 2%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const NickName = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 16px;
  line-height: 20px;
  color: ${colors.gray_black};
`;

export const DateTime = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 14px;
  line-height: 18px;
  color: ${colors.gray_black};
`;

export const PeopleText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 14px;
  line-height: 18px;
  color: ${colors.gray_black};
`;

export const Image = styled.Image`
  width: ${windowWidth}px;
  height: 240px;
`;

export const ImageView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageFlat = styled.FlatList`
  margin-top: 20px;
`;

export const IndicatorView = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  z-index: 2;
  bottom: 10px;
`;

export const NoSelectIndicator = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-left: 3px;
  margin-right: 3px;
  background-color: ${colors.white};
`;

export const SelectIndicator = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-left: 3px;
  margin-right: 3px;
  background-color: ${colors.pink};
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${colors.white_gray};
  margin-top: 15px;
`;

export const Response = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 15px;
  line-height: 20px;
  margin-top: 20px;
  color: ${colors.gray_black};
  margin-left: 5%;
  margin-right: 5%;
`;

export const RelationView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RelationElementView = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px auto;
`;

export const RelationText = styled.Text<IRelationText>`
  font-family: ${fonts.NotoSansKRBold};
  font-size: 14px;
  line-height: 18px;
  margin-left: 5px;
  color: ${props => props.color};
`;

export const WidthLine = styled.View`
  width: 1px;
  height: 90%;
  background-color: ${colors.white_gray};
`;

export const CommentView = styled.View`
  width: 100%;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.white_gray};
`;

export const CommentInfoView = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: 5%;
  margin-right: 5%;
  align-items: center;
  flex-wrap: wrap;
`;

export const CommentImage = styled.Image`
  width: ${windowWidth * 0.11}px;
  height: ${windowWidth * 0.11}px;
  border-radius: ${windowWidth * 0.06}px;
`;

export const CommentInfoText = styled.Text`
  font-family: ${fonts.NotoSansKR};
  font-size: 14px;
  color: ${colors.gray_black};
  line-height: 18px;
  margin-left: 2%;
`;

export const CommentText = styled.Text`
  font-family: ${fonts.NotoSansKRRegular};
  font-size: 16px;
  line-height: 20px;
  color: ${colors.black};
  padding-left: ${windowWidth * 0.11}px;
  margin-left: 7%;
  margin-right: 5%;
  margin-bottom: 10px;
`;

export const WriteCommentView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
  border-top-width: 1px;
  border-top-color: ${colors.white_gray};
`;

export const WriteCommentInput = styled.TextInput`
  width: 85%;
  height: 40px;
  font-size: 14px;
  font-family: ${fonts.NotoSansKR};
  color: ${colors.black};
  padding: 0;
  margin-left: 3%;
`;

export const WriteCommentButton = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-family: ${fonts.NotoSansKR};
  color: ${colors.black_gray};
`;

export default StyleSheet.create({
  follower: {
    marginLeft: 'auto',
  },
  none_top_margin: {
    marginTop: 0,
  },
});
