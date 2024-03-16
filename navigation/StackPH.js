import { createStackNavigator } from '@react-navigation/stack';
import ShowRcipesPH from '../Screens/ShowRecipes/ShowRecipesPH';
const StackNavigation = createStackNavigator();

function StackPH(){
    return(
        <>
        <StackNavigation.Navigator screenOptions={{headerShown:false}}>
            <StackNavigation.Screen name="ShowRecipesPH" component={ShowRcipesPH}/>
        </StackNavigation.Navigator>
     
        </>
    )
}

export default StackPH;