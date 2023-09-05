
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    Platform,
    View,
    TouchableOpacity,
    Text,
    Pressable,
    Image,
    StyleSheet,
    Alert,
   
  } from 'react-native';
import Home from './Screens/Home';
import Settings1 from './Screens/Settings1';
import { Swipeable } from 'react-native-gesture-handler';
import Location from './Screens/Location';
import MusicPlayer from './Screens/MusicPlayer';

const Tab = createMaterialTopTabNavigator();

const Toptabnavigation=()=> {
  return (
    <Tab.Navigator swipeEnabled={false}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings1" component={Settings1}/>
       <Tab.Screen name="MusicPlayer" component={MusicPlayer}/>
        <Tab.Screen name="Loaction" component={Location}/>
    </Tab.Navigator>
  );
}
export default Toptabnavigation;