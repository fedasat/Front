import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
//import Login from '../Screens/Login/Login';
import Stack from './Stack'
//import Signin from '../Screens/SignUp/Signin';
import StackD from './StackD';
import StackPH from './StackPH';

const Tab = createBottomTabNavigator();

function TabNavigate() {
  return (
    <NavigationContainer>
   <Tab.Navigator 
   screenOptions={({route}) => ({
        tabBarIcon: ({focused , color , size}) => {
            let iconName;
            if(route.name === 'Admin'){
                iconName = focused ? 'home' : 'home-outline';
            }else
             if (route.name === 'Dr'){
                iconName = focused ? 'home' : 'home-outline';
            }else
             if (route.name === 'PH'){
                iconName = focused ? 'home' : 'home-outline';
            }
    return <Ionicons name={iconName} size={size} color={color}/>;
   },
   tabBarActiveTincolor : 'tomato',
   tabBarInactiveTincolor : 'gray',
   headerShown : false
    })}    
    >
    <Tab.Screen options={{headerShown:false}} name="Admin" component={Stack} />
    <Tab.Screen options={{headerShown:false}} name="Dr" component={StackD} />
    <Tab.Screen options={{headerShown:false}} name="PH" component={StackPH} />

    </Tab.Navigator>
    </NavigationContainer>
 
  );
}

export default TabNavigate;
/*
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profil from '../views/Profil/Profil';
import Cv from '../views/Cv/Cv';
import Home from '../views/Home/Home';
import Stack from './Stack';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function TabNavigate() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({route}) => ({
        tabBarIcon: ({focused , color , size}) => {
            let iconName;
            if(route.name === 'cv'){
                iconName = focused ? 'newspaper' : 'newspaper-outline';
            }else
             if (route.name === 'home'){
                iconName = focused ? 'home' : 'home-outline';
            }else 
            if (route.name === 'profil'){
                iconName = focused ? 'person' : 'person-outline';
            }
    return <Ionicons name={iconName} size={size} color={color}/>;
   },
   tabBarActiveTincolor : 'tomato',
   tabBarInactiveTincolor : 'gray',
   headerShown : false
    })}    
    >
    <Tab.Screen options={{headerShown:false}} name="cv" component={Stack} />
    <Tab.Screen options={{headerShown:false}} name="profil" component={Profil} />
    <Tab.Screen options={{headerShown:false}} name="home" component={Home} />
    </Tab.Navigator>
    </NavigationContainer>
    );
}

export default TabNavigate;*/