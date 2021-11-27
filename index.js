/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { Navigation } from 'react-native-navigation';
import Home from './src/screens/Home';
import NetworkControlScreen from './src/screens/NetworkControlScreen';
import MusicControlScreen from './src/screens/MusicControlScreen';

// App.instance.initializeApp();

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('NetworkControlScreen', () => NetworkControlScreen);
Navigation.registerComponent('MusicControlScreen', () => MusicControlScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});

Navigation.setDefaultOptions({
  topBar: {
    // visible: false,
  },
  statusBar: {},
  animations: {},
});

AppRegistry.registerComponent(appName, () => Home);