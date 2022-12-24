import React, {useState} from 'react';
import {DefaultProfile, TitleHeader, WhiteSafeAreaView} from '~/components';
import {useNavigation} from '@react-navigation/native';
import styles, {
  AddStarButton,
  AddStarText,
  AddStarView,
  BoostButton,
  BoostStarInput,
  BoostStarView,
  BoostText,
  BuyText,
  BuyView,
  Image,
  InfoView,
  Line,
  MyStarText,
  MyStarView,
  NickName,
  Response,
} from '@screens/Stack/Boost/styles';
import {Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import colors from '@utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Alert from '@components/Alert';
import SelectAlert from '@components/SelectAlert';

const windowWidth = Dimensions.get('window').width;
const plusNumbers = [10, 50, 100, 500];

export default function () {
  const navigation = useNavigation();

  const [info, setInfo] = useState({
    nickname: '유화장인',
    image: 'https://gradationharmonics.s3.us-east-2.amazonaws.com/프로필.png',
    response: '유화로 세상을 그리는 유화장인입니다.',
  });
  const [text, setText] = useState('');
  const [yesBoost, setYesBoost] = useState(false);
  const [selectBoost, setSelectBoost] = useState(false);

  return (
    <WhiteSafeAreaView>
      <Alert
        text={'유화장인 작가님을\n성공적으로 후원하였습니다!'}
        button={'확인'}
        visible={yesBoost}
        onButtonPress={() => {
          setYesBoost(false);
          navigation.goBack();
        }}
      />
      <SelectAlert
        text={'유화장인 작가님을\n후원하시겠습니까?'}
        button={'후원하기!'}
        button2={'후원하지 않기'}
        visible={selectBoost}
        onButtonPress={() => {
          setSelectBoost(false);
          setYesBoost(true);
        }}
        onButton2Press={() => {
          setSelectBoost(false);
        }}
      />
      <TitleHeader title={'후원하기'} onBack={navigation.goBack} />
      <ScrollView>
        <InfoView>
          {info.image ? (
            <Image source={{uri: info.image}} resizeMode={'cover'} />
          ) : (
            <DefaultProfile
              size={windowWidth * 0.23}
              iconSize={windowWidth * 0.15}
            />
          )}
          <NickName>{info.nickname}</NickName>
        </InfoView>
        <Response>{info.response}</Response>
        <Line />
        <MyStarView>
          <MyStarText color={colors.black_gray}>보유 별 : </MyStarText>
          <MyStarText color={colors.red}>1,310개</MyStarText>
          <BuyView>
            <BuyText>구매</BuyText>
          </BuyView>
        </MyStarView>
        <BoostStarView>
          <BoostStarInput
            keyboardType={'numeric'}
            placeholderTextColor={colors.black_gray}
            placeholder={'후원할 별 개수를 입력해 주세요.'}
            value={text}
            onChangeText={s => {
              let res = Number(s.replace(/^\D/g, ''));

              if (res > 1310) {
                res = 1310;
              }
              setText(res.toString());
            }}
          />
          <TouchableOpacity
            onPress={() => {
              setText('');
            }}>
            <MaterialCommunityIcons
              name={'close-circle'}
              size={24}
              color={colors.black_gray}
            />
          </TouchableOpacity>
        </BoostStarView>
        <AddStarView>
          {plusNumbers.map((s, i) => (
            <AddStarButton
              onPress={() => {
                let number = (text ? Number(text) : 0) + s;

                if (number > 1310) {
                  number = 1310;
                }
                setText(number.toString());
              }}
              style={
                plusNumbers.length - 1 === i ? styles.last_star_button : {}
              }>
              <AddStarText>+ {s}개</AddStarText>
            </AddStarButton>
          ))}
        </AddStarView>
      </ScrollView>
      <BoostButton
        onPress={() => {
          setSelectBoost(true);
        }}>
        <BoostText>후원하기</BoostText>
      </BoostButton>
    </WhiteSafeAreaView>
  );
}
