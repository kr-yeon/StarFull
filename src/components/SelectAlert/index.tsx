import React from 'react';
import {
  Alert,
  Button,
  Button2,
  ButtonText,
  Modal,
  Root,
  Text,
} from './styles';

interface IProps {
  text: string;
  button: string;
  button2: string;
  visible: boolean;
  onButtonPress: () => any;
  onButton2Press: () => any;
}

export default function ({
  visible,
  button2,
  text,
  button,
  onButtonPress,
  onButton2Press,
}: IProps) {
  return (
    <Modal animationType={'fade'} visible={visible} transparent={true}>
      <Root>
        <Alert>
          <Text>{text}</Text>
          <Button onPress={onButtonPress}>
            <ButtonText>{button}</ButtonText>
          </Button>
          <Button2 onPress={onButton2Press}>
            <ButtonText>{button2}</ButtonText>
          </Button2>
        </Alert>
      </Root>
    </Modal>
  );
}
