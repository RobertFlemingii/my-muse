// src/screens/HomeScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import SaveButton from '../components/SaveButton';

const HomeScreen = () => {
  const handleSave = () => {
    // Logic for saving functionality
    // Add your save logic here
    console.log('Save button pressed!');
  };

  return (
    <View>
      {/* Your screen content */}
      <Text>Welcome to My App!</Text>

      {/* Save Button */}
      <SaveButton onPress={handleSave} />
    </View>
  );
};

export default HomeScreen;
