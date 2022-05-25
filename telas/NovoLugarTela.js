import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Cores from '../constants/Cores'

const NovoLugarTela = () => {
  const [novoLugar, setNovoLugar] = useState('');

  const adicionarLugar = () => {
    console.log("Adicionando lugar: " + novoLugar);
  }

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.titulo}>Novo lugar</Text>
        <TextInput 
          style={styles.textInput}
          value={novoLugar}
          onChangeText={setNovoLugar}
        />
        <Button 
          title='Salvar lugar'
          color={Cores.primary}
          onPress={adicionarLugar}
        />
      </View>
    </ScrollView>
  )
}

export default NovoLugarTela

const styles = StyleSheet.create({
  form: {
    margin: 40
  },
  titulo: {
    fontSize: 18,
    marginBottom: 12
  },
  textInput: {
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    marginBottom: 4,
    padding: 8,
  }
})