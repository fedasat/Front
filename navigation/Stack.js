import { createStackNavigator } from '@react-navigation/stack';
//import Signin from '../Screens/Signin/Signin';
import Login from '../Screens/Login/Login';
//import ShowRcipesD from '../Screens/ShowRecipes/ShowRcipesD';
//import ShowRcipesPH from '../Screens/ShowRecipes/ShowRecipesPH';
//import Ricetta from '../Screens/Ricetta/Ricetta';
import AdminHome from '../Screens/AdminHome/AdminHome';
import AdminPH from '../Screens/AdminPH/AdminPH';
import AdminD from '../Screens/AdminD/AdminD';
import SignUp from '../Screens/SignUp/SignUp';
import AddUser from '../Screens/AddUser/AddUser';
import Message from '../Screens/Message/Message';
import Chat from '../Screens/Chat/Chat'

const StackNavigation = createStackNavigator();
//<StackNavigation.Screen name="Login" component={Login} />
//<StackNavigation.Screen name="SignUp" component={SignUp} />
//<StackNavigation.Screen name="AdminHome" component={AdminHome}/>
//<StackNavigation.Screen name="AdminPH" component={AdminPH}/>
//<StackNavigation.Screen name="AdminD" component={AdminD}/>
//<StackNavigation.Screen name="AddUser" component={AddUser}/>
function Stack() {
  return (
      <StackNavigation.Navigator screenOptions={{headerShown:false}}>

                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name='Chat'
                    component={Chat}
                    options={{
                        title: "Chats",
                        headerShown: false,
                    }}
                />

                <Stack.Screen name='Message' component={Message} />

      </StackNavigation.Navigator>
  );
}
export default Stack;