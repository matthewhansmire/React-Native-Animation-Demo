import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Theme } from '../../constants/Theme';

export interface SliderControlProps extends TouchableWithoutFeedbackProps {
  icon: string;
}

export default class SliderControl extends React.Component<SliderControlProps> {
  constructor(props: SliderControlProps) {
    super(props);
    this.animatedScaleValue = new Animated.Value(
      Theme.animations.sliders.default.initialValue,
    );
  }

  animatedScaleValue: Animated.Value | Animated.ValueXY;

  handlePressIn = () => {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.animations.sliders.default.pressIn.toValue,
      useNativeDriver: true,
    }).start();
  }

  handlePressOut = () => {
    Animated.spring(this.animatedScaleValue, {
      toValue: Theme.animations.sliders.default.pressOut.toValue,
      friction: Theme.animations.sliders.default.pressOut.friction,
      tension: Theme.animations.sliders.default.pressOut.tension,
      useNativeDriver: true,
    }).start();
  }

  render() {
    const {icon, style} = this.props;
    const animatedStyle = {transform: [{scale: this.animatedScaleValue}]};

    return (
      <TouchableWithoutFeedback
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}>
        <Animated.View style={[styles.container, style, animatedStyle]}>
          <Icon name={icon} style={styles.icon} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 1,
    margin: Theme.indents.sm,
    aspectRatio: 0.44,
    backgroundColor: Theme.colors.sliderControl.background,
    borderRadius: Theme.borders.radius,
  },
  icon: {
    fontSize: Theme.sizes.icon.sliderControl,
    color: Theme.colors.sliderControl.icon,
    marginBottom: Theme.indents.dynamic.sliderControlIcon,
  },
});
