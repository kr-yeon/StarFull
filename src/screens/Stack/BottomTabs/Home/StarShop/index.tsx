import React, { useState } from "react";
import {WhiteSafeAreaView} from '~/components';
import styles, {
  MyStarView,
  Title,
  TopView,
  ScrollView,
  StarImage,
  MyStarTextView,
  MyStarText,
  MyStarNumberView,
  MyStarNumberText,
  ExchangeRequestButton,
  PriceView,
  ExchangeRequestText,
  PriceText,
  ResponseText,
  InfoView,
} from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '@utils/colors';

interface IPrice {
  number: number;
  price: number;
}

interface IFlatPrices {
  item: IPrice;
  index: number;
}

const prices: Array<IPrice> = [
  {
    number: 10,
    price: 1500,
  },
  {
    number: 30,
    price: 4200,
  },
  {
    number: 50,
    price: 7000,
  },
  {
    number: 100,
    price: 13800,
  },
  {
    number: 500,
    price: 72800,
  },
  {
    number: 1000,
    price: 132800,
  },
];

function Price({item}: IFlatPrices) {
  return (
    <PriceView key={item.price.toString()}>
      <Octicons name={'star-fill'} size={36} color={colors.white} />
      <PriceText>
        {item.number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}개
      </PriceText>
      <PriceText style={styles.price_text}>
        {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </PriceText>
    </PriceView>
  );
}

export default function () {
  const [nickName, setNickName] = useState('하모닉스');
  const [star, setStar] = useState(1310);

  return (
    <WhiteSafeAreaView>
      <ScrollView>
        <TopView
          start={{x: 0.0, y: 0.557}}
          end={{x: 0.557, y: 1.0}}
          colors={['#4326B8', '#D15A9B']}
          useAngle={true}
          angle={261.52}
        />
        <StarImage
          source={require('@assets/imgs/shop_star.png')}
          resizeMode={'contain'}
        />
        <InfoView>
          <Title>{nickName}님, 안녕하세요.</Title>
          <MyStarView style={styles.my_star_view}>
            <MyStarTextView>
              <MyStarText>나의 별</MyStarText>
            </MyStarTextView>
            <MyStarNumberView>
              <Octicons name={'star-fill'} size={36} color={colors.white} />
              <MyStarNumberText>
                {star.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </MyStarNumberText>
            </MyStarNumberView>
            <ExchangeRequestButton style={styles.exchange_view}>
              <ExchangeRequestText>환전 신청</ExchangeRequestText>
            </ExchangeRequestButton>
          </MyStarView>
        </InfoView>
        {prices.map((s, i) => (
          <Price item={s} index={i} />
        ))}
        <ResponseText>
          회원가입 시 등록한 정보는 개인정보처리방침에 따라 처리되며, 기본정보는
          내 프로필에서 수정 가능 합니다.
        </ResponseText>
      </ScrollView>
    </WhiteSafeAreaView>
  );
}
