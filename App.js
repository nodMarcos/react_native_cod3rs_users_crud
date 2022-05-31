import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './src/views/UserList';
import UserForm from './src/views/UserForm';
import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './src/context/UsersContext';

const Stack = createNativeStackNavigator();

export default props => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName='UserList'>
          <Stack.Screen name="UserList" component={UserList} options={({ navigation }) => {
            return {
              title: 'Lista de Usuários',
              headerRight: () => (
                <Button
                  type="clear"
                  icon={
                    <Icon
                      name="add"
                      size={25}
                      color="white"
                    />
                  }
                  onPress={() => navigation.navigate("UserForm")}
                />
              )
            }
          }} />
          <Stack.Screen name="UserForm" component={UserForm} options={{ title: "Formulário de usuários" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>

  )
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}