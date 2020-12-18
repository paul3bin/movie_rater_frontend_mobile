import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { API } from '../api_service'
import { TouchableOpacity } from 'react-native-gesture-handler';

function UserAuthentication(props) {  

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [registerView, setRegisterView] = useState(false);

    useEffect(()=>{
        getToken();
    }, [])

    const userLogin = () => {
        API.userLogin({ username, password })
            .then(resp => saveToken(resp.token))
        props.navigation.navigate('List')
    }

    const registerUser = () => {
        API.userRegister({ username, password })
            .then(resp => setRegisterView(false))
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

    const toggleView = () => {
        setRegisterView(!registerView);
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

            <Button onPress={() => {registerView ? registerUser() :userLogin()}} title={registerView ? "Register" : "Login"}/> 
            <TouchableOpacity onPress={() => toggleView()}>
                {registerView ? <Text style={styles.labelFooter2}>Already registered? Login here.</Text> 
                : <Text style={styles.labelFooter1}>Don't have an account? Register here.</Text>}
            </TouchableOpacity>       
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
  labelFooter1: {
    fontSize: 15,
    color: 'white',
    paddingTop: 20,
    paddingLeft: 85,
    paddingRight: 10,
},
labelFooter2: {
    fontSize: 15,
    color: 'white',
    paddingTop: 20,
    paddingLeft: 105,
    paddingRight: 10,
},
});

export { UserAuthentication };