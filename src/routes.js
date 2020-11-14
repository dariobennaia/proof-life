import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '~/styles/colors';
import StatusBar from '~/components/StatusBar';

import Main from '~/pages/Main';
import ProofLife from '~/pages/ProofLife';

const pages = [
  {name: 'main', page: Main},
  {name: 'proof-life', page: ProofLife},
];
const Stack = createStackNavigator();

const GLOBAL_OPTIONS = {
  headerTintColor: colors.textPrimary,
  headerStyle: {
    backgroundColor: colors.primary,
  },
};

const Routes = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          {pages.map(({name, page: Page}) => (
            <Stack.Screen
              key={name}
              name={name}
              component={Page}
              options={{...Page.navigationOptions, ...GLOBAL_OPTIONS}}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Routes;
