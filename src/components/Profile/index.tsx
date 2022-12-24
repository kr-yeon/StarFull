import React from 'react';
import {
  ButtonText,
  InfoContainer,
  InfoText,
  InfoView,
  Number,
  OutLIneButton,
  ProfileImage,
  Root,
  VerticalView,
} from '@components/Profile/styles';
import {Dimensions} from 'react-native';
import {DefaultProfile} from '~/components';

interface IProfile {
  nickname: string;
  image: string;
  isMine: boolean;
  isFollow?: boolean;
  onMessagePress?: () => any;
}

const windowWidth = Dimensions.get('window').width;

export default function ({nickname, image, onMessagePress}: IProfile) {
  return (
    <Root>
      {image ? (
        <ProfileImage source={{uri: image}} resizeMode={'cover'} />
      ) : (
        <DefaultProfile
          size={windowWidth * 0.2}
          iconSize={windowWidth * 0.14}
        />
      )}
      <InfoContainer>
        <VerticalView>
          <InfoView>
            <Number>140</Number>
            <InfoText>게시물</InfoText>
          </InfoView>
          <InfoView>
            <Number>320</Number>
            <InfoText>팔로워</InfoText>
          </InfoView>
          <InfoView>
            <Number>350</Number>
            <InfoText>팔로잉</InfoText>
          </InfoView>
        </VerticalView>
        <VerticalView>
          <OutLIneButton>
            <ButtonText>팔로잉</ButtonText>
          </OutLIneButton>
          <OutLIneButton>
            <ButtonText>후원하기</ButtonText>
          </OutLIneButton>
          <OutLIneButton onPress={onMessagePress ? onMessagePress : () => {}}>
            <ButtonText>메시지</ButtonText>
          </OutLIneButton>
        </VerticalView>
      </InfoContainer>
    </Root>
  );
}
