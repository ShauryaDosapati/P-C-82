import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}></View>
        <View style={styles.authorContainer}></View>
        <View style={styles.authorImageContainer}></View>
        <Text>Post</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});