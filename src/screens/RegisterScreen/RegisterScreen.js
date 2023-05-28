import React from "react";
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
import { postData } from "../../services/ApiService";

import Btn, { GoogleBtn } from "../../components/Button";
import Field from "../../components/TextInput";
import { SignUpValidationSchema } from "../../utils/FormValidation";

const { width, height } = Dimensions.get("window");

const RegisterScreen = (props) => {
  const initialValues = {
    username: "",
    password: "",
    phoneNumber: "",
  };

  const handleSubmit = async (values) => {
    // postData(values);
    // console.log(values); // --> getting values on submit
    // props.navigation.navigate("AddContactsScreen");
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
            <Text style={styles.subtitle}>Create a new account</Text>
            <Text style={styles.description}>Join with other riders</Text>
            <Formik
              initialValues={initialValues}
              validationSchema={SignUpValidationSchema}
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
                  <Field
                    onChangeText={handleChange("phoneNumber")}
                    onBlur={handleBlur("phoneNumber")}
                    value={values.phoneNumber}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                  />
                  {errors.phoneNumber && (
                    <Text style={styles.errorText}>{errors.phoneNumber}</Text>
                  )}
                  <Text style={styles.space}>{""}</Text>
                  <Btn title="Submit" btnLabel="Sign Up" Press={handleSubmit} />
                </>
              )}
            </Formik>

            <GoogleBtn
              btnLabel="Sign Up with "
              Press={() => alert("Logged In as Google")}
            />
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

export default RegisterScreen;
