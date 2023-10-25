
import { firebase, FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useStore } from '../redux-context';
import { RouterStore } from '../stores/router.store';

function SplashLayout() {
    const router = useStore(RouterStore)
    useEffect(() => {
        console.log('------------SplashLayout-----------');
        if (firebase.auth().currentUser) {
            router.dispatch.navigate('/home')
        }
    }, [])
    return (
        <>
        </>
    );
}

export default SplashLayout;
