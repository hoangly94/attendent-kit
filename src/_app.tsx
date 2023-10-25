/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import HomeLayout from './layouts/home.layout';
import LoginLayout from './layouts/login.layout';
import { RouterConsumer, RouterProdiver } from './stores/router.store';
import SplashLayout from './layouts/splash.layout';


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // useEffect(() => {
  //   const checkCameraPermission = async () => {
  //     try {
  //       const result = await check(
  //         Platform.OS === 'android'
  //           ? PERMISSIONS.ANDROID.CAMERA
  //           : PERMISSIONS.IOS.CAMERA
  //       );

  //       if (result === RESULTS.DENIED) {
  //         const permissionResult = await request(
  //           Platform.OS === 'android'
  //             ? PERMISSIONS.ANDROID.CAMERA
  //             : PERMISSIONS.IOS.CAMERA
  //         );
  //         if (permissionResult === RESULTS.GRANTED) {
  //           // Permission granted
  //         } else {
  //           // Permission denied
  //         }
  //       } else if (result === RESULTS.GRANTED) {
  //         // Permission already granted
  //       } else {
  //         // Permission denied
  //       }
  //     } catch (error) {
  //       console.error('Error checking camera permission:', error);
  //     }
  //   };

  //   checkCameraPermission();
  // }, []);

  return (
    <View style={styles.app}>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <RouterProdiver>
        <RouterConsumer
          routes={[
            {
              path: '',
              element: <SplashLayout />,
            },
            {
              path: '/home',
              element: <HomeLayout />,
            },
            {
              path: '/login',
              element: <LoginLayout />,
            },
          ]}
        />
      </RouterProdiver>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
