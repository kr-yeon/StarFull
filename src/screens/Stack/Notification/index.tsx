import React, {useState} from 'react';
import {TitleHeader, WhiteSafeAreaView} from '~/components';
import {
  NotiDate,
  NotificationFlat,
  NotiHead,
  NotiLine,
  NotiRes,
  NotiTitle,
  NotiView,
} from './styles';
import {useNavigation} from '@react-navigation/native';

interface INotification {
  item: any;
}

function Notification({item}: INotification) {
  return (
    <NotiView key={item.res + item.date}>
      <NotiHead>
        <NotiTitle>{item.title}</NotiTitle>
        <NotiDate>{item.date}</NotiDate>
      </NotiHead>
      <NotiRes numberOfLines={2} lineBreakMode={'tail'}>
        {item.res}
      </NotiRes>
      <NotiLine />
    </NotiView>
  );
}

export default function () {
  const navigation = useNavigation();

  const [notis, setNotis] = useState([
    {
      title: 'ㅁㅁㅁ님께서 회원님의 게시글을 좋아합니다람쥐라.',
      res: '게시글 내용. 이 작품은 기분을 적나라하게 설명하는 딥 블루적인 디테일을 살려서 작품을 완성하게 되었습니다. 두 줄 까지만 여기에 표기되고 그 이후는 ...',
      date: '1시간 전',
    },
  ]);

  return (
    <WhiteSafeAreaView>
      <TitleHeader title={'알림'} onBack={navigation.goBack} />
      <NotificationFlat data={notis} renderItem={Notification} />
    </WhiteSafeAreaView>
  );
}
