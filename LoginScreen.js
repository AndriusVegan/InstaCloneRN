import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import LoginForm from "./components/loginScreen/LoginForm";

const INSTAGRAM_LOGO =
  "Https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png";
// https://cdn2.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/instagram-512.png
const LoginScreen = () => (
  <View style={styles.container}>
    <View styles={styles.logoContainer}>
      <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
    <LoginForm />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default LoginScreen;
