import React, {Children, useEffect, useState} from 'react';
import {Pressable, StatusBar, TouchableOpacity, View} from 'react-native';
import {Button, Menu, Modal, Portal, Provider, Text} from 'react-native-paper';
import {ToolTip as ToolTipView} from 'react-native-walkthrough-tooltip';
import tooltip2 from '../../../../../assets/SVG/Sonstige/tooltip2.svg'
import SvgIcon from '@core/inputs/SvgIcon';
const ToolTip = ({
  onPress,
  disableShadow,
  horizontalAdjustment,
  useReactNativeModal,
  toolTipVisible,
  backgroundColor,
  content,
  isVisible,
  arrowSize,
  placement,
  onClose,
  showChildInTooltip,
  containerStyle,
  backgroundStyle,
  tooltipStyle,
  arrowStyle,
  Children,
  ...rest

}) => {

  // const [showLoader, setShowLoader] = useState(visible);

  // useEffect(() => {
  //   setShowLoader(visible);
  // }, [visible]);

  // const containerStyle = {
  //   backgroundColor: 'white',
  //   padding: 20,
  //   marginHorizontal: 40,
  // };

  return (
    // <Menu
    //   anchor={anchor}
    //   visible={showLoader}
    //   onDismiss={onDismiss}
    //   contentStyle={[styles.menuView, containerStyle]}
    // >
    //   <View style={styles.InnerMainContainer}>
    //     <View style={[styles.triangle]} />
    //     <View style={styles.innerSecondryView}>
    //       <Text style={styles.menuText}>{text}</Text>
    //     </View>
    //   </View>
    // </Menu>

    <View>
      <ToolTipView
        disableShadow={disableShadow}
        horizontalAdjustment={horizontalAdjustment}
        useReactNativeModal={useReactNativeModal}
        tooltipStyle={[tooltipStyle]}
        contentStyle={[styles.menuView, containerStyle]}
        backgroundStyle={backgroundStyle}
        arrowStyle={arrowStyle}
        arrowSize={arrowSize}
        isVisible={isVisible}
        backgroundColor={backgroundColor}
        showChildInTooltip={showChildInTooltip}
        content={content}
        // topAdjustment={Platform.OS === 'android' ? -StatusBar.currentHeight : 0}
        placement={placement}
        onClose={onClose}>
        <SvgIcon
          xml={tooltip2}
          height={20}
          width={20}
          onPress={onPress}
        />
      </ToolTipView>
    </View>
  );
};

export default ToolTip;
