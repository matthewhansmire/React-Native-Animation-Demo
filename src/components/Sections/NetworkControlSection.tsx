import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Animated,
} from 'react-native';

import ButtonBase from '../Atoms/Buttons/ButtonBase';

import Row from '../Atoms/Row';
import { Theme } from '../../constants/Theme';

interface Props extends TouchableWithoutFeedbackProps { }

export default class NetworkControlSection extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.animatedScaleValue = new Animated.Value(
      Theme.animations.sections.default.initialValue,
    );
  }

  animatedScaleValue: Animated.Value | Animated.ValueXY;

  handlePressIn = () => {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.animations.sections.default.pressIn.toValue,
      useNativeDriver: true,
    }).start();
  }

  handlePressOut = () => {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.animations.sections.default.pressOut.toValue,
      friction: Theme.animations.sections.default.pressOut.friction,
      tension: Theme.animations.sections.default.pressOut.tension,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const { style } = this.props;
    const animatedStyle = { transform: [{ scale: this.animatedScaleValue }] };

    return (
      <TouchableWithoutFeedback
        {...this.props}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}>
        <Animated.View style={[styles.container, style, animatedStyle]}>
          <Row>
            <ButtonBase
              type="rounded"
              iconSize={Theme.sizes.icon.rounded}
              colorDisabledButton={
                Theme.colors.buttons.default.rounded.disabledBackground
              }
              colorDisabledIcon={Theme.colors.buttons.default.rounded.disabledIcon}
              colorEnabledIcon={Theme.colors.buttons.default.rounded.enabledIcon}
              icon={'plane'}
              colorEnabledButton={Theme.colors.buttons.custom.rounded.plane.enabledBackground}
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              onLongPress={this.props.onLongPress}
              text={undefined}
            />
            <ButtonBase
              type="rounded"
              iconSize={Theme.sizes.icon.rounded}
              colorDisabledButton={
                Theme.colors.buttons.default.rounded.disabledBackground
              }
              colorDisabledIcon={Theme.colors.buttons.default.rounded.disabledIcon}
              colorEnabledIcon={Theme.colors.buttons.default.rounded.enabledIcon}
              icon={'broadcast-tower'}
              colorEnabledButton={Theme.colors.buttons.custom.rounded.mobileData.enabledBackground}
              initiallyEnabled
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              onLongPress={this.props.onLongPress}
            />
          </Row>
          <Row>
            <ButtonBase
              type="rounded"
              iconSize={Theme.sizes.icon.rounded}
              colorDisabledButton={
                Theme.colors.buttons.custom.rounded.wifi_bluetooth
                  .disabledBackground
              }
              colorDisabledIcon={
                Theme.colors.buttons.custom.rounded.wifi_bluetooth.disabledIcon
              }
              colorEnabledIcon={Theme.colors.buttons.default.rounded.enabledIcon}
              icon={'wifi'}
              colorEnabledButton={Theme.colors.buttons.custom.rounded.mobileData.enabledBackground}
              initiallyEnabled
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              onLongPress={this.props.onLongPress}
            />

            <ButtonBase
              type="rounded"
              iconSize={Theme.sizes.icon.custom.bluetooth}
              colorDisabledButton={
                Theme.colors.buttons.custom.rounded.wifi_bluetooth
                  .disabledBackground
              }
              colorDisabledIcon={
                Theme.colors.buttons.custom.rounded.wifi_bluetooth.disabledIcon
              }        
              colorEnabledIcon={Theme.colors.buttons.default.rounded.enabledIcon}      
              colorEnabledButton={Theme.colors.buttons.custom.rounded.mobileData.enabledBackground}
              icon={'bluetooth-b'}
              initiallyEnabled
              onPressIn={this.handlePressIn}
              onPressOut={this.handlePressOut}
              onLongPress={this.props.onLongPress}
            />           
          </Row>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
    flex: 1,
    margin: Theme.indents.sm,
    padding: Theme.indents.sm,
    backgroundColor: Theme.colors.sections.default.background,
    borderRadius: Theme.borders.radius,
  },
});
