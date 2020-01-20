import React from 'react';
import { withNavigation } from 'react-navigation';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';

import materialTheme from '../constants/Theme';

const { width } = Dimensions.get('screen');

class Home_profile_flex extends React.Component {
  render() {
    const { navigation, Home_profile_flex, horizontal, full, style, priceColor, imageStyle } = this.props;
    const imageStyles = [styles.image, full ? styles.fullImage : styles.horizontalImage, imageStyle];

    return (
      <Block row={horizontal} card flex style={[styles.Home_profile_flex, styles.shadow, style]}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { Home_profile_flex: Home_profile_flex })}>
          <Block flex style={[styles.imageContainer, styles.shadow]}>
            <Image source={{ uri: Home_profile_flex.image }} style={imageStyles} />
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro', { Home_profile_flex: Home_profile_flex })}>
          <Block flex space="between" style={styles.Home_profile_flexDescription}>
            <Text size={14} style={styles.Home_profile_flexTitle}>{Home_profile_flex.title}</Text>
            <Text size={12} muted={!priceColor} color={priceColor}>${Home_profile_flex.price}</Text>
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

export default withNavigation(Home_profile_flex);

const styles = StyleSheet.create({
  Home_profile_flex: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
  },
  Home_profile_flexTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  Home_profile_flexDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  fullImage: {
    height: 215,
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});