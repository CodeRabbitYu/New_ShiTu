/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import * as Animatable from "react-native-animatable";

class CustomButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          height: 44,
          width: 80,
          backgroundColor: "blue",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>点我寻找</Text>
      </TouchableOpacity>
    );
  }
}

const MyCustomComponent = Animatable.createAnimatableComponent(CustomButton);
const AnimatableImageBackground = Animatable.createAnimatableComponent(
  ImageBackground
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AnimatableImageBackground
        style={styles.container}
        blurRadius={5}
        animation="fadeIn"
        useNativeDriver={true}
        source={require("./timg.jpeg")}
      >
        <MyCustomComponent animation="bounceInLeft" useNativeDriver={true} />
      </AnimatableImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
