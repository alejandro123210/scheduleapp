import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

class ClassName extends React.Component {

  //I always like keeping this here, it is for performing actions before the component (the screen) loads
  componentWillMount(){

  }

  render() {
    return (
      //input code here
      <View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});


//this lets the component get imported other places
export default ClassName;