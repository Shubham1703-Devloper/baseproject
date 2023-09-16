import React, { Component } from 'react';
import { DevSettings, Settings, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
const Settings1 = () =>{
  return (<WebView source={{ uri: 'https://ess.hiddenbrains.net/attedance.html' }} style={{ flex: 1 }} />) ;
}

export default Settings1;