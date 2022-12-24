import React, {Suspense} from 'react';
import {RecoilRoot} from 'recoil';
import styled from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import Stack from '@screens/Stack';
import {StatusBar, Text, TextInput} from 'react-native';
import colors from '@utils/colors';

interface TextWithDefaultProps extends Text {
  defaultProps?: {allowFontScaling?: boolean};
}

interface TextInputWithDefaultProps extends TextInput {
  defaultProps?: {allowFontScaling?: boolean};
}

(Text as unknown as TextWithDefaultProps).defaultProps =
  (Text as unknown as TextWithDefaultProps).defaultProps || {};
(Text as unknown as TextWithDefaultProps).defaultProps!.allowFontScaling =
  false;
(TextInput as unknown as TextInputWithDefaultProps).defaultProps =
  (TextInput as unknown as TextInputWithDefaultProps).defaultProps || {};
(
  TextInput as unknown as TextInputWithDefaultProps
).defaultProps!.allowFontScaling = false;

const FlexView = styled.View`
  flex: 1;
  background-color: ${colors.pink};
`;

const LoadVIew = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <Suspense fallback={<LoadVIew />}>
      <StatusBar backgroundColor={colors.pink} barStyle={'light-content'} />
      <RecoilRoot>
        <FlexView>
          <NavigationContainer>
            <Stack />
          </NavigationContainer>
        </FlexView>
      </RecoilRoot>
    </Suspense>
  );
};

export default App;
