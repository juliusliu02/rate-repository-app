import { StyleSheet, SafeAreaView } from 'react-native';
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from 'react-router-native';
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
});

const Main = () => {

  return (
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </SafeAreaView>
  );
};

export default Main;