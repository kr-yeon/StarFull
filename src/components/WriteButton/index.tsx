import React from 'react';
import {Button} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@utils/colors';

interface IButton {
  onPress: () => any;
}

export default function ({onPress}: IButton) {
  return (
    <Button onPress={onPress}>
      <MaterialCommunityIcons
        name={'pencil-plus'}
        size={28}
        color={colors.white}
      />
    </Button>
  );
}
