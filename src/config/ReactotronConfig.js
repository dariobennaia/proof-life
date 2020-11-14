import {Platform} from 'react-native';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: Platform.OS === 'ios' ? 'localhost' : '10.0.0.63',
  })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
