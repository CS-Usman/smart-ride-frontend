import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";

import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { Formik } from "formik";

import Btn, { GoogleBtn } from "../../components/Button";
import Field from "../../components/TextInput";

import LoginValidationSchema from "../../utils/FormValidation";

const { width, height } = Dimensions.get("window");

const LoginScreen = (props) => {
  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values) => {
    props.navigation.navigate("HomeScreen");
    console.log(values);
  };

  return (
    <KeyboardAvoidingView>
      <ImageBackground
        source={require("../../../assets/images/back2.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.loginContainer}>
            <Text style={styles.subtitle}>Welcome Back</Text>
            <Text style={styles.description}>Login to your account</Text>
            <Formik
              initialValues={initialValues}
              validationSchema={LoginValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                  <Field
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                    placeholder="Username"
                  />
                  {errors.username && (
                    <Text style={styles.errorText}>{errors.username}</Text>
                  )}

                  <Field
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholder="Password"
                    secureTextEntry
                  />
                  {errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                  <TouchableOpacity style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>
                      Forgot Password ?
                    </Text>
                  </TouchableOpacity>
                  <Btn title="Submit" btnLabel="Login" Press={handleSubmit} />
                </>
              )}
            </Formik>
            <GoogleBtn
              btnLabel="Login with "
              Press={() => alert("Logged In as Google")}
            />
            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>Don't have an account ? </Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("RegisterScreen")}
              >
                <Text style={[styles.signupText, styles.signupLink]}>
                  Signup
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: width,
  },
  title: {
    color: "white",
    fontSize: responsiveFontSize(5.5), // Responsive font size
    fontWeight: "bold",
    marginVertical: responsiveHeight(11), // Responsive margin
  },
  loginContainer: {
    backgroundColor: "white",
    width: responsiveWidth(100),
    borderTopLeftRadius: 0.28 * width,
    paddingTop: responsiveHeight(7),
    alignItems: "center",
  },
  subtitle: {
    fontSize: responsiveFontSize(4.5), // Responsive font size
    color: "#4b3ca7",
    fontWeight: "bold",
  },
  description: {
    color: "grey",
    fontSize: responsiveFontSize(2), // Responsive font size
    fontWeight: "bold",
    marginBottom: responsiveHeight(5), // Responsive margin
  },
  errorText: {
    color: "red",
    fontStyle: "italic",
  },
  forgotPassword: {
    alignItems: "flex-end",
    width: responsiveWidth(70),
    paddingRight: responsiveWidth(1.2), // Responsive padding
    marginBottom: responsiveHeight(4), // Responsive margin
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#4b3ca7",
    fontWeight: "bold",
    fontSize: responsiveFontSize(2), // Responsive font size
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: responsiveHeight(2), // Responsive margin
  },
  signupText: {
    fontSize: responsiveFontSize(2), // Responsive font size
    fontWeight: "bold",
  },
  signupLink: {
    color: "#4b3ca7",
  },
});

export default LoginScreen;
