import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { ForgetPassword } from '../screens/ForgetPassword';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="SignUp"
        component={SignUp}
      />
       <Screen
        name="Home"
        component={Home}
      />

       <Screen
        name="ForgetPassword"
        component={ForgetPassword}
      />

    </Navigator>
  );
}