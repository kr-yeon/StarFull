import React from 'react';
import screen_names, {home_top_tabs} from '@utils/screen_names';
import {TitleHeader, WhiteSafeAreaView, WriteButton} from '@components/index';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import styles, {NotificationButton} from './styles';
import colors from '@utils/colors';
import LatestArtGallery from './LatestArtGallery';
import Follow from './Follow';
import StarShop from './StarShop';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const renderScene = SceneMap({
  [home_top_tabs.LatestArtGallery]: LatestArtGallery,
  [home_top_tabs.Follow]: Follow,
  [home_top_tabs.StarShop]: StarShop,
});

export default function () {
  const navigation = useNavigation();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: home_top_tabs.LatestArtGallery, title: '최신 작품관'},
    {key: home_top_tabs.Follow, title: '팔로우'},
    {key: home_top_tabs.StarShop, title: '별 샵'},
  ]);

  return (
    <WhiteSafeAreaView>
      <TitleHeader
        title={'그라데이션'}
        right={
          <NotificationButton
            onPress={() => {
              // @ts-ignore
              navigation.navigate(screen_names.Notification);
            }}>
            <MaterialCommunityIcons
              name={'bell'}
              size={25}
              color={colors.black}
            />
          </NotificationButton>
        }
      />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tab_bar}
            indicatorStyle={styles.indicator}
            labelStyle={styles.tab_bar_title}
            tabStyle={styles.tab}
            contentContainerStyle={styles.content_container}
            indicatorContainerStyle={styles.indicator_container}
            activeColor={colors.blue_purple}
            inactiveColor={colors.gray}
          />
        )}
      />
      {index !== 2 && (
        <WriteButton
          onPress={() => {
            // @ts-ignore
            navigation.navigate(screen_names.WritePost);
          }}
        />
      )}
    </WhiteSafeAreaView>
  );
}
