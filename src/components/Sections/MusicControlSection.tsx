import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Row from '../Atoms/Row';
import { Theme } from '../../constants/Theme';

interface Props extends TouchableWithoutFeedbackProps {}

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
    const {style} = this.props;
    const animatedStyle = {transform: [{scale: this.animatedScaleValue}]};

    return (
      <TouchableWithoutFeedback
        {...this.props}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}>
        <Animated.View style={[styles.container, style, animatedStyle]}>
          <View style={styles.flex}></View>
          <Row style={styles.controls}>
            <Icon style={[styles.icon, styles.wards]} name={'backward'} />
            <Icon style={[styles.icon, styles.play]} name={'play'} />
            <Icon style={[styles.icon, styles.wards]} name={'forward'} />
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
  flex: {flex: 1},
  controls: {
    justifyContent: 'space-around',
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
});
