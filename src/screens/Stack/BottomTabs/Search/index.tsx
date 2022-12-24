import React, {useState} from 'react';
import {KeyboardView, TitleHeader, WhiteSafeAreaView} from '~/components';
import colors from '@utils/colors';
import {
  RecentButton,
  RecentFlat,
  RecentText,
  RecentTitle,
  SearchInput,
  SearchView,
} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';

interface IRecentKeyword {
  item: any;
}

function RecentKeyword({item}: IRecentKeyword) {
  return (
    <RecentButton key={item}>
      <RecentText>{item}</RecentText>
      <TouchableOpacity>
        <FontAwesome name={'remove'} size={20} color={colors.black_gray} />
      </TouchableOpacity>
    </RecentButton>
  );
}

export default function () {
  const [recents, setRecents] = useState(['최근검색1', '최근검색2']);

  return (
    <WhiteSafeAreaView>
      <KeyboardView>
        <TitleHeader title={'그라데이션'} />
        <SearchView>
          <SearchInput
            placeholder={'검색어를 입력해주세요.'}
            placeholderTextColor={colors.black_gray}
          />
          <TouchableOpacity>
            <MaterialIcons name={'search'} size={29} color={colors.black} />
          </TouchableOpacity>
        </SearchView>
        <RecentTitle>최근 검색어</RecentTitle>
        <RecentFlat data={recents} renderItem={RecentKeyword} numColumns={2} />
      </KeyboardView>
    </WhiteSafeAreaView>
  );
}
