import React, {useState, useEffect} from 'react';
import {
  PermissionsAndroid,
  Image,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  Text,
  FlatList,
  openPicker,
  Alert,
} from 'react-native';
import {Button} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import CustomButton from '../Components/Button';
import ShareComp from '../Components/ShareComp';
var temp = 0;
export default function Imagepicker() {
  const [image, setImage] = useState('');
  const [image1, setImage1] = useState('');
  const [data, setdata] = useState([]);

  var DATA = [];

  const pickImage = async () => {
    // const result = await launchImageLibrary({
    //   mediaTypes: 'photo',
    //   allowsEditing: true,
    //   multiple: true,
    //   aspect: [4, 3],
    // });
    // console.log(result);

    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
      minFiles: 5,
    }).then(images => {
      //console.log(images);
      //DATA.push(images)
      if (images.length < 6) {
        setdata(images);
        temp = 1;
        console.log(data);
      } else {
        Alert.alert('You have Exceeded Upload Limit');
      }
    });
  };

  const camera = async () => {
    const result = await launchCamera({cameraType: 'back', quality: 1});
    console.log(result);

    if (!result.canceled) {
      setdata(result.assets);
      temp = 0;
      console.log(data);
    }
  };

  const requestCameraPermission1 = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        pickImage();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        camera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.ImagePicker}>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => {
            requestCameraPermission();
            temp = 0;
          }}>
          Camera
        </Button>

        <Button
          icon="image-filter-vintage"
          mode="contained"
          onPress={() => {
            requestCameraPermission1();
            temp = 1;
          }}>
          Pick an image
        </Button>
      </View>

      <View>
        <View style={styles.FlatListView}>
          <FlatList
            style={styles.flatlist}
            data={data}
            renderItem={({item}) => (
              <Item
                item={item}
                // onPress={() =>
                //   props.navigation.navigate('Calling...', {
                //     item: item,
                //   })
                // }
              />
            )}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={item => item.id}
            horizontal={false}
            // set number of columns

            // ListHeaderComponent={Header}
            // ListFooterComponent={Footer}
            //stickyHeaderIndices={[0]}
          />
        </View>
      </View>
    </View>
  );
}
const ItemSeparator = () => {
  <View style={styles.ItemSeparatorView}></View>;
};
const Item = ({item}) => (
  <View style={styles.imageView}>
    {temp == 0 ? (
      <View>
        <Image
          source={{uri: item.uri}}
          resizeMode={'contain'}
          style={styles.btn}
        />

        <ShareComp item={item} />
      </View>
    ) : (
      <View>
        <Image
          source={{uri: item.path}}
          resizeMode={'contain'}
          style={styles.btn}
        />
        <ShareComp item={item} path/>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {},
  btn: {
    width: '100%',
    height: 400,
  },
  imageView: {
    marginBottom: 20,
    width: '100%',
    height: 500,
    backgroundColor: '#adadaa',
  },
  FlatListView: {
    backgroundColor: '#4a4a4a',
  },
  ItemSeparatorView: {
    height: 20,
    backgroundColor: 'red',
  },

  ImagePicker: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#c7c5c5',
  },
});
