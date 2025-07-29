import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { 
  View, 
  Text,
  TouchableOpacity, 
  SafeAreaView,
  ScrollView,
} from 'react-native';
import MembershipCard from './components/MembershipCard';
import { styles } from './styles';
import { UserData } from './types';

export default function App(): JSX.Element {
  // This generates the unique user ID on app startup :)
  const generateUniqueUserId = (): string => {
    const baseId = 'user-id-12345-abcde';
    const timestamp = Date.now();
    return `${baseId}-${timestamp}`;
  };

  const userData: UserData = {
    name: 'Alex Ray',
    membershipLevel: 'Platinum Member',
    userId: 'user-id-12345-abcde'
  };

  const [qrValue, setQrValue] = useState<string>(generateUniqueUserId());

  const refreshQRCode = (): void => {
    const timestamp = Date.now();
    const newQrValue = `${userData.userId}-${timestamp}`;
    setQrValue(newQrValue);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Main Membership Card */}
        <MembershipCard userData={userData} qrValue={qrValue} />
        
        {/* Refresh Button */}
        <TouchableOpacity 
          style={styles.refreshButton} 
          onPress={refreshQRCode}
          activeOpacity={0.7}
        >
          <Text style={styles.refreshButtonText}>Refresh QR Code</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
