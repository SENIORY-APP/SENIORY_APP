import React from 'react';
import { AdminTask } from '@screens/AdminTask';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Stacks = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name="AdminTask" component={AdminTask} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Stacks;
