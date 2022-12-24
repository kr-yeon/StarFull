import React from 'react';
import styles, {
  HeartText,
  HeartView,
  Image,
  ResText,
  TagText,
  TagView,
  Title,
  View,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@utils/colors';

interface IWrite {
  image: string;
  heart: number;
  title: string;
  tag: Array<string>;
  res: string;
}

interface IProps {
  item: IWrite;
  index: number;
  length: number;
  onPress?: () => any;
}

export default function ({item, index, length, onPress}: IProps) {
  return (
    <View
      style={index === length - 1 && index % 2 === 0 ? styles.isOddAndLast : {}}
      key={item.title + item.res}
      onPress={onPress ? onPress : () => {}}>
      <HeartView>
        <MaterialCommunityIcons name={'heart'} color={colors.white} size={17} />
        <HeartText>{item.heart}</HeartText>
      </HeartView>
      <Image source={{uri: item.image}} resizeMode={'cover'} />
      <Title numberOfLines={1} lineBreakMode={'tail'}>
        {item.title}
      </Title>
      <TagView>
        {item.tag.map(s => (
          <TagText numberOfLines={1} lineBreakMode={'tail'}>
            #{s}{' '}
          </TagText>
        ))}
      </TagView>
      <ResText numberOfLines={4} lineBreakMode={'tail'}>
        {item.res}
      </ResText>
    </View>
  );
}
