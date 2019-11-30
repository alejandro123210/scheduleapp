import React from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Dimensions, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import { Actions } from 'react-native-router-flux';


class TeacherCalendar extends React.Component {

  //I always like keeping this here, it is for performing actions before the component (the screen) loads
  componentWillMount(){

  }

  handlePress = () => {
    Actions.StudentRequest();
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>
          PLACEHOLDER SCREEN FOR CALENDAR
        </Text>
        <TouchableHighlight
          onPress={this.handlePress}
          style={styles.button}
        >
          <Text>
            Press Me!
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: 'pink',
  }
});


//this lets the component get imported other places
export default TeacherCalendar;