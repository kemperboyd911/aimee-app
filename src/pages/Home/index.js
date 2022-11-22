import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Explore from '../Explore';
import MyCourses from '../MyCourses';
import Profile from '../Profile';
import Home from './Home';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeTab"
        options={{ tabBarLabel: 'Home' }}
        component={Home}
      />
      <Tab.Screen
        name="MyCourseTab"
        options={{ tabBarLabel: 'My Course' }}
        component={MyCourses}
      />
      <Tab.Screen
        name="ExploreTab"
        options={{ tabBarLabel: 'Explore' }}
        component={Explore}
      />
      <Tab.Screen
        name="ProfileTab"
        options={{ tabBarLabel: 'Profile' }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
