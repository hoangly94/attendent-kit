
import { firebase, FirebaseAuthTypes } from '@react-native-firebase/auth';
import React, { useContext, useEffect, useState } from 'react';
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import * as yup from 'yup';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginValues } from '../../models/auth.model';
import authSchema from '../../yup/auth.schema';
import { useStore } from '../../redux-context';
import { RouterStore } from '../../stores/router.store';
import { AppContext } from '../../redux-context/context';

function LoginForm() {
    const routerStore = useStore(RouterStore)
    const context = useContext(AppContext);
    const { control, handleSubmit, formState } = useForm<LoginValues>({
        mode: 'onSubmit',
        resolver: yupResolver(authSchema.loginForm),
    }); // Sửa dòng này
    console.log('----------LoginForm----------')
    const onSubmit = async (formData: LoginValues) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(formData.email, formData.password)
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    console.log('Login Success');
                    routerStore.dispatch.navigate('/home')
                }
            });
        } catch (error) {
            console.error('Error sending email link:', error);
        }
    };

    return (
        <View style={styles.view}>
            <Text style={styles.titleText} >Attendent Kit</Text>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[styles.textInput, !!formState.errors.email?.message && styles.errorTextInput]}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        // value={value}
                        placeholder="Email"
                    />
                )}
                name="email"
                rules={{ required: true }}
            />
            {/* <Text>{formState.errors.email?.message}</Text> */}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={[styles.textInput, !!formState.errors.password?.message && styles.errorTextInput]}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        // value={value}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                )}
                name="password"
                rules={{ required: true }}
            />
            {/* <Text>{formState.errors.password?.message}</Text> */}
            <Button title="Login" onPress={handleSubmit(onSubmit)} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        marginBottom: '30%',
    },
    titleText: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    textInput: {
        height: 38,
        borderWidth: 1,
        borderColor: '#aaa',
        marginBottom: 16,
        padding: 10,
        borderRadius: 2,
    },
    errorTextInput: {
        borderColor: 'red',
    },
});


export default LoginForm;
