import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, Dimensions, ScrollView, TextInput, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import { Actions } from 'react-native-router-flux';


let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

class TeacherList extends React.Component {

  //I always like keeping this here, it is for performing actions before the component (the screen) loads
  componentWillMount(){

  }

  //
  state = {
    inputValue: '',
    teacherList: [
        {
            name: 'Grace Jacobs',
            city: 'Manhattan, NY',
            instrument: 'Guitar',
            image: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/40482582_1687539791374401_1861957606596149248_n.jpg?_nc_cat=108&_nc_ohc=UYI3jh4nLKYAQneCwzUp7HEKi154WXmQobi1Ttxfl7cSo007KSqq-SrJA&_nc_ht=scontent-lga3-1.xx&oh=4de1bae06bfa24786863fa66e1447ebf&oe=5E815AC5',
        },
        {
            name: 'Andrew Besos',
            city: 'Queens, NY',
            instrument: 'Saxophone',
            image: 'https://thumbs.dreamstime.com/t/professional-headshot-man-56247494.jpg',
        },
        {
            name: 'Mary Sommers',
            city: 'Manhattan, NY',
            instrument: 'Flute',
            image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
            name: 'Bernard Johnson',
            city: 'Brooklyn, NY',
            instrument: 'Guitar',
            image: 'https://images.squarespace-cdn.com/content/v1/514ffe4ee4b020d11228d65c/1402503323092-B5P7NO9BACDMY45UI1N0/ke17ZwdGBToddI8pDm48kCPztTQZpDiZMOuuCfUxiyx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYlQ-m0oNUh_9buvyC-f1CSdhG_dNlqULB2ZTz-ses64A-QPhXXvNcU0N8wN7BGx0g/image-asset.jpeg',
        },
        {
            name: 'Tina Smith',
            city: 'Manhattan, NY',
            instrument: 'Triangle',
            image: 'http://blog.scottrklinephoto.com/wp-content/uploads/2013/10/Amy_Wigdahl_Headshot_15E9688-1024x683.jpg',
        },
        {
            name: 'Richard Martin',
            city: 'Manhattan, NY',
            instrument: 'Guitar',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        },
        {
            name: 'Liam West',
            city: 'Brooklyn, NY',
            instrument: 'Guitar',
            image: 'https://image1.masterfile.com/getImage/Njk4LTA3NTg4MzA1ZW4uMDAwMDAwMDA=AOcI0K/698-07588305en_Masterfile.jpg',
        },
        {
            name: 'Cynthia Williams',
            city: 'Manhattan, NY',
            instrument: 'Flute',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYW_ycIBW5Y4UrGN_We1RKTF966PjTYfdljzk_HJochHbcq9lx',
        },
    ]
}

handleTextChange = inputValue => {
    this.setState({ inputValue });
};

handleCalendarPress = () => {
    Actions.StudentDash();
}

handleProfilePress = () => {
}

handleCheckPress = () => {
    Actions.TeacherCalendar();
  }

  render() {
    return (
      <View style={styles.container}>
                <View style={styles.topBar}>
                    <View style={styles.leftContainer}>
                    <Image 
                        source={{ uri: 'https://www.pace.edu/sites/default/files/styles/news_item_675x450/public/marijoRussel_OGrady_DAILY_0.jpg?itok=viugcOqU' }}
                        style={styles.imageMain}
                    />
                    </View>
                    <View style={styles.middleContainer}>
                        <Text style={styles.nameText}>
                            Sarah Gibney
                        </Text>
                    </View>
                    <View style={styles.rightContainer}>
                    <TouchableHighlight
                        onPress={this.handleCalendarPress}
                    >
                        <Image 
                         source={{ uri: 'http://fa2png.io/media/icons/font-awesome/4-7-0/calendar-times-o/256/0/274156_none.png' }}
                        style={styles.icon}
                        />
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.handleProfilePress}
                    >
                        <Image 
                            source={{ uri: 'http://fa2png.io/media/icons/font-awesome/4-7-0/address-card-o/256/0/274156_none.png' }}
                            style={styles.icon}
                        />
                    </TouchableHighlight>  
                    </View>
                </View>
                <View style={styles.searchBar}>
                    <Image 
                            source={{ uri: 'http://fa2png.io/media/icons/font-awesome/4-7-0/search/256/0/274156_none.png' }}
                            style={styles.searchIcon}
                     />
                     <TextInput
                    value={this.state.inputValue}
                    onChangeText={this.handleTextChange}
                    style={styles.searchInput}
                    />
                    
                </View>
                <ScrollView>
                {this.state.teacherList.map((teacher) => (
                    <View style={styles.listContainer}>
                        <View style={styles.imageContainer}>
                            <Image
                            style={styles.image}
                            source={{uri: teacher.image}}
                            >
                            </Image>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.nameText}>
                                {teacher.name}
                            </Text>
                            <Text style={styles.infoText}>
                                {teacher.city}
                            </Text>
                            <Text style={styles.infoText}>
                                {teacher.instrument}
                            </Text>
                        </View>
                        <View style={styles.checkContainer}>
                        <TouchableHighlight
                        onPress={this.handleCheckPress}
                         >
                        <Image 
                            source={{ uri: 'http://fa2png.io/media/icons/font-awesome/4-7-0/check-square/256/0/274156_none.png' }}
                            style={styles.icon}
                        />
                        </TouchableHighlight>
                        </View>
                    </View>
                ))}
                </ScrollView>
            </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
     },
     topBar: {
         flexDirection: 'row',
         alignItems: 'center',
         height: deviceHeight/5,
         width: deviceWidth,
         backgroundColor: 'white',
         borderBottomWidth: 2,
         borderBottomColor: 'grey',
     },
     leftContainer:{
         width: deviceWidth/4,
         alignItems: 'center',
     },
     middleContainer: {
         width: deviceWidth/2.5,
     },
     rightContainer:{
        width: deviceWidth/2.5,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 40,
     },
     searchBar:{
        height: deviceHeight/10,
        flexDirection: 'row',
        alignItems: 'center',
     },
     searchInput: {
        height: deviceHeight/18,
        width: (deviceWidth/5)*4,
        backgroundColor: '#eeeced',
        margin: 10,
        borderRadius: 10,
     },
     listContainer: {
         flexDirection: 'row',
         width: (deviceWidth) - 5,
         height: deviceHeight/8,
         backgroundColor: 'white',
         borderRadius: 15,
         margin: 3,
         borderWidth: 1,
         borderBottomWidth: 2,
         borderColor: 'grey',
     },
     nameContainer: {
         width: (deviceWidth/4)*2,
         flexDirection: 'column',
     },
     imageContainer: {
         width: deviceWidth/4,
         alignItems: 'center',
         justifyContent: 'center'
     },
     checkContainer: {
        width: deviceWidth/4,
        alignItems: 'center',
        justifyContent: 'center'
    },
     nameText: {
         fontSize: 16,
         color: '#2c2828',
         fontFamily: 'HelveticaNeue-Medium',
         marginTop: 5,
     },
     infoText: {
         fontSize: 14,
         color: '#5b5b5b',
         fontFamily: 'HelveticaNeue-Light',
         marginTop: 2,
     },
     image:{
         width: deviceWidth/5,
         height: deviceWidth/5,
         borderRadius: 35,
     },
     imageMain:{
        width: deviceWidth/5,
        height: deviceWidth/5,
        borderRadius: 35    ,
        marginTop: 5,
    },
    icon:{
        width: deviceWidth/12,
        height: deviceWidth/12, 
        margin: 5,
    },
    searchIcon:{
        width: deviceWidth/16,
        height: deviceWidth/16, 
        marginLeft: 20,
        marginRight: 5,
    },
});


//this lets the component get imported other places
export default TeacherList;