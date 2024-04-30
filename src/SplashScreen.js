import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {navigation.navigate('Services');}, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View>
      <Image style={styles.image} source={require('../res/Image1.jpg')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {width: '100%',height:"100%",resizeMode: 'cover',},
});

export default SplashScreen;
