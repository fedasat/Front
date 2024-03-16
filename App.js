import { StatusBar } from 'expo-status-bar';
import Stack from './navigation/Stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigate from './navigation/TabNavigat';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
export default function App() {
  

  return ( 
<>
 
    <TabNavigate/>
<Toast/>

  </>

  );
  }


