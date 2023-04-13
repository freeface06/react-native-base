import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Button, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// 페이지 로드

import HomePage from "./tabpages/HomePage";
import NotificationPage from "./tabpages/NotificationPage";
import AddPage from "./tabpages/AddPage";
import SchedulePage from "./tabpages/SchedulePage";
import MyPage from "./tabpages/MyPage";
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: "#fb8c00",
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "홈",
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Notifications'
        component={NotificationScreen}
        options={{
          headerShown: false,
          title: "알림",
          tabBarIcon: ({ color, size }) => (
            <Icon name='notifications' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='add'
        component={AddScreen}
        options={{
          headerShown: false,
          title: "신청",
          tabBarIcon: ({ color, size }) => (
            <Icon name='add-circle' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='calendar'
        component={ScheduleScreen}
        options={{
          headerShown: false,
          title: "스케줄",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='calendar' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='My'
        component={MyScreen}
        options={{
          headerShown: false,
          title: "My",
          tabBarIcon: ({ color, size }) => (
            <Icon name='person' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function HomeScreen({ navigation }) {
  return <HomePage />;
}

function NotificationScreen() {
  return <NotificationPage />;
}

function AddScreen() {
  return <AddPage />;
}

function ScheduleScreen() {
  return <SchedulePage />;
}

function MyScreen() {
  return <MyPage />;
}

export default MainScreen;
