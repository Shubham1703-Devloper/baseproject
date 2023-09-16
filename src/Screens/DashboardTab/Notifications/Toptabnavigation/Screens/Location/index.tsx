import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  PermissionsAndroid,
  View,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
const Location = () => {
  const [mlat,setmlat] = useState<number>(0)
  const [mlong,setmlong] = useState<number>(0)
  useEffect(() => {
    requestCurrentLocationPermission();
  }, []);

  const requestCurrentLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'BaseProject App Current Location Permission',
          message:
            'Access Your Current Location' +
            'so you can take awesome Location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the Current Location');
      } else {
        console.log('Current Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const Getlocation = () => {
   
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          setmlat(position.coords.latitude)
          setmlong(position.coords.longitude)
        },
        error => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    
  };
   

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: '100%',
          height: '100%',
          ...StyleSheet.absoluteFillObject,
        }}
        initialRegion={{
          latitude: 20.5937,
          longitude: 78.9629,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
        onRegionChange={x => {
           console.log(x);
        }}
      >   
      <Marker coordinate={{latitude:mlat,longitude:mlong}}/>
      </MapView>


      <TouchableOpacity
      onPress={Getlocation}
        style={{
          width: '60%',
          height: 60,
          position: 'absolute',
          justifyContent: 'center',
          backgroundColor: 'grey',
          bottom:20,
        }}><Text style={{textAlign:'center',fontSize:20}}>Get Current Location</Text></TouchableOpacity>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
});
export default Location;