import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashBoard from '../DashboardTab/Dashboard';
import DrawerNavigation from '../DrawerNavigation';
import TabNavigator from './TabNavigator';
import Notifications from '../DashboardTab/Notifications';
import Toptabnavigator from '../Toptabnavigator';
import Toptabnavigation from '../DashboardTab/Notifications/Toptabnavigation/Toptabnavigation';
import SwipeGesture from '../DashboardTab/Dashboard/SwipeGesture';
const Stack = createNativeStackNavigator();
const Auth = props => {
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
