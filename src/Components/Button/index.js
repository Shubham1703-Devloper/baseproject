import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

import styles from './styles';

const CustomButton = ({
    mode,
    theme,
    onPress,
    fontWeight,
    titleStyle,
    fontsize,
    whiteButton,
    activeOpacity,
    buttonStyle,
    greyButton,
    ...rest
}) => {
    const buttonStyles = whiteButton ? styles.defaultWhiteButtonStyle : greyButton ? styles.defaultGreyButtonStyle : styles.defaultButtonStyle
    const textStyles = greyButton ? [fontsize ? styles.defaultBlackTitleStyle1 : styles.defaultBlackTitleStyle] : styles.defaultTitleStyle
    return (
        <PaperButton
            uppercase={false}
            labelStyle={[
                textStyles,
                titleStyle,
            ]}
            activeOpacity={0.2}
            style={[buttonStyles, buttonStyle]}
            mode={mode}
            onPress={onPress}
            {...rest}
        />
    );
};



export default CustomButton