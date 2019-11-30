import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Dimensions, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

class Signup extends React.Component {

  //I always like keeping this here, it is for performing actions before the component (the screen) loads
  componentWillMount(){

  }

  state = {
    student: true,
    email : '',
    password: '',
    name: '',
    phone: '',
    teacherCode: ''
  }

  studentPressed = () => {
    this.setState({
      student: true
    })
  }

  teacherPressed = () => {
    this.setState({
      student: false
    })
  }

  studentDone = () => {
    Actions.StudentDash();
  }

  teacherDone = () => {
    Actions.TeacherDash();
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={{ uri: 'https://wallpaperbro.com/img/53490.jpg' }}
        >
        <Text style={styles.startText}> 
          I'm a 
        </Text>
        <View style={styles.studentTeacherContainer}>
          <TouchableOpacity onPress={() => this.studentPressed()}>
            {this.state.student == true? 
            <Text style={styles.studentButton}>
              Student
            </Text> 
            : 
            <Text style={styles.studentButtonDisabled}>
              Student
            </Text>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.teacherPressed()}>
            {this.state.student == true? 
            <Text style={styles.teacherButtonDisabled}>
              Teacher
            </Text> 
            : 
            <Text style={styles.teacherButton}>
              Teacher
            </Text>}
          </TouchableOpacity>
        </View>
        {this.state.student == true? 
        //if the person is a student it will show this
        <View style={styles.promptsContainer}>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.name}
              placeholder='name'
              onChangeText={(name) => this.setState({name: name})}
            />
            </View>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.email}
              placeholder='email'
              onChangeText={(email) => this.setState({email: email})}
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
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.number}
              placeholder='(XXX)-XXX-XXXX'
              onChangeText={(number) => this.setState({number: number})}
            />
          </View>
          <TouchableOpacity onPress={() => {this.studentDone()}}>
          <View style={styles.doneButton}>
              < Text style={styles.buttonText}> 
                Done 
              </Text>
              </View>
          </TouchableOpacity>
        </View> 
        : 
        //if the person is a teacher it will show this
        <View style={styles.promptsContainer}>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.name}
              placeholder='name'
              onChangeText={(name) => this.setState({name: name})}
            />
            </View>
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.email}
              placeholder='email'
              onChangeText={(email) => this.setState({email: email})}
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
          <View style={styles.userInfoInput}>
            <TextInput
              style={styles.textInputStyle}
              value={this.state.number}
              placeholder='(XXX)-XXX-XXXX'
              onChangeText={(number) => this.setState({number: number})}
            />
          </View>
          <TouchableOpacity onPress={() => {this.teacherDone()}}>
              <View style={styles.doneButton}>
              < Text style={styles.buttonText}> 
                Done 
              </Text>
              </View>
          </TouchableOpacity>
        </View>
        }
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#274156',
    alignItems: 'center',
    flex: 1,
  },
  background:{
    height: deviceHeight,
    width: deviceWidth,
    alignItems: 'center',
  },
  startText: {
    fontSize: 30,
    fontFamily: 'HelveticaNeue-Medium',
    color: 'white',
    paddingTop: 80,
  },
  studentTeacherContainer: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  studentButton: {
    fontSize: 40,
    paddingRight: 20,
    color: 'white',
    fontFamily: 'HelveticaNeue-Medium',
  },
  studentButtonDisabled:{
    fontSize: 40,
    paddingRight: 20,
    color: 'grey',
    fontFamily: 'HelveticaNeue-Medium',
  },
  teacherButton: {
    fontSize: 40,
    paddingLeft: 20,
    color: 'white',
    fontFamily: 'HelveticaNeue-Medium',
  },
  teacherButtonDisabled: {
    fontSize: 40,
    paddingLeft: 20,
    color: 'grey',
    fontFamily: 'HelveticaNeue-Medium',
  },
  promptsContainer: {
    alignItems: 'center'
  },

  textInputStyle: {
    fontSize: 24,
    color: 'black',
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
  doneButton: {
    height: deviceHeight*.09,
    width: deviceHeight*.11,
    backgroundColor: '#2c2828',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText:{
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});


//this lets the component get imported other places
export default Signup;