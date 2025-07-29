import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { styles } from '../styles';
import { MembershipCardProps } from '../types';

const MembershipCard: React.FC<MembershipCardProps> = ({ userData, qrValue }) => {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Virtual Membership Card</Text>
      </View>
      
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImagePlaceholder}>
            <Text style={styles.profileImageText}>
              {userData.name.split(' ').map((n: string) => n[0]).join('')}
            </Text>
          </View>
        </View>
        
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{userData.name}</Text>
          <Text style={styles.membershipLevel}>{userData.membershipLevel}</Text>
        </View>
      </View>
      
      {/* QR Code Section */}
      <View style={styles.qrSection}>
        <View style={styles.qrContainer}>
          <QRCode
            value={qrValue}
            size={160}
            color="#1A1A2E"
            backgroundColor="#FFFFFF"
            logoSize={0}
            logoBackgroundColor="transparent"
          />
        </View>
        <Text style={styles.qrLabel}>Scan QR Code</Text>
        <Text style={styles.qrSubtext}>Present this code for verification</Text>
      </View>
      
      {/* Card Footer */}
      <View style={styles.cardFooter}>
        <Text style={styles.cardId}>ID: {qrValue}</Text>
      </View>
    </View>
  );
};

export default MembershipCard;
