import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground, Image, Dimensions} from 'react-native';
//for screen switching
import { Actions } from 'react-native-router-flux';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

class Login extends React.Component {

    //I always like keeping this here, it is for performing actions before the component (the screen) loads
    componentWillMount(){

    }

    loginPressed = () => {
        // this is how you switch screens
        Actions.RegisteredLogin();
    }

    signupPressed = () => {
        Actions.Signup();
    }
    
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground
                style={styles.background}
                source={{ uri: 'https://wallpaperbro.com/img/53490.jpg' }}
            >
                <Text style={styles.title}> MusicPro  </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.loginPressed()} style={styles.button} activeOpacity={.6}>
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.signupPressed()} style={styles.button} activeOpacity={.6}>
                        <Text style={styles.buttonText}>sign up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            </View>
        );
    }
}
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        height: deviceHeight,
        width: deviceWidth,
        alignItems: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column-reverse',
        height: '75%',
        width: '100%',
    },
    button: {
        height: 50,
        width: '95%',
        backgroundColor: 'white',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        
    },
    buttonText: {
        fontSize: 30,
        color: 'black'
    },
    title: {
        fontSize: 70,
        paddingTop: '66%',
        color: 'white',
    }


});



  //this lets the component get imported other places
  export default Login;