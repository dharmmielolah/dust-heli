import React from 'react';
import {PixelRatio, Text} from 'react-native';
import Colors from '../colors';

export const fontNames = {
  BOLD: 'Inter-Bold',
  LIGHT: 'Inter-Light',
  MEDIUM: 'Inter-Medium',
  THIN: 'Inter-Thin',
  REGULAR: 'Inter-Regular',
  SEMIBOLD: 'Inter-SemiBold',
  BLACK: 'Inter-Black',
};

export default ({
  type = fontNames.REGULAR,
  textStyles,
  children,
  numberOfLines,
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          fontFamily: type,
          color: Colors.black,
          fontSize: PixelRatio.getFontScale() * 16,
        },
        textStyles,
      ]}>
      {children}
    </Text>
  );
};
