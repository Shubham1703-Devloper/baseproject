import {PropTypes} from 'prop-types';
import React, {PureComponent, useState} from 'react';
import {Image} from 'react-native';
import {View, Text, Dimensions, TouchableHighlight} from 'react-native';
// import {Button} from 'react-native';
import Toptabnavigator from '../../Toptabnavigator';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import styles from './styles';
import {Rating, AirbnbRating} from 'react-native-ratings';
import Tooltip from 'react-native-walkthrough-tooltip';
import CustomButton from '../../../Components/Button';
import Button from '../../../Components/Button';


const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const DashBoard = props => {
  const [toolTipVisible, settoolTipVisible] = useState(false);
  return (
    <View style={{flex: 1}}>
      <Button  greyButton onPress={() => props.navigation.openDrawer()} title="Press" />
      <Button
       greyButton
        onPress={() => props.navigation.navigate('SwipeGesture')}
        title="SwipeGesture"
      />
      <View style={{marginTop: 40}}>
        <Rating
          type="star"
          ratingCount={5}
          imageSize={60}
          showRating={true}
          minValue={0}
          maxValue={5}
          startingValue={0}
          fractions={1.5}
          jumpValue={0.5}
          onFinishRating={rating => console.log(rating)}
        />
      </View>


      <View style={{marginHorizontal: 40,alignSelf:'center'}}>
        <Tooltip
        //  tooltipStyle={{}}
         displayInsets={{left: 24}}
         useReactNativeModal={true}
         tooltipStyle={{backgroundColor:'white',borderRadius:5,width:100, shadowProp: {
        //   shadowColor: '#171717',
        //   // shadowOffset: {width: 2, height: 4},
        //   shadowOpacity: 0.2,
        //   shadowRadius: 3,
        // },}
         }}}
         contentStyle={{backgroundColor:'#171717' , shadowProp: {
          shadowColor: '#171717',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
        },}}
          isVisible={toolTipVisible}
          content={<View><Text style={{color:'white'}}>Check this out!</Text></View>}
          placement='bottom'
          onClose={() => settoolTipVisible(false)}>
          <CustomButton
          greyButton
          title='Open Tooltip'
          titleStyle={styles.textStyle}
            onPress={() => settoolTipVisible(true)}>
            Press me
          </CustomButton>
        </Tooltip>
        
      </View>

      <View style={{marginHorizontal: 40,alignSelf:'center'}}>

    {/* <QRCode
      value="https://images.freeimages.com/images/large-previews/3b2/prague-conference-center-1056491.jpg"
    />  */}
  
      </View>
    </View>
  );
};

export default DashBoard;
