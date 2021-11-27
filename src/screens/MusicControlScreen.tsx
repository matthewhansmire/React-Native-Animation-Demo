import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  Image,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';

import Row from '../components/Atoms/Row';
import { Theme } from '../constants/Theme';

export default class MusicControlScreen extends React.Component {
  animatedScaleValue: Animated.Value | Animated.ValueXY;
  animatedTranslateYValue: Animated.Value | Animated.ValueXY;
  animatedTranslateXValue: Animated.Value | Animated.ValueXY;
  animatedBackgroundOpacityValue: Animated.Value | Animated.ValueXY;
  animatedContainerOpacityValue: Animated.Value | Animated.ValueXY;

  constructor(props: any) {
    super(props);    
    this.animatedScaleValue = new Animated.Value(
      Theme.animations.screens.musicControl.initial.scaleValue,
    );
    this.animatedTranslateYValue = new Animated.Value(
      Theme.animations.screens.musicControl.initial.translateYValue,
    );
    this.animatedTranslateXValue = new Animated.Value(
      Theme.animations.screens.musicControl.initial.translateXValue,
    );
    this.animatedBackgroundOpacityValue = new Animated.Value(
      Theme.animations.screens.musicControl.initial.backgroundOpacityValue,
    );
    this.animatedContainerOpacityValue = new Animated.Value(
      Theme.animations.screens.musicControl.initial.containerOpacityValue,
    );
  }

  onDismiss = () => {    
    Animated.parallel([
      Animated.timing(this.animatedContainerOpacityValue, {
        toValue:
          Theme.animations.screens.musicControl.onUnmount.opacity.container
            .toValue,
        duration:
          Theme.animations.screens.musicControl.onUnmount.opacity.container
            .duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateYValue, {
        toValue:
          Theme.animations.screens.musicControl.onUnmount.translate.Y.toValue,
        duration:
          Theme.animations.screens.musicControl.onUnmount.translate.Y.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateXValue, {
        toValue:
          Theme.animations.screens.musicControl.onUnmount.translate.X.toValue,
        duration:
          Theme.animations.screens.musicControl.onUnmount.translate.X.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedScaleValue, {
        toValue: Theme.animations.screens.musicControl.onUnmount.scale.toValue,
        duration:
          Theme.animations.screens.musicControl.onUnmount.scale.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedBackgroundOpacityValue, {
        toValue:
          Theme.animations.screens.musicControl.onUnmount.opacity.background
            .toValue,
        duration:
          Theme.animations.screens.musicControl.onUnmount.opacity.background
            .duration,
        useNativeDriver: true,
      }),
    ]).start(() => {      
      // Navigation.dismissOverlay();
    });
  };

  componentDidMount() {
    console.log('props', this.props)
    Animated.parallel([
      Animated.timing(this.animatedContainerOpacityValue, {
        toValue:
          Theme.animations.screens.musicControl.onMount.opacity.container
            .toValue,
        duration:
          Theme.animations.screens.musicControl.onMount.opacity.container
            .duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateYValue, {
        toValue:
          Theme.animations.screens.musicControl.onMount.translate.Y.toValue,
        duration:
          Theme.animations.screens.musicControl.onMount.translate.Y.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateXValue, {
        toValue:
          Theme.animations.screens.musicControl.onMount.translate.X.toValue,
        duration:
          Theme.animations.screens.musicControl.onMount.translate.X.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedScaleValue, {
        toValue: Theme.animations.screens.musicControl.onMount.scale.toValue,
        duration: Theme.animations.screens.musicControl.onMount.scale.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedBackgroundOpacityValue, {
        toValue:
          Theme.animations.screens.musicControl.onMount.opacity.background
            .toValue,
        duration:
          Theme.animations.screens.musicControl.onMount.opacity.background
            .duration,
        useNativeDriver: true,
      }),
    ]).start();
  }

  render() {
    const animatedStyle = {
      transform: [
        {
          translateY: this.animatedTranslateYValue,
        },
        {
          translateX: this.animatedTranslateXValue,
        },
        {
          scale: this.animatedScaleValue,
        },
      ],
      opacity: this.animatedContainerOpacityValue,
    };
    const backgroundAnimation = {
      opacity: this.animatedBackgroundOpacityValue,
    };

    return (
      <TouchableWithoutFeedback onPress={this.onDismiss}>
        <View style={styles.wrapper}>
          <Animated.Image
            style={[styles.backgroundImage, backgroundAnimation]}
            blurRadius={10}
            source={Theme.images.backgroundImage}
          />
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.container, animatedStyle]}>
              <Row>
                <View style={styles.songImageWrapper}>
                  <Image
                    source={Theme.images.iTunesIcon}
                    style={styles.songImage}
                  />
                </View>
                <View style={styles.songTitleBar}>
                  <Text style={styles.songTitleFirstLine}>iPhone</Text>
                  <Text style={styles.songTitleSecondLine}>Музыка</Text>
                </View>
                <Icon
                  style={styles.airDropIcon}
                  name={'creative-commons-share'}
                />
              </Row>
              <Row style={styles.horizontalLineWrapper}>
                <View style={styles.horizontalLine} />
              </Row>
              <Row style={styles.horizontalBoldLineWrapper}>
                <View style={styles.horizontalBoldLine} />
              </Row>
              <Row style={styles.controls}>
                <Icon style={[styles.icon, styles.wards]} name={'backward'} />
                <Icon style={[styles.icon, styles.play]} name={'play'} />
                <Icon style={[styles.icon, styles.wards]} name={'forward'} />
              </Row>
              <Row>
                <Icon
                  style={[styles.icon, styles.wards]}
                  name={'volume-down'}
                />
                <View style={styles.volumeBarLine} />
                <Icon style={[styles.icon, styles.wards]} name={'volume-up'} />
              </Row>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: Theme.dimensions.screenWidth,
    height: Theme.dimensions.screenHeight,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: Theme.indents.xxl,
    marginHorizontal: Theme.indents.lg,
    padding: Theme.indents.xl,
    backgroundColor: Theme.colors.sections.default.background,
    borderRadius: Theme.borders.radius * 2,
  },
  controls: {
    justifyContent: 'space-around',
    width: '100%',
    aspectRatio: 1.5,
  },
  icon: {
    margin: Theme.indents.md,
  },
  play: {
    color: Theme.colors.sections.musicControl.icons.play,
    fontSize: Theme.sizes.icon.musicControlSection.play,
  },
  wards: {
    color: Theme.colors.sections.musicControl.icons.wards,
    fontSize: Theme.sizes.icon.musicControlSection.wards,
  },
  airDropIcon: {
    color: Theme.colors.sections.musicControl.icons.wards,
    fontSize: Theme.sizes.icon.musicControlSection.wards * 1.5,
    margin: 0,
  },
  volumeBarLine: {
    height: 4,
    flex: 1,
    borderRadius: 4,
    backgroundColor: Theme.colors.semiWhite,
  },
  songImage: {
    width: 50,
    height: 50,
  },
  songImageWrapper: {
    width: 75,
    height: 75,
    borderRadius: Theme.borders.radius / 2,
    backgroundColor: Theme.colors.screens.musicControl.songImageWrapper,
    alignItems: 'center',
    justifyContent: 'center',
  },
  songTitleBar: {
    flex: 1,
    padding: Theme.indents.md,
  },
  songTitleFirstLine: {
    color: Theme.colors.semiWhite,
    marginBottom: 2,
    fontSize: Theme.sizes.font.songTitle.firstLine,
  },
  songTitleSecondLine: {
    color: 'white',
    fontSize: Theme.sizes.font.songTitle.secondLine,
  },
  horizontalLine: {
    height: 1,
    flex: 1,
    backgroundColor: Theme.colors.semiWhite,
  },
  horizontalLineWrapper: {
    marginHorizontal: -Theme.indents.xl,
    marginVertical: Theme.indents.lg,
  },
  horizontalBoldLine: {
    height: 3,
    flex: 1,
    borderRadius: 3,
    backgroundColor: Theme.colors.semiWhite,
  },
  horizontalBoldLineWrapper: {
    marginHorizontal: Theme.indents.lg,
  },
});
