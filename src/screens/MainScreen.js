import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import { createAppContainer } from 'react-navigation';

export default createAppContainer(createStackNavigator({
    Screen1: Screen1,
    Screen2: Screen2,
    Screen3: Screen3
}));