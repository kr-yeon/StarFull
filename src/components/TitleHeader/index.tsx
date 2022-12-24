import React from 'react';
import { BackButton, HeaderTitle, HeaderView } from "./styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@utils/colors';

interface IProps {
  title: string;
  right?: JSX.Element;
  onBack?: () => any;
}

export default function ({title, right, onBack}: IProps) {
  return (
    <HeaderView>
      {onBack && (
        <BackButton onPress={onBack}>
          <MaterialCommunityIcons
            name={'chevron-left'}
            size={28}
            color={colors.black}
          />
        </BackButton>
      )}
      <HeaderTitle>{title}</HeaderTitle>
      {!!right && right}
    </HeaderView>
  );
}
