import { useContext } from 'react';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { Avatar, Button, Icon, ListItem } from 'react-native-elements';
import UserContext from '../context/UsersContext';
import users from '../data/users'

export default props => {

  const {state, dispatch} = useContext(UserContext)

  function confirmUserDeletion(user) {
    Alert.alert('Excluir Usuário',`Você tem certeza que quer deletar o usuário ${user.name}?`, [ {
      text: 'Sim',
      onPress: () => dispatch({type: 'DELETE_USER', payload: user})
    }, 
    {
      text: 'Não'
    }])
  }

  function getUserItem({ item: user }) {

    return (
      <ListItem.Swipeable
        key={user.id}
        bottomDivider
        rightStyle={style.buttonContainer}
        onPress={() => props.navigation.navigate('UserForm', user)}
      >
        <Avatar rounded source={{ uri: user.avatarUrl }} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>
        <Button 
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button 
          onPress={() => confirmUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </ListItem.Swipeable>
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />
    </View>
  )
}

const style = StyleSheet.create({
  buttonContainer: {
      flexDirection: 'row'
  },
})