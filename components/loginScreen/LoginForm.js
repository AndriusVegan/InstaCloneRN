import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const LoginForm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Phone Number, username or email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
        />
      </View>
      <View style={styles.inputField}>
        <TextInput
          placeholderTextColor="#444"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
        />
      </View>

      <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
        <Text style={{ color: "#6bb0f5" }}>Forgot password?</Text>
      </View>

      <Pressable titleSize={20} style={styles.button}>
        <Text
          style={styles.buttonText}
          onPress={() => console.log("you clicked me")}
        >
          Login In
        </Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text style={{ color: "#6bb0f5" }}> Don't have an acct? </Text>
        <TouchableOpacity>
          <Text style={{ color: "#6bb0f5" }}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 6,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#0096F6",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default LoginForm;
