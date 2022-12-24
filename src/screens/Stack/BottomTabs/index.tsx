import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottom_tabs} from '@utils/screen_names';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {StatusBar, TouchableOpacity} from 'react-native';
import styles from './styles';

import Home from './Home';
import Search from './Search';
import Notice from './Notice';
import Message from './Message';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

export default function () {
  return (
    <>
      <StatusBar backgroundColor={'#FD368A'} barStyle={'light-content'} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#FD368A',
          tabBarInactiveTintColor: '#000000',
          tabBarButton: props => <TouchableOpacity {...props} />,
          tabBarLabelStyle: styles.label_text,
        }}>
        <Tab.Screen
          name={bottom_tabs.Home}
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name={'home'} size={size} color={color} />
            ),
            tabBarLabel: '홈',
          }}
        />
        <Tab.Screen
          name={bottom_tabs.Search}
          component={Search}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name={'search'} size={size} color={color} />
            ),
            tabBarLabel: '검색',
          }}
        />
        <Tab.Screen
          name={bottom_tabs.Notice}
          component={Notice}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name={'bullhorn'}
                size={size}
                color={color}
              />
            ),
            tabBarLabel: '공지',
          }}
        />
        <Tab.Screen
          name={bottom_tabs.Message}
          component={Message}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name={'message-text'}
                size={size}
                color={color}
              />
            ),
            tabBarLabel: '메세지',
          }}
        />
        <Tab.Screen
          name={bottom_tabs.Profile}
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name={'person'} size={size} color={color} />
            ),
            tabBarLabel: '프로필',
          }}
        />
      </Tab.Navigator>
    </>
  );
}
