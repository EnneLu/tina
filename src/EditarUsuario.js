import React from 'react';
import { StyleSheet, View, TextInput, Image,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});

export default function EditarUsuario() {
  return (
    <View>
        <TextInput placeholder="digite seu choro"></TextInput>
    </View>
  );
}