import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Post} from '@components/index';
import styles, { Footer } from './styles';
import screen_names from '@utils/screen_names';
import {useNavigation} from '@react-navigation/native';

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
        'https://gradationharmonics.s3.us-east-2.amazonaws.com/unsplash_t2Sai-AqIpI.png',
      heart: 198,
      title: '밤바다',
      tag: ['유화', '바다'],
      res: '캔버스에 유화로 그렸습니다.\n밤바다를 표현했어요.\n유화 좋아하시나요?',
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
