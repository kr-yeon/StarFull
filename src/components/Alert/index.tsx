import React from 'react';
import {
  Alert,
  Button,
  ButtonText,
  Modal,
  Root,
  Text,
} from '@components/Alert/styles';

interface IProps {
  text: string;
  button: string;
  visible: boolean;
  onButtonPress: () => any;
}

export default function ({visible, text, button, onButtonPress}: IProps) {
  return (
    <Modal animationType={'fade'} visible={visible} transparent={true}>
      <Root>
        <Alert>
          <Text>{text}</Text>
          <Button onPress={onButtonPress}>
            <ButtonText>{button}</ButtonText>
          </Button>
        </Alert>
      </Root>
    </Modal>
  );
}
