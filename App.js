import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Pages from './src/index.js';

export default function App() {
  return (
    <Router>
        <Scene key="root">
          <Scene initial key="Login" component={Pages.Login} title="Login" hideNavBar/>
          <Scene key="CadastroUsuario" component={Pages.CadastroUsuario} title="Cadastro Usuário" hideNavBar/>
          <Scene key="EditarUsuario" component={Pages.EditarUsuario} title="Editar Usuário" hideNavBar/>          
        </Scene>
      </Router>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});