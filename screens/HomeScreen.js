import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
// import { SafeAreaView, ScrollView, StyleSheet } from "react-native-web";
import BottomTabs, { bottomTabIcons } from "../components/Home/BottomTabs";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import Stories from "../components/Home/Stories";
import { POSTS } from "../data/posts";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
