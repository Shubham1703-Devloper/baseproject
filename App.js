/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import "react-native-gesture-handler";
import axios from "axios";
import Auth from "./src/Screens/Auth";
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './src/Screens/DashboardTab/Notifications/Toptabnavigation/Screens/MusicPlayer/trackPlayerServices';
import RNFetchBlob from 'react-native-blob-util';

const App = () => {
  TrackPlayer.registerPlaybackService(() => playbackService);
  const axios = require('axios');

  return (
      <Auth/>
  );
};

const styles = StyleSheet.create({});

export default App;
