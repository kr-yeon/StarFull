import React, {useState} from 'react';
import { KeyboardView, TitleHeader, WhiteSafeAreaView } from "@components/index";
import {GuideText, RightButton, RightText, TextInput} from './styles';
import colors from '@utils/colors';
import {StatusBar} from 'react-native';

export default function () {
  const [nickName, setNickName] = useState('');

  return (
    <WhiteSafeAreaView>
      <KeyboardView>
        <StatusBar backgroundColor={'#FD368A'} barStyle={'light-content'} />
        <TitleHeader
          title={'그라데이션'}
          right={
            <RightButton>
              <RightText color={nickName.trim() ? colors.black : colors.gray}>
                확인
              </RightText>
            </RightButton>
          }
        />
        <TextInput
          value={nickName}
          onChangeText={setNickName}
          placeholder={'당신의 별이름을 입력해 주세요.'}
          placeholderTextColor={colors.black_gray}
          maxLength={10}
        />
        <GuideText>
          스타폴에서 사용하실 닉네임을 입력해 주세요.
          {'\n'}별 이름은 [프로필 설정] {'>'} [내 정보 설정]에서 변경 하실 수
          있습니다.
        </GuideText>
      </KeyboardView>
    </WhiteSafeAreaView>
  );
}
