import * as KakaoLogins from '@react-native-seoul/kakao-login/index.native';

function initData(id: string) {

}

export async function kakao() {
  try {
    await KakaoLogins.login();
    console.log('kakao-' + (await KakaoLogins.getProfile()).id);
    await KakaoLogins.logout();
  } catch (e) {}
}
