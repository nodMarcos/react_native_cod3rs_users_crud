import { useContext, useState } from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import UsersContext from '../context/UsersContext';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {})
  const {dispatch} = useContext(UsersContext)
  return (
    <View style={styles.form}>
      <Text>Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUser({...user, name: text})}
        value={user.name}
        placeholder="Informe o nome" 
      />
      <Text>E-mail</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUser({...user, email: text})}
        value={user.email}
        placeholder="Informe o e-mail" 
      />
      <Text>URL do Avatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUser({...user, avatarUrl: text})}
        value={user.avatarUrl}
        placeholder="Informe a URL do Avatar" 
      />

      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'UPDATE_USER' : 'CREATE_USER',
            payload: user
          })
          navigation.goBack()
        } 
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    padding: 10
  },
  form: {
    padding: 12
  }
})