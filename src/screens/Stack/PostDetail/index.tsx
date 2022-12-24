import React, {useState} from 'react';
import {DefaultProfile, TitleHeader, WhiteSafeAreaView} from '~/components';
import {useNavigation} from '@react-navigation/native';
import styles, {
  ScrollLView,
  Title,
  NotificationButton,
  InfoView,
  ProfileImage,
  NickName,
  NickInfo,
  DateTime,
  PeopleText,
  Image,
  ImageFlat,
  IndicatorView,
  SelectIndicator,
  NoSelectIndicator,
  ImageView,
  Line,
  Response,
  RelationView,
  RelationElementView,
  RelationText,
  WidthLine,
  CommentView,
  CommentInfoView,
  CommentImage,
  CommentInfoText,
  CommentText,
  WriteCommentView,
  WriteCommentInput,
  WriteCommentButton,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@utils/colors';
import {Dimensions, TouchableOpacity} from 'react-native';
import screen_names from '@utils/screen_names';

interface IComment {
  profile_image: string;
  nickname: string;
  date: string;
  comment: string;
}

const windowWidth = Dimensions.get('window').width;

function Comment({profile_image, nickname, date, comment}: IComment) {
  return (
    <CommentView>
      <CommentInfoView>
        <TouchableOpacity>
          {profile_image ? (
            <CommentImage source={{uri: profile_image}} resizeMode={'cover'} />
          ) : (
            <DefaultProfile
              size={windowWidth * 0.11}
              iconSize={windowWidth * 0.07}
            />
          )}
        </TouchableOpacity>
        <CommentInfoText>{nickname + '     ' + date}</CommentInfoText>
      </CommentInfoView>
      <CommentText>{comment}</CommentText>
    </CommentView>
  );
}

export default function () {
  const navigation = useNavigation();

  const [info, setInfo] = useState({
    profile_image:
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/프로필.png',
    nickname: '유화장인',
    date: '2022.01.21        18:46',
    photos: [
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/unsplash_t2Sai-AqIpI.png',
    ],
    response:
      '캔버스에 유화로 그렸습니다.\n밤바다를 표현했어요.\n유화 좋아하시나요?',
    comments: [
      {
        profile_image: '',
        nickname: '명화왕',
        date: '2022.08.16   18:53',
        comment:
          '너무 예뻐요! 명화같아요! 작가님 팔로우해도 될까요?\n작가님은 뭐랄까, 마치 베를린 같아요.\n내 마음에 치명적인 독일 수도...',
      },
    ],
  });
  const [imageFlatIndex, setImageFlatIndex] = useState(0);

  return (
    <WhiteSafeAreaView>
      <TitleHeader
        title={'게시물'}
        onBack={navigation.goBack}
        right={
          <NotificationButton
            onPress={() => {
              // @ts-ignore
            }}>
            <MaterialCommunityIcons
              name={'dots-vertical'}
              size={25}
              color={colors.black}
            />
          </NotificationButton>
        }
      />
      <ScrollLView>
        <Title>밤바다</Title>
        <InfoView>
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate(screen_names.ProfileDetail);
            }}>
            {info.profile_image ? (
              <ProfileImage
                source={{uri: info.profile_image}}
                resizeMode={'cover'}
              />
            ) : (
              <DefaultProfile
                size={windowWidth * 0.13}
                iconSize={windowWidth * 0.08}
              />
            )}
          </TouchableOpacity>
          <NickInfo>
            <NickName>{info.nickname}</NickName>
            <DateTime>{info.date}</DateTime>
          </NickInfo>
          <MaterialCommunityIcons
            name={'account'}
            size={28}
            color={colors.gray_black}
            style={styles.follower}
          />
          <PeopleText>1,853</PeopleText>
        </InfoView>
        <ImageView>
          <ImageFlat
            horizontal={true}
            data={info.photos}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            decelerationRate={'fast'}
            renderItem={({item}) => (
              // @ts-ignore
              <Image source={{uri: item}} resizeMode={'cover'} />
            )}
            onScroll={e => {
              setImageFlatIndex(
                Math.round(e.nativeEvent.contentOffset.x / windowWidth),
              );
            }}
          />
          <IndicatorView>
            {info.photos.map((_, i) =>
              i === imageFlatIndex ? (
                <SelectIndicator />
              ) : (
                <NoSelectIndicator />
              ),
            )}
          </IndicatorView>
        </ImageView>
        <Line />
        <Response>{info.response}</Response>
        <Line />
        <RelationView>
          <RelationElementView>
            <MaterialCommunityIcons
              name={'heart'}
              color={colors.pink}
              size={30}
            />
            <RelationText color={colors.pink}>137</RelationText>
          </RelationElementView>
          <WidthLine />
          <RelationElementView>
            <MaterialCommunityIcons
              name={'comment'}
              color={colors.black_gray}
              size={30}
            />
            <RelationText color={colors.black_gray}>1</RelationText>
          </RelationElementView>
        </RelationView>
        <Line style={styles.none_top_margin} />
        {info.comments.map(s => (
          <Comment
            profile_image={s.profile_image}
            nickname={s.nickname}
            date={s.date}
            comment={s.comment}
          />
        ))}
      </ScrollLView>
      <WriteCommentView>
        <WriteCommentInput
          placeholder={'댓글을 남겨보세요!'}
          placeholderTextColor={colors.black_gray}
          multiline={true}
        />
        <TouchableOpacity>
          <WriteCommentButton>등록</WriteCommentButton>
        </TouchableOpacity>
      </WriteCommentView>
    </WhiteSafeAreaView>
  );
}
