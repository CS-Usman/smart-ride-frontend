import React, { useState } from "react";
import {
  View,
  Text,
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

import Btn from "../../components/Button";
import Field from "../../components/TextInput";
import { PasswordValidationSchema } from "../../utils/FormValidation";

const { width, height } = Dimensions.get("window");

const PasswordScreen = (props) => {
  const { userData } = props.route.params;
  const [passwordError, setPasswordError] = useState(false);

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values) => {
    console.log("BtnClicked"); // --> getting values on submit
    if (values.password !== values.confirmPassword) {
      setPasswordError(true);
    }
    const data = { ...userData, ...values };
    delete data.confirmPassword;
    console.log(data); // --> getting values on submit
    props.navigation.navigate("PermissionsScreen", { userData: data });
  };
  return (
    <KeyboardAvoidingView>
      <ImageBackground
        source={require("../../../assets/images/back2.png")}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Sign Up</Text>
          <View style={styles.registerContainer}>
            <Text style={styles.subtitle}>Set Up Password</Text>
            <Text style={styles.description}>Join with other riders</Text>
            <Formik
              initialValues={initialValues}
              validationSchema={PasswordValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
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
                  <Field
                    onChangeText={handleChange("confirmPassword")}
                    onBlur={handleBlur("confirmPassword")}
                    value={values.confirmPassword}
                    placeholder="Rewrite Password"
                    secureTextEntry
                  />
                  {passwordError && (
                    <Text style={styles.errorText}>Password did not match</Text>
                  )}
                  <Text style={styles.space}>{""}</Text>
                  <Btn
                    title="Submit"
                    btnLabel="Next  ->"
                    Press={handleSubmit}
                  />
                </>
              )}
            </Formik>
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
    fontSize: responsiveFontSize(4.5),
    fontWeight: "bold",
    marginVertical: responsiveHeight(11),
  },
  registerContainer: {
    backgroundColor: "white",
    width: responsiveWidth(100),
    borderTopLeftRadius: 0.28 * width,
    paddingTop: responsiveHeight(7),
    alignItems: "center",
  },
  subtitle: {
    fontSize: responsiveFontSize(3.5),
    color: "#4b3ca7",
    fontWeight: "bold",
  },
  description: {
    color: "grey",
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
    marginBottom: responsiveHeight(5),
  },
  space: {
    marginVertical: responsiveHeight(0.5),
  },
  errorText: {
    color: "red",
    fontStyle: "italic",
  },
});

export default PasswordScreen;
