export interface UserData {
  name: string;
  membershipLevel: string;
  userId: string;
}

export interface MembershipCardProps {
  userData: UserData;
  qrValue: string;
}

export interface QRCodeSectionProps {
  qrValue: string;
}
