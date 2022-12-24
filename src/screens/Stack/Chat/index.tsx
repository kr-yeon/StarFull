import React, {useState} from 'react';
import {TitleHeader, WhiteSafeAreaView} from '~/components';
import {useNavigation} from '@react-navigation/native';
import {
  BoostButton,
  BoostText,
  ChatInput,
  ChatScroll,
  Chatting,
  ChattingDate,
  ChattingDateText,
  ChattingVertical,
  ChattingView,
  ChatView,
  TimeText,
} from '@screens/Stack/Chat/styles';
import colors from '@utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import screen_names from '@utils/screen_names';

interface IChat {
  type: string;
  text: string;
  time?: string;
}

export default function () {
  const navigation = useNavigation();

  const [info, setInfo] = useState({
    nickname: '유화장인',
  });
  const [chats, setChats] = useState<Array<IChat>>([]);
  const [text, setText] = useState('');

  return (
    <WhiteSafeAreaView>
      <TitleHeader
        title={info.nickname}
        onBack={navigation.goBack}
        right={
          <BoostButton
            onPress={() => {
              // @ts-ignore
              navigation.navigate(screen_names.Boost);
            }}>
            <BoostText>후원하기</BoostText>
          </BoostButton>
        }
      />
      <ChatScroll>
        {chats.map(s => {
          if (s.type === 'date') {
            return (
              <ChattingDate>
                <ChattingDateText>{s.text}</ChattingDateText>
              </ChattingDate>
            );
          } else {
            return (
              <ChattingVertical>
                <TimeText>{s?.time}</TimeText>
                <ChattingView>
                  <Chatting>{s.text}</Chatting>
                </ChattingView>
              </ChattingVertical>
            );
          }
        })}
      </ChatScroll>
      <ChatView>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={'panorama-variant-outline'}
            size={30}
            color={colors.black_gray}
          />
        </TouchableOpacity>
        <ChatInput
          placeholder={'메시지를 입력해주세요...'}
          placeholderTextColor={colors.gray}
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity
          onPress={() => {
            const date = new Date();
            const month = date.getMonth() + 1;

            setChats(
              chats.length === 0
                ? [
                    {
                      type: 'date',
                      text:
                        date.getFullYear() +
                        '. ' +
                        (month.toString().length === 1 ? '0' + month : month) +
                        '. ' +
                        (date.getDate().toString().length === 1
                          ? '0' + date.getDate()
                          : date.getDate()),
                    },
                    {
                      type: 'message',
                      time:
                        (date.getHours() > 12
                          ? '오후 ' + (date.getHours() - 12)
                          : '오전 ' + date.getHours()) +
                        ':' +
                        date.getMinutes(),
                      text,
                    },
                  ]
                : [
                    ...chats,
                    {
                      type: 'message',
                      time:
                        (date.getHours() > 12
                          ? '오후 ' + (date.getHours() - 12)
                          : '오전 ' + date.getHours()) +
                        ':' +
                        date.getMinutes(),
                      text,
                    },
                  ],
            );
            setText('');
          }}>
          <MaterialCommunityIcons
            name={'send'}
            size={30}
            color={colors.blue_purple}
          />
        </TouchableOpacity>
      </ChatView>
    </WhiteSafeAreaView>
  );
}
