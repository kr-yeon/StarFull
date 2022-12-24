import {KeyboardAvoidingView, Platform, View, StyleSheet} from 'react-native';
import React from 'react';

export default ({children}: {children: any}) => {
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView behavior={'padding'} style={styles.flex}>
      {children}
    </KeyboardAvoidingView>
  ) : (
    <View style={styles.flex}>{children}</View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
