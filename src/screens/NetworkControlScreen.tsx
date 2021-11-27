import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import ButtonWithCaption from '../components/Atoms/Buttons/ButtonWithCaption';
import Row from '../components/Atoms/Row';
import { Theme } from '../constants/Theme';

export default class NetworkControlScreen extends React.Component {
  animatedScaleValue: Animated.Value | Animated.ValueXY;
  animatedTranslateYValue: Animated.Value | Animated.ValueXY;
  animatedTranslateXValue: Animated.Value | Animated.ValueXY;
  animatedBackgroundOpacityValue: Animated.Value | Animated.ValueXY;
  animatedContainerOpacityValue: Animated.Value | Animated.ValueXY;

  constructor(props: any) {
    super(props);
    this.animatedScaleValue = new Animated.Value(
      Theme.animations.screens.networkControl.initial.scaleValue,
    );
    this.animatedTranslateYValue = new Animated.Value(
      Theme.animations.screens.networkControl.initial.translateYValue,
    );
    this.animatedTranslateXValue = new Animated.Value(
      Theme.animations.screens.networkControl.initial.translateXValue,
    );
    this.animatedBackgroundOpacityValue = new Animated.Value(
      Theme.animations.screens.networkControl.initial.backgroundOpacityValue,
    );
    this.animatedContainerOpacityValue = new Animated.Value(
      Theme.animations.screens.networkControl.initial.containerOpacityValue,
    );
  }

  onDismiss = () => {
    Animated.parallel([
      Animated.timing(this.animatedContainerOpacityValue, {
        toValue:
          Theme.animations.screens.networkControl.onUnmount.opacity.container
            .toValue,
        duration:
          Theme.animations.screens.networkControl.onUnmount.opacity.container
            .duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateYValue, {
        toValue:
          Theme.animations.screens.networkControl.onUnmount.translate.Y.toValue,
        duration:
          Theme.animations.screens.networkControl.onUnmount.translate.Y
            .duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateXValue, {
        toValue:
          Theme.animations.screens.networkControl.onUnmount.translate.X.toValue,
        duration:
          Theme.animations.screens.networkControl.onUnmount.translate.X
            .duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedScaleValue, {
        toValue:
          Theme.animations.screens.networkControl.onUnmount.scale.toValue,
        duration:
          Theme.animations.screens.networkControl.onUnmount.scale.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedBackgroundOpacityValue, {
        toValue:
          Theme.animations.screens.networkControl.onUnmount.opacity.background
            .toValue,
        duration:
          Theme.animations.screens.networkControl.onUnmount.opacity.background
            .duration,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Navigation.dismissOverlay();
    });
  };

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animatedContainerOpacityValue, {
        toValue:
          Theme.animations.screens.networkControl.onMount.opacity.container
            .toValue,
        duration:
          Theme.animations.screens.networkControl.onMount.opacity.container
            .duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateYValue, {
        toValue:
          Theme.animations.screens.networkControl.onMount.translate.Y.toValue,
        duration:
          Theme.animations.screens.networkControl.onMount.translate.Y.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedTranslateXValue, {
        toValue:
          Theme.animations.screens.networkControl.onMount.translate.X.toValue,
        duration:
          Theme.animations.screens.networkControl.onMount.translate.X.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedScaleValue, {
        toValue: Theme.animations.screens.networkControl.onMount.scale.toValue,
        duration:
          Theme.animations.screens.networkControl.onMount.scale.duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.animatedBackgroundOpacityValue, {
        toValue:
          Theme.animations.screens.networkControl.onMount.opacity.background
            .toValue,
        duration:
          Theme.animations.screens.networkControl.onMount.opacity.background
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
                <ButtonWithCaption
                  icon={'plane'}
                  text={'Plane mode'}
                  colorEnabledButton={
                    Theme.colors.buttons.custom.rounded.plane.enabledBackground
                  }
                />
                <ButtonWithCaption
                  icon={'broadcast-tower'}
                  text={'Mobile network'}
                  colorEnabledButton={
                    Theme.colors.buttons.custom.rounded.mobileData
                      .enabledBackground
                  }
                  initiallyEnabled
                />
              </Row>
              <Row>
                <ButtonWithCaption
                  icon={'wifi'}
                  text={'Wi-Fi'}
                  colorDisabledButton={
                    Theme.colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledBackground
                  }
                  colorDisabledIcon={
                    Theme.colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledIcon
                  }
                  initiallyEnabled
                />
                <ButtonWithCaption
                  icon={'bluetooth-b'}
                  text={'Bluetooth'}
                  iconSize={Theme.sizes.icon.custom.bluetooth}
                  colorDisabledButton={
                    Theme.colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledBackground
                  }
                  colorDisabledIcon={
                    Theme.colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledIcon
                  }
                  initiallyEnabled
                />
              </Row>
              <Row style={{ justifyContent: 'space-between' }}>
                <ButtonWithCaption
                  icon={'retweet'}
                  text={'AirDrop'}
                  colorDisabledButton={
                    Theme.colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledBackground
                  }
                  colorDisabledIcon={
                    Theme.colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledIcon
                  }
                />
                <ButtonWithCaption
                  icon={'creative-commons-share'}
                  text={'HotSpot'}
                  iconSize={Theme.sizes.icon.custom.bluetooth}
                  colorDisabledButton={
                    Theme.colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledBackground
                  }
                  colorDisabledIcon={
                    Theme.colors.buttons.custom.rounded.wifi_bluetooth
                      .disabledIcon
                  }
                />
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
});
