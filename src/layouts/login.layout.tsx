import React, { useState } from 'react';
import {
    SafeAreaView, StyleSheet,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import LoginForm from '../features/login-form/login-form.component';

function LoginLayout(): JSX.Element {
    return (
        <SafeAreaView style={styles.layout}>
            <LoginForm />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    layout: {
        padding: 24,
        flex: 1,                      
        justifyContent: 'center',  
    },
});


export default LoginLayout;
