/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import React, { useState, useEffect } from 'react';
// import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

/**
 * Stack
 */
import Stacks from '@stacks/Stacks';
/**
 * Screen
 */

/**
 * constants
 */
import { Theme } from './src/constants/common';

/**
 * @todo - AccessToken 유무에 따라 초기페이지, 메인페이지 조건부 렌더링을 해야한다.
 */
function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <NavigationContainer theme={Theme}>
          <Stacks />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

export default App;
