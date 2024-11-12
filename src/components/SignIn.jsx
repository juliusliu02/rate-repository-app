import { TextInput, View, StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import { useFormik } from "formik";
import Text from './Text'
import * as yup from 'yup';
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
})

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    borderColor: theme.colors.textSecondary,
  },
  button: {
    backgroundColor: theme.colors.primary,
    margin: 12,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 8
  },
  text: {
    color: 'white'
  },
  error: {
    color: theme.colors.red,
    margin: 15
  },
  errorBox: {borderColor: theme.colors.red}
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const {username, password} = values;

    try {
      const data = await signIn({username, password});
      navigate('/')
      formik.resetForm()
    } catch (e) {
      console.log(e.message);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })

  return <View>
    <TextInput
      style={[styles.input, this.error && styles.errorBox]}
      placeholder='Username'
      value={formik.values.username}
      onChangeText={formik.handleChange('username')}
    />
    {formik.touched.username && formik.errors.username && (
      <Text style={styles.error}>{formik.errors.username}</Text>
    )}
    <TextInput
      style={[styles.input, this.error && styles.errorBox]}
      placeholder='Password'
      secureTextEntry
      value={formik.values.password}
      onChangeText={formik.handleChange('password')}
    />
    {formik.touched.password && formik.errors.password && (
      <Text style={styles.error}>{formik.errors.password}</Text>
    )}
    <Pressable style={styles.button} onPress={formik.handleSubmit}>
      <Text style={styles.text}>Sign In</Text>
    </Pressable>
  </View>;
};

export default SignIn;