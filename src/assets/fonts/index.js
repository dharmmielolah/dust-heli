import React from 'react';
import {PixelRatio, Text} from 'react-native';

export const fontNames = {
  BOLD: 'Inter-Bold',
  LIGHT: 'Inter-Light',
  MEDIUM: 'Inter-Medium',
  THIN: 'Inter-Thin',
  REGULAR: 'Inter-Regular',
  SEMIBOLD: 'Inter-SemiBold',
  BLACK: 'Inter-Black',
};

export default ({type = fontNames.REGULAR, textStyles, children}) => {
  return (
    <Text
      style={[
        {
          fontFamily: type,
          fontSize: PixelRatio.getFontScale() * 16,
        },
        textStyles,
      ]}>
      {children}
    </Text>
  );
};
