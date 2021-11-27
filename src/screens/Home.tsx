import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Animated,
  LayoutChangeEvent,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import ButtonBase from '../components/Atoms/Buttons/ButtonBase';

import FlexView from '../components/Atoms/FlexView';
import Row from '../components/Atoms/Row';
import MusicControlSection from '../components/Sections/MusicControlSection';
import NetworkControlSection from '../components/Sections/NetworkControlSection';
import SliderControl from '../components/Controls/SliderControl';
import { Theme } from '../constants/Theme';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.animatedScaleValue = new Animated.Value(
      Theme.animations.buttons.default.rectangled.initialValue,
    );
  }

  animatedScaleValue: Animated.Value | Animated.ValueXY;

  defineAnimationParams = (event: LayoutChangeEvent) => {
    const layout = event.nativeEvent.layout;

    let yDistance = Theme.dimensions.screenHeight / 2 - (layout.height / 2 + layout.y);
    yDistance = StatusBar.currentHeight ? yDistance - StatusBar.currentHeight : yDistance;
    Theme.animations.screens.musicControl.onUnmount.translate.Y.toValue = -yDistance;
    Theme.animations.screens.musicControl.initial.translateYValue = -yDistance;
    Theme.animations.screens.networkControl.onUnmount.translate.Y.toValue = -yDistance;
    Theme.animations.screens.networkControl.initial.translateYValue = -yDistance;

    const xDistance = layout.width / 4;
    Theme.animations.screens.musicControl.onUnmount.translate.X.toValue = xDistance;
    Theme.animations.screens.musicControl.initial.translateXValue = xDistance;
    Theme.animations.screens.networkControl.onUnmount.translate.X.toValue = -xDistance;
    Theme.animations.screens.networkControl.initial.translateXValue = -xDistance;
  };

  onLongPressNetworkControlSection = () => {
    Navigation.showOverlay({
      component: {
        name: 'NetworkControlScreen',
      },
    });
  };

  onLongPressMusicControlSection = () => {    
    // Navigation.showOverlay({
    //   component: {
    //     name: 'MusicControlScreen',
    //   },
    // });    
  };

  handlePressIn = () => {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.animations.buttons.default.rectangled.pressIn.toValue,
      useNativeDriver: true,
    }).start();
  };

  handlePressOut = () => {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.animations.buttons.default.rectangled.pressOut.toValue,
      friction: Theme.animations.buttons.default.rectangled.pressOut.friction,
      tension: Theme.animations.buttons.default.rectangled.pressOut.tension,
      useNativeDriver: true,
    }).start();
  };

  // handlePressIn = () => {
  //   Animated.spring(this.animatedScaleValue, {
  //     toValue: Theme.animations.buttons.default.squared.pressIn.toValue,
  //     useNativeDriver: true,
  //   }).start();
  // }

  // handlePressOut = () => {
  //   Animated.spring(this.animatedScaleValue, {
  //     toValue: Theme.animations.buttons.default.squared.pressOut.toValue,
  //     friction: Theme.animations.buttons.default.squared.pressOut.friction,
  //     tension: Theme.animations.buttons.default.squared.pressOut.tension,
  //     useNativeDriver: true,
  //   }).start();
  // }

  render() {
    const animatedStyle = { transform: [{ scale: this.animatedScaleValue }] };
    return (
      <ImageBackground
        style={styles.backgroundImage}
        blurRadius={10}
        source={Theme.images.backgroundImage}>
        <View style={styles.controlsBoardWrapper}>
          <Row onLayout={this.defineAnimationParams}>
            <NetworkControlSection
              onLongPress={this.onLongPressNetworkControlSection}
              style={styles.flex}
            />
            <MusicControlSection
              onLongPress={this.onLongPressMusicControlSection}
              style={styles.flex}
            />
          </Row>
          <Row>
            <FlexView>
              <Row>
                <ButtonBase
                  type="squared"
                  iconSize={Theme.sizes.icon.squared}
                  colorDisabledButton={
                    Theme.colors.buttons.default.squared.disabledBackground
                  }
                  colorEnabledButton={
                    Theme.colors.buttons.default.squared.enabledBackground
                  }
                  icon={'lock'}
                  colorDisabledIcon={Theme.colors.buttons.default.squared.disabledIcon}
                  colorEnabledIcon={Theme.colors.buttons.default.squared.enabledIcon}
                  text={undefined}
                  animatedStyle={animatedStyle}
                  onPressIn={this.handlePressIn}
                  onPressOut={this.handlePressOut}
                />
                <ButtonBase
                  type="squared"
                  iconSize={Theme.sizes.icon.squared}
                  colorDisabledButton={
                    Theme.colors.buttons.default.squared.disabledBackground
                  }
                  colorEnabledButton={
                    Theme.colors.buttons.default.squared.enabledBackground
                  }
                  icon={'desktop'}
                  colorDisabledIcon={Theme.colors.buttons.default.squared.disabledIcon}
                  colorEnabledIcon={Theme.colors.buttons.default.squared.enabledIcon}
                  text={undefined}
                  animatedStyle={animatedStyle}
                  onPressIn={this.handlePressIn}
                  onPressOut={this.handlePressOut}
                />

              </Row>
              <Row>
                <ButtonBase
                  type="rectangled"
                  iconSize={Theme.sizes.icon.rectangled}
                  colorDisabledButton={
                    Theme.colors.buttons.default.rectangled.disabledBackground
                  }
                  colorEnabledButton={
                    Theme.colors.buttons.default.rectangled.enabledBackground
                  }
                  colorDisabledIcon={Theme.colors.buttons.default.rectangled.disabledIcon}
                  colorEnabledIcon={Theme.colors.buttons.default.rectangled.enabledIcon}
                  colorDisabledText={Theme.colors.buttons.default.rectangled.disabledText}
                  colorEnabledText={Theme.colors.buttons.default.rectangled.enabledText}
                  icon={"moon"}
                  text={"Focus"}
                  animatedStyle={animatedStyle}
                  onPressIn={this.handlePressIn}
                  onPressOut={this.handlePressOut}
                />

              </Row>
            </FlexView>
            <FlexView>
              <Row style={StyleSheet.absoluteFill}>
                <SliderControl icon={'adjust'} />
                <SliderControl icon={'volume-up'} />
              </Row>
            </FlexView>
          </Row>
          <Row>
            <ButtonBase
              type="squared"
              iconSize={Theme.sizes.icon.squared}
              colorDisabledButton={
                Theme.colors.buttons.default.squared.disabledBackground
              }
              colorEnabledButton={
                Theme.colors.buttons.default.squared.enabledBackground
              }
              icon={'lightbulb'}
              colorDisabledIcon={Theme.colors.buttons.default.squared.disabledIcon}
              colorEnabledIcon={Theme.colors.buttons.default.squared.enabledIcon}
              text={undefined}
              initiallyEnabled
              animatedStyle={animatedStyle}
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
            />
            <ButtonBase
              type="squared"
              iconSize={Theme.sizes.icon.squared}
              colorDisabledButton={
                Theme.colors.buttons.default.squared.disabledBackground
              }
              colorEnabledButton={
                Theme.colors.buttons.default.squared.enabledBackground
              }
              icon={'calculator'}
              colorDisabledIcon={Theme.colors.buttons.default.squared.disabledIcon}
              colorEnabledIcon={Theme.colors.buttons.default.squared.enabledIcon}
              text={undefined}
              initiallyEnabled
              animatedStyle={animatedStyle}
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
            />
            <ButtonBase
              type="squared"
              iconSize={Theme.sizes.icon.squared}
              colorDisabledButton={
                Theme.colors.buttons.default.squared.disabledBackground
              }
              colorEnabledButton={
                Theme.colors.buttons.default.squared.enabledBackground
              }
              icon={'camera'}
              colorDisabledIcon={Theme.colors.buttons.default.squared.disabledIcon}
              colorEnabledIcon={Theme.colors.buttons.default.squared.enabledIcon}
              text={undefined}
              initiallyEnabled
              animatedStyle={animatedStyle}
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
            />
            <ButtonBase
              type="squared"
              iconSize={Theme.sizes.icon.squared}
              colorDisabledButton={
                Theme.colors.buttons.default.squared.disabledBackground
              }
              colorEnabledButton={
                Theme.colors.buttons.default.squared.enabledBackground
              }
              icon={'record-vinyl'}
              colorDisabledIcon={Theme.colors.buttons.default.squared.disabledIcon}
              colorEnabledIcon={Theme.colors.buttons.default.squared.enabledIcon}
              text={undefined}
              initiallyEnabled
              animatedStyle={animatedStyle}
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
            />

          </Row>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  controlsBoardWrapper: {
    padding: Theme.indents.lg,
    flex: 1,
    justifyContent: 'flex-end',
  },
  flex: {
    flex: 1,
  },
});
