import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Icon } from "@rneui/themed";

import { Dashboard } from '../screens/Dashboard';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';
import { Dairy } from '../screens/Dairy';
import { Account } from '../screens/Account';
import { ForgetPassword } from '../screens/ForgetPassword';
import { Splash } from '../screens/Splash';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#5F4687"
      inactiveColor="#474747"
      barStyle={
        {
          backgroundColor: '#E1E1E1',
          position: 'absolute',
          overflow: 'hidden',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }
      }
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <Icon name="dashboard" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Dairy"
        component={Dairy}
        options={{
          tabBarLabel: 'Diario',
          tabBarIcon: ({ color }) => (
            <Icon name="book" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: 'Usuario',
          tabBarIcon: ({ color }) => (
            <Icon name="people" color={color} size={26} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{gestureEnabled:false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="Main"
        component={MyTabs}
      />

       <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
      />

   
    </Stack.Navigator>
  );
}