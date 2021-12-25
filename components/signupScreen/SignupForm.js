import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { firebase, db } from "../../firebase";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const getRandomProfilePicture = async () => {
  const response = await  fetch(`https://randomuser.me/api/`);
  const data = await response.json();
  return data.results[0].picture.large;

const SignupForm = ({ navigation }) => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    username: Yup.string().required.min(
      6,
      "Username must be at least 6 characters"
    ),
    password: Yup.string().required.min(
      6,
      "Password must be at least 6 characters"
    ),
  });

  const onSignup = async (email, username, password) => {
    try {
      const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log("Firebase created successfully", email, username, password);
      db.collection("users").add({
        // adds new user name into users collection on firebase
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture: await getRandomProfilePicture(),
      })
    } catch (error) {
      Alert.alert("My Lord ...", error.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          onSignup(values.email, values.username, values.password);
        }}
        validationSchema={SignupFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.username.length < 1 ||
                    Validator.validate(values.username)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="User Name"
                autoCapitalize="none"
                keyboardType="username"
                textContentType="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length > 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>

            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6bb0f5" }}>Forgot password?</Text>
            </View>

            <Pressable
              titleSize={20}
              //   style={styles.button(isValid)}
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.loginContainer}>
              <Text style={{ color: "#6bb0f5" }}>
                {" "}
                Already have an account?{" "}
              </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: "#6bb0f5" }}> Log In</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
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
    // backgroundColor: isValid ? "#0096F6" : "#9aCaf7",
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
  loginContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default SignupForm;
