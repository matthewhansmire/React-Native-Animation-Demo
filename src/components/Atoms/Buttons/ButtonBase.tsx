import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  Animated,
  GestureResponderEvent,
  StyleProp,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Theme } from '../../../constants/Theme';

export interface ButtonBaseProps extends TouchableWithoutFeedbackProps {
  type: string;
  icon: string;
  iconDisabled?: string;
  iconSize?: number;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  colorEnabledIcon?: string;
  colorEnabledButton?: string;
  colorDisabledIcon: string;
  colorDisabledButton: string;
  colorEnabledText?: string;
  colorDisabledText?: string;
  initiallyEnabled?: boolean;
  animatedStyle?: any; // TODO: make proper interface
}

interface State {
  isEnabled: boolean;
}

export default class ButtonBase extends React.Component<
  ButtonBaseProps,
  State
> {
  state = {
    isEnabled: this.props.initiallyEnabled
      ? this.props.initiallyEnabled
      : false,
  };

  _onPress = (event: GestureResponderEvent) => {
    this.setState({ isEnabled: !this.state.isEnabled });
    this.props.onPress ? this.props.onPress(event) : null;
  };

  render() {
    const {
      type,
      style,
      animatedStyle,
      icon,
      iconDisabled,
      iconSize = Theme.sizes.icon.default,
      colorEnabledButton,
      colorEnabledIcon,
      colorDisabledButton,
      colorDisabledIcon,
      colorEnabledText,
      colorDisabledText,
      text,
      textStyle,
    } = this.props;
    const { isEnabled } = this.state;

    const textColors = {
      enabled: colorEnabledText ? colorEnabledText : colorEnabledIcon,
      disabled: colorDisabledText ? colorDisabledText : colorDisabledIcon,
    };
    const _textStyle: StyleProp<TextStyle> = [
      styles.text,
      { color: isEnabled ? textColors.enabled : textColors.disabled },
    ];

    return (
      <TouchableWithoutFeedback {...this.props} onPress={this._onPress}>
        <Animated.View
          style={[
            styles.container,
            animatedStyle,
            {
              backgroundColor: isEnabled
                ? colorEnabledButton
                : colorDisabledButton,
            },
            type === "rounded" ? styles.roundedButton : 
            type === "squared" ? styles.squaredButton :
            type === "rectangled" ? styles.rectangledButton : 
            null
          ]}>
          <Icon
            name={isEnabled ? icon : iconDisabled ? iconDisabled : icon}
            size={iconSize}
            color={isEnabled ? colorEnabledIcon : colorDisabledIcon}
            solid
          />
          {text ? <Text style={[_textStyle, textStyle]}>{text}</Text> : null}
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
  },
  text: {
    textAlign: 'left',
    fontSize: Theme.sizes.font.button.default,
    fontFamily: Theme.fonts.primary,
    marginVertical: -Theme.indents.sm,
  },
  roundedButton: {
    borderRadius: Theme.borders.circle,
    aspectRatio: 1,
  },
  squaredButton: {
    borderRadius: Theme.borders.radius,
    aspectRatio: 1,
  },
  rectangledButton: {
    borderRadius: Theme.borders.radius,
    aspectRatio: 2.25,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: Theme.indents.md,
  },
});
