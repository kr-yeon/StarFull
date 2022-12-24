import React, {useState} from 'react';
import {TitleHeader, WhiteSafeAreaView} from '~/components';
import {useNavigation} from '@react-navigation/native';
import {Profile} from '~/components';
import {
  Flat,
  NickName,
  Res,
  Image,
  ImageButton,
} from '@screens/Stack/ProfileDetail/styles';
import screen_names from "@utils/screen_names";

export default function () {
  const navigation = useNavigation();

  const [info, setInfo] = useState({
    nickname: '유화장인',
    image: 'https://gradationharmonics.s3.us-east-2.amazonaws.com/프로필.png',
    response: '유화로 세상을 그리는 유화장인입니다.',
    posts: [
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/1.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/2.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/3.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/4.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/5.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/6.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/7.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/8.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/9.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/10.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/11.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/12.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/1.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/2.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/3.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/4.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/5.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/6.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/7.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/8.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/9.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/10.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/11.png',
      'https://gradationharmonics.s3.us-east-2.amazonaws.com/12.png',
    ],
  });

  return (
    <WhiteSafeAreaView>
      <TitleHeader title={info.nickname} onBack={navigation.goBack} />
      <Profile
        nickname={info.nickname}
        image={info.image}
        isMine={false}
        isFollow={false}
        onMessagePress={() => {
          // @ts-ignore
          navigation.navigate(screen_names.Chat);
        }}
      />
      <NickName>{info.nickname}</NickName>
      <Res>{info.response}</Res>
      <Flat
        data={info.posts}
        renderItem={({item}) => (
          <ImageButton>
            {/*@ts-ignore*/}
            <Image source={{uri: item}} resizeMode={'cover'} />
          </ImageButton>
        )}
        numColumns={3}
      />
    </WhiteSafeAreaView>
  );
}
