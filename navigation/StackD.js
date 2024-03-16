import { createStackNavigator } from '@react-navigation/stack';
import ShowRcipesD from '../Screens/ShowRecipes/ShowRcipesD';
import Ricetta from '../Screens/Ricetta/Ricetta';
const StackNavigation = createStackNavigator();

function StackD (){
    return(
        <>
<StackNavigation.Navigator screenOptions={{headerShown:false}}>
    <StackNavigation.Screen name="ShowRcipesD" component={ShowRcipesD}/>
    <StackNavigation.Screen name="Ricetta" component={Ricetta}/>
</StackNavigation.Navigator>
        </>
    )
}

export default StackD;