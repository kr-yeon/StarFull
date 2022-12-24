import React from 'react';
import colors from '@utils/colors';
import {
  BackGround,
  FlexSafeAreaView,
  IdentityText,
  TitleText,
  LoginButton,
  LoginText,
  CopyRight,
} from './styles';
import {StatusBar} from 'react-native';
import * as login from '@utils/login';

export default function () {
  return (
    <BackGround
      source={require('@assets/imgs/background_image.png')}
      resizeMode={'cover'}>
      <FlexSafeAreaView>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.black} />
        <IdentityText>EMOTION FAIR IN YOUR HAND</IdentityText>
        <TitleText>그라데이션</TitleText>
        <LoginButton
          backgroundColor={colors.kakao}
          activeOpacity={0.7}
          onPress={() => {
            login.kakao();
          }}>
          <LoginText color={colors.black}>카카오톡으로 로그인하기</LoginText>
        </LoginButton>
        <LoginButton backgroundColor={colors.apple} activeOpacity={0.7}>
          <LoginText color={colors.white}>애플로 로그인하기</LoginText>
        </LoginButton>
        <CopyRight>{'DESIGNED BY HARMONICS\n&\nSUP_SETTING'}</CopyRight>
      </FlexSafeAreaView>
    </BackGround>
  );
}
