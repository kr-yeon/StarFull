import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Post} from '@components/index';
import styles, {Footer} from './styles';
import {useNavigation} from '@react-navigation/native';
import screen_names from '@utils/screen_names';

interface IWrite {
  image: string;
  heart: number;
  title: string;
  tag: Array<string>;
  res: string;
}

export default function () {
  const navigation = useNavigation();

  const [writes, setWrites] = useState<Array<IWrite>>([
    {
      image:
        'https://gradationharmonics.s3.us-east-2.amazonaws.com/%EC%83%88.png',
      heart: 103,
      title: '파랑새 두 마리',
      tag: ['파랑새', '행운'],
      res: '꿈에서 봤던 파랑새 두 마리를 그려봤어요.\n여러분들도 제 그림을 보고 행운 가져가시길 바라요. ',
    },
    {
      image:
        'https://gradationharmonics.s3.us-east-2.amazonaws.com/unsplash_oMpAz-DN-9I.png',
      heart: 201,
      title: '은하수',
      tag: ['점묘화', '노가다'],
      res: '사진이 아닙니다.\n다 하나씩 찍어서 했어요.\n좋아요 부탁드려요ㅠ ',
    },
    {
      image:
        'https://gradationharmonics.s3.us-east-2.amazonaws.com/%EB%8C%80%EC%A7%80+1+1.png',
      heart: 273,
      title: '팬더',
      tag: ['팬더', '초보'],
      res: '귀여운 팬더!\n일러스트레이터 초보에요ㅠㅠㅠ\n가르쳐주실분 구해요퓨ㅠㅠ',
    },
    {
      image:
        'https://gradationharmonics.s3.us-east-2.amazonaws.com/unsplash_t2Sai-AqIpI.png',
      heart: 198,
      title: '밤바다',
      tag: ['유화', '바다'],
      res: '캔버스에 유화로 그렸습니다.\n밤바다를 표현했어요.\n유화 좋아하시나요?',
    },
    {
      image:
        'https://gradationharmonics.s3.us-east-2.amazonaws.com/image%202.png',
      heart: 113,
      title: '비숑비숑',
      tag: ['강아지', '캐릭터'],
      res: '귀여운 강아지에요.\n일러스트레이터로 작업했습니다.\n귀엽죠???',
    },
    {
      image:
        'https://gradationharmonics.s3.us-east-2.amazonaws.com/unsplash_wlxJ4idMTUk.png',
      heart: 93,
      title: '페이스 북',
      tag: ['페이스', '북'],
      res: '책 한 장 한 장,\n그 위에 얼굴.',
    },
  ]);

  return (
    <FlatList
      columnWrapperStyle={styles.flat_column}
      numColumns={2}
      data={writes}
      ListFooterComponent={<Footer />}
      renderItem={({item, index}) => (
        <Post
          item={item}
          index={index}
          length={writes.length}
          onPress={() => {
            // @ts-ignore
            navigation.navigate(screen_names.PostDetail);
          }}
        />
      )}
    />
  );
}
