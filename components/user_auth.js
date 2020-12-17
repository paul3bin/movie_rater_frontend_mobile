import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API } from '../api_service'

function UserAuthentication(props) {  

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        getToken();
    }, [])

    // editing the movie, saving the changes and bringing back the changes to the previous screen to display
    const userLogin = () => {
        API.userLogin({ username, password })
            .then(resp => saveToken(resp.token))
        // props.navigation.navigate('List')
    }

    const saveToken = async (token) =>{
        await AsyncStorage.setItem('token', token)   
    }

    const getToken = async () =>{
        const token = await AsyncStorage.getItem('token');
        if(token){ 
            props.navigation.navigate('List')
        }
    }
    
    return (
        <View style={styles.container}>
            
            <TextInput 
                style={styles.input}
                placeholder="Username"
                onChangeText = {text => setUsername(text)}
                value = {username}
                autoCapitalize={"none"}
            />
            
            <TextInput 
                style={styles.input}
                placeholder="Password"
                onChangeText = {text => setPassword(text)}
                value = {password}
                secureTextEntry={true}
                autoCapitalize={"none"}
            />

            <Button onPress={() => userLogin()} title="Login"/> 
        
        </View>
    );
}


// This type of navigation styling is for function based components
UserAuthentication.navigationOptions = screenProps => ({
  title: "Login",
  headerStyle: {
    backgroundColor: 'orange'
  },
  headerTintColor: '#fff',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C35',
    padding: 13,
  },
  label: {
      fontSize: 24,
      color: 'white',
  },
  input: {
      fontSize: 24,
      padding: 10,
      margin: 10,
      backgroundColor: 'white',
  },
});

export { UserAuthentication };