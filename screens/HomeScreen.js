import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
// import { SafeAreaView, ScrollView, StyleSheet } from "react-native-web";
import BottomTabs, { bottomTabIcons } from "../components/Home/BottomTabs";
import Header from "../components/Home/Header";
import Post from "../components/Home/Post";
import Stories from "../components/Home/Stories";
import { POSTS } from "../data/posts";
import { db, collectionGroup, onSnapshot, docs, doc } from "../../firebase";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        // setPosts(snapshot).docs.map((doc) => doc.data());
        setPosts(snapshot).docs.map((doc => ({id: post.id}, ...post.data());
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          // need to change to posts from capitals as it is from firebase now
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
