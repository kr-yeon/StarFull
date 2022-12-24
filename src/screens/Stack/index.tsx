import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import ScreenNames from '@utils/screen_names';
import {StatusBar} from 'react-native';
import LoginScreen from './Login';
import SetNickName from './SetNickName';
import BottomTabs from './BottomTabs';
import Notification from './Notification';
import WritePost from './WritePost';
import PostDetail from './PostDetail';
import ProfileDetail from './ProfileDetail';
import Chat from './Chat';
import Boost from './Boost';

const Stack = createStackNavigator();

export default function () {
  return (
    <>
      <StatusBar backgroundColor={'#FD368A'} barStyle={'light-content'} />
      <Stack.Navigator
        initialRouteName={ScreenNames.Login}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
        <Stack.Screen name={ScreenNames.SetNickName} component={SetNickName} />
        <Stack.Screen name={ScreenNames.BottomTabs} component={BottomTabs} />
        <Stack.Screen
          name={ScreenNames.Notification}
          component={Notification}
        />
        <Stack.Screen name={ScreenNames.WritePost} component={WritePost} />
        <Stack.Screen name={ScreenNames.PostDetail} component={PostDetail} />
        <Stack.Screen
          name={ScreenNames.ProfileDetail}
          component={ProfileDetail}
        />
        <Stack.Screen name={ScreenNames.Chat} component={Chat} />
        <Stack.Screen name={ScreenNames.Boost} component={Boost} />
      </Stack.Navigator>
    </>
  );
}
