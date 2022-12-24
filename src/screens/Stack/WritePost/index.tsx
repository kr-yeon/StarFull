import React, {useState} from 'react';
import {KeyboardView, TitleHeader, WhiteSafeAreaView} from '~/components';
import {useNavigation} from '@react-navigation/native';
import {
  AddPhotoButton,
  BigInput,
  Line,
  Photo,
  PhotoButton,
  PhotoNumberText,
  Photos,
  SmallInput,
  WriteButton,
  WriteText,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@utils/colors';
import {FlatList, ScrollView} from 'react-native';

export default function () {
  const navigation = useNavigation();
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState('');
  const [tag, setTag] = useState('');

  return (
    <WhiteSafeAreaView>
      <KeyboardView>
        <TitleHeader
          title={'게시글 작성'}
          onBack={navigation.goBack}
          right={
            <WriteButton>
              <WriteText>작성</WriteText>
            </WriteButton>
          }
        />
        <ScrollView>
          <Photos>
            <AddPhotoButton>
              <MaterialCommunityIcons
                name={'camera-plus'}
                size={32}
                color={colors.gray}
              />
              <PhotoNumberText>{photos.length} / 5</PhotoNumberText>
            </AddPhotoButton>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={photos}
              renderItem={({item}) => (
                <PhotoButton>
                  {/*@ts-ignore*/}
                  <Photo resizeMode={'cover'} source={{uri: item}} />
                </PhotoButton>
              )}
            />
          </Photos>
          <Line />
          <BigInput
            placeholder={'제목을 입력해주세요.'}
            placeholderTextColor={colors.black_gray}
            value={title}
            onChangeText={setTitle}
            maxLength={20}
          />
          <Line />
          <BigInput
            placeholder={'태그를 입력해주세요. (ex, #하늘 #바다 #강아지)'}
            placeholderTextColor={colors.black_gray}
            value={tag}
            onChangeText={text => {
              if (tag.length === 0) {
                setTag('#' + text);
              } else if (
                text.slice(text.length - 1) === ' ' &&
                text.length > tag.length
              ) {
                setTag(tag + ' #');
              } else if (text.length === 0) {
                setTag('#');
              } else {
                setTag(text);
              }
            }}
          />
          <Line />
          <SmallInput
            placeholder={'내용을 입력해주세요.'}
            multiline={true}
            placeholderTextColor={colors.black_gray}
            textAlignVertical={'top'}
          />
        </ScrollView>
      </KeyboardView>
    </WhiteSafeAreaView>
  );
}
