import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomePage} from "./page/homePage/HomePage";
import {Task, TasksPage} from "./page/tasksPage/TasksPage";
import {TaskPage} from "./page/taskPage/TaskPage";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


type RootStackParamList = {
    Home: undefined;
    Tasks: undefined;
    Task: { task: Task };
};

export type PropsHome = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type PropsTasks = NativeStackScreenProps<RootStackParamList, 'Tasks'>;
export type PropsTask = NativeStackScreenProps<RootStackParamList, 'Task'>;


const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {

  return (
      <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage}/>
          <Stack.Screen name="Tasks" component={TasksPage}/>
          <Stack.Screen name="Task" component={TaskPage}/>
      </Stack.Navigator>
        </NavigationContainer>
  );
}


