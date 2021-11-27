import {Dimensions, Platform} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const Theme = {
  dimensions: {
    screenWidth,
    screenHeight,
  },
  fonts: {
    primary: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    alternative: Platform.OS === 'android' ? 'normal' : 'Damascus',
  },
  indents: {
    xxxl: 50,
    xxl: 24,
    xl: 20,
    lg: 20,
    md: 16,
    sm: 8,
    dynamic: {
      sliderControlIcon: 0.045 * screenWidth,
      buttonWithCaptionMargin: 0.07 * screenWidth,
    },
  },
  borders: {
    radius: 16,
    circle: 100,
  },
  sizes: {
    icon: {
      default: 0.06 * screenWidth,
      rounded: 0.048 * screenWidth,
      squared: 0.07 * screenWidth,
      rectangled: 0.07 * screenWidth,
      custom: {
        bluetooth: 0.064 * screenWidth,
      },
      musicControlSection: {
        play: 0.08 * screenWidth,
        wards: 0.055 * screenWidth,
      },
      sliderControl: 0.065 * screenWidth,
    },
    font: {
      button: {
        default: 0.036 * screenWidth,
      },
      songTitle: {
        firstLine: 12,
        secondLine: 16,
      },
    },
  },

  images: {
    backgroundImage: require('../assets/images/backgroundImage2.jpg'),
    iTunesIcon: require('../assets/images/itunes.png'),
  },
  colors: {
    transparent: 'rgba(0, 0, 0, 0)',
    semiWhite: 'rgba(255, 255, 255, 0.5)',
    buttons: {
      default: {
        squared: {
          disabledBackground: 'rgba(0, 0, 0, 0.7)',
          enabledBackground: 'rgba(255, 255, 255, 0.7)',
          disabledIcon: 'rgba(255, 255, 255, 0.8)',
          enabledIcon: '#027AFF',
        },
        rectangled: {
          disabledBackground: 'rgba(0, 0, 0, 0.7)',
          enabledBackground: 'rgba(255, 255, 255, 0.7)',
          disabledIcon: 'rgba(255, 255, 255, 0.8)',
          enabledIcon: '#027AFF',
          disabledText: 'rgba(255, 255, 255, 0.8)',
          enabledText: 'rgba(0, 0, 0, 1)',
        },
        rounded: {
          disabledBackground: 'rgba(255, 255, 255, 0.2)',
          enabledBackground: '#007AFF',
          disabledIcon: 'rgba(255, 255, 255, 0.8)',
          enabledIcon: 'rgba(255, 255, 255, 1)',
        },
      },
      custom: {
        rounded: {
          plane: {
            enabledBackground: '#FF9501',
          },
          mobileData: {
            enabledBackground: '#76D672',
          },
          wifi_bluetooth: {
            disabledBackground: 'rgba(255, 255, 255, 0.8)',
            disabledIcon: 'rgba(0, 0, 0, 0.7)',
          },
          airDrop: {},
          personalHotspot: {},
        },
      },
    },
    sections: {
      default: {
        background: 'rgba(0, 0, 0, 0.7)',
      },
      musicControl: {
        icons: {
          play: 'rgba(255, 255, 255, 1)',
          wards: 'rgba(255, 255, 255, 0.5)',
        },
      },
    },
    sliderControl: {
      background: 'rgba(0, 0, 0, 0.7)',
      icon: 'rgba(255, 255, 255, 0.8)',
    },
    screens: {
      musicControl: {
        songImageWrapper: 'rgba(255, 255, 255, 0.2)',
      },
    },
  },

  animations: {
    sections: {
      default: {
        initialValue: 1,
        pressIn: {
          toValue: 1.2,
        },
        pressOut: {
          toValue: 1,
          friction: 2,
          tension: 10,
        },
      },
    },
    sliders: {
      default: {
        initialValue: 1,
        pressIn: {
          toValue: 1.2,
        },
        pressOut: {
          toValue: 1,
          friction: 2,
          tension: 10,
        },
      },
    },

    buttons: {
      default: {
        rounded: {
          initialValue: 1,
          pressIn: {
            toValue: 1.2,
          },
          pressOut: {
            toValue: 1,
            friction: 2,
            tension: 10,
          },
        },
        squared: {
          initialValue: 1,
          pressIn: {
            toValue: 1.2,
          },
          pressOut: {
            toValue: 1,
            friction: 2,
            tension: 10,
          },
        },
        rectangled: {
          initialValue: 1,
          pressIn: {
            toValue: 1.2,
          },
          pressOut: {
            toValue: 1,
            friction: 2,
            tension: 10,
          },
        },
      },
    },
    screens: {
      musicControl: {
        initial: {
          scaleValue: 0.45,
          translateYValue: -32,
          translateXValue: 85,
          backgroundOpacityValue: 0,
          containerOpacityValue: 0,
        },
        onMount: {
          scale: {
            toValue: 1,
            duration: 250,
          },
          translate: {
            Y: {
              toValue: 0,
              duration: 250,
            },
            X: {
              toValue: 0,
              duration: 250,
            },
          },
          opacity: {
            background: {
              toValue: 1,
              duration: 100,
            },
            container: {
              toValue: 1,
              duration: 50,
            },
          },
        },
        onUnmount: {
          scale: {
            toValue: 0.36,
            duration: 250,
          },
          translate: {
            Y: {
              toValue: -32,
              duration: 250,
            },
            X: {
              toValue: 85,
              duration: 250,
            },
          },
          opacity: {
            background: {
              toValue: 0,
              duration: 150,
            },
            container: {
              toValue: 0,
              duration: 500,
            },
          },
        },
      },
      networkControl: {
        initial: {
          scaleValue: 0.38,
          translateYValue: -32,
          translateXValue: -85,
          backgroundOpacityValue: 0,
          containerOpacityValue: 0,
        },
        onMount: {
          scale: {
            toValue: 1,
            duration: 250,
          },
          translate: {
            Y: {
              toValue: 0,
              duration: 250,
            },
            X: {
              toValue: 0,
              duration: 250,
            },
          },
          opacity: {
            background: {
              toValue: 1,
              duration: 100,
            },
            container: {
              toValue: 1,
              duration: 50,
            },
          },
        },
        onUnmount: {
          scale: {
            toValue: 0.32,
            duration: 250,
          },
          translate: {
            Y: {
              toValue: -32,
              duration: 250,
            },
            X: {
              toValue: -85,
              duration: 250,
            },
          },
          opacity: {
            background: {
              toValue: 0,
              duration: 150,
            },
            container: {
              toValue: 0,
              duration: 500,
            },
          },
        },
      },
    },
  }
}
