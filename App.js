import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList
} from 'react-native';
import LoginScreen from './LoginScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      names: [
        "ama",
        "kofi",
        "sam",
        "bob",
        "james",
        "ama",
        "kofi",
        "sam",
        "bob",
      ],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <LoginScreen/>
       



        {/* <TextInput 
        style={styles.input}
        placeholder="email"
        autoCapitalize
        autoCorrect={false}
        //secureTextEntry={true}
        value={this.state.email}
        onChangeText={(email)=>{
          this.setState({email})
        }}
        />

<TextInput 
        style={styles.input}
        placeholder="password"
        autoCapitalize
        autoCorrect={false}
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(password)=>{
          this.setState({password})
        }}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  input: {
    backgroundColor: "green",
    height: 60,
    marginLeft: 15,
    marginBottom: 5,
  },
  button: {
    color: "white",
    fontSize: 20,
  },
  buttonContainer: {
    marginHorizontal: 20,
    backgroundColor: "blue",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});

export default App;
