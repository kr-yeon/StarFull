import React from 'react';
import {Profile} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@utils/colors';

interface IProps {
  size: number;
  iconSize: number;
}

export default function ({size, iconSize}: IProps) {
  return (
    <Profile size={size}>
      <MaterialCommunityIcons
        name={'account'}
        size={iconSize}
        color={colors.white}
      />
    </Profile>
  );
}
