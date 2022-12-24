import React, {useState} from 'react';
import {TitleHeader, WhiteSafeAreaView} from '~/components';
import styles, {
  DateText,
  NewText,
  NoticeFlat,
  NoticeImage,
  NoticeTitle,
  NoticeTitleInfo,
  NoticeView,
} from './styles';

interface INotice {
  item: any;
  index: number;
}

function Notice({item}: INotice) {
  return (
    <NoticeView key={item.title}>
      <NoticeImage
        style={styles.notice_image}
        source={{uri: item.image}}
        resizeMode={'cover'}
      />
      <NoticeTitleInfo>
        <NoticeTitle>{item.title}</NoticeTitle>
        {item.isNew && <NewText>NEW</NewText>}
      </NoticeTitleInfo>
      <DateText>
        행사기간: {item.startDate} ~ {item.endDate}
      </DateText>
    </NoticeView>
  );
}

export default function () {
  const [notics, setNotics] = useState([
    {
      image:
        'https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg',
      title: '그라데이션만의 특별한 이벤트',
      startDate: '2021.12.02',
      endDate: '2028.04.30',
      isNew: true,
    },
    {
      image:
        'https://images.mypetlife.co.kr/content/uploads/2022/05/27121008/13626546325_3437ed4597_b-1.jpg',
      title: '그라데이션 출석체크 이벤트',
      startDate: '2021.12.02',
      endDate: '2028.04.30',
      isNew: false,
    },
    {
      image:
        'https://blog.kakaocdn.net/dn/Cabcw/btrrdmj0A58/1YkOil23N3sFbQsrY61qpK/img.jpg',
      title: '“별들이 내려와” 이벤트',
      startDate: '2021.12.02',
      endDate: '2028.04.30',
      isNew: false,
    },
  ]);

  return (
    <WhiteSafeAreaView>
      <TitleHeader title={'그라데이션'} />
      <NoticeFlat data={notics} renderItem={Notice} />
    </WhiteSafeAreaView>
  );
}
