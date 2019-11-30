import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { Actions } from 'react-native-router-flux';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

class RegisteredLogin extends React.Component {

  //I always like keeping this here, it is for performing actions before the component (the screen) loads
  componentWillMount(){

  }

  state = {
    username: '',
    password: '',
  }

  backPressed = () => {
    Actions.Login();
  }

  confirmation = () =>{
    Actions.TeacherDash();
  }

  render() {
    return (
      // this is just random filler for the template, but this is where what the user sees is rendered
      <View style={styles.container}>
        <ImageBackground
                style={styles.background}
                source={{ uri: 'https://wallpaperbro.com/img/53490.jpg' }}
            >
        <Text style={styles.title}>
          MusicPro
        </Text>
        <View style={styles.userInfoInput}>
          <TextInput
            style={styles.textInputStyle}
            value={this.state.username}
            placeholder='username'
            onChangeText={(username) => this.setState({username: username})}
          />
        </View>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.password}
              placeholder='password'
              onChangeText={(password) => this.setState({password: password})}
            />
          </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => this.confirmation()} style={styles.button} activeOpacity={.6}>
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.backPressed()}} style={styles.button} activeOpacity={.6}>
            <Text style={styles.buttonText}>Back</Text>
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
  title: {
    fontSize: 70,
    paddingTop: '66%',
    color: 'white',
  },
  textInputStyle: {
    fontSize: 24,
    color: '#2c2828',
    fontFamily: 'HelveticaNeue-Medium',
    margin: 10,
  },
  userInfoInput: {
    height: deviceHeight*.08,
    width: deviceWidth*.9,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '30%',
    width: '50%',
  },
  button: {
    height: '30%',
    width: '50%',
    backgroundColor: 'white',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,    
  },
  buttonText:{
    fontFamily: 'HelveticaNeue-Medium',
    color: '#2c2828',
  }
});


//this lets the component get imported other places
export default RegisteredLogin;