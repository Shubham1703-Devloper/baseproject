import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigation from '../DrawerNavigation';
import Toptabnavigation from '../DashboardTab/Notifications/Toptabnavigation/Toptabnavigation';
import SwipeGesture from '../DashboardTab/Dashboard/SwipeGesture';
const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DrawerNavigation'>
    
         <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        /> 
      
           <Stack.Screen
          name="Toptabnavigation"
          component={Toptabnavigation}
          options={{headerShown: false}}
        /> 
      <Stack.Screen
          name="SwipeGesture"
          component={SwipeGesture}
          options={{headerShown: true}}
        /> 

       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Auth;
