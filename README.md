# Virtual Membership Card

A React Native mobile application built with Expo SDK 52 that displays a digital membership card featuring dynamically generated QR codes for seamless check-in processes.

## Overview

This application provides users with a virtual membership card accessible on their mobile devices. The card includes a unique QR code that can be scanned by partners to verify bookings or memberships. The QR code can be refreshed to generate time-sensitive tokens for enhanced security.

## Features

- **Digital Membership Card Display**: Clean, professional card layout with user information
- **Dynamic QR Code Generation**: Real-time QR code creation using the `react-native-qrcode-svg` library
- **QR Code Refresh Functionality**: Button to regenerate QR codes with updated timestamps
- **Responsive Design**: Optimized for various mobile screen sizes
- **Dark Theme UI**: Modern, elegant interface with professional styling
- **TypeScript Integration**: Full TypeScript support for enhanced development experience

## Tech Stack

- **Framework**: React Native with Expo SDK 52
- **Language**: TypeScript
- **QR Code Library**: react-native-qrcode-svg
- **Styling**: React Native StyleSheet
- **State Management**: React Hooks (useState)

## Project Structure

```
virtmemcard/
├── components/
│   └── MembershipCard.tsx    # Main card component
├── assets/                   # Image assets
├── App.tsx                  # Main application component
├── styles.ts                # Centralized styling
├── types.ts                 # TypeScript type definitions
├── index.js                 # Entry point
├── package.json             # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ImonChakraborty/virtmemcard.git
cd virtmemcard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your preferred platform:
   - **iOS**: Press `i` in the terminal or scan QR code with Expo Go (sdk 52)
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go (sdk 52)

## Usage

### User Information
The application displays the following user details:
- **Name**: Alex Ray
- **Membership Level**: Platinum Member
- **Profile Avatar**: Circular placeholder with user initials

### QR Code Functionality
- **Initial Load**: Generates a unique QR code with timestamp on app startup
- **Format**: `user-id-12345-abcde-[timestamp]`
- **Refresh**: Tap the "Refresh QR Code" button to generate a new time-sensitive token

## Demo

### Application Functionality

#### Tutorial Video

<video src="https://github.com/ImonChakraborty/virtmemcard/assets/tutorial.mp4" controls width="600">
    Your browser does not support the video tag.
</video>

You can watch the demo above to see the app in action, including QR code refresh and membership card display.

The demo shows:
1. Professional membership card display
2. QR code refresh functionality
3. Real-time QR code updates with new timestamps

## Key Components

### MembershipCard Component
- Displays user profile information
- Renders QR code with current value
- Handles card layout and styling

### App Component
- Manages QR code state
- Implements refresh functionality
- Provides user data to child components

### Styling Architecture
- Centralized styles in `styles.ts`
- Consistent theming throughout the application
- Responsive design principles

## Development Considerations

### State Management
The application uses React's `useState` hook to manage QR code values, ensuring real-time updates when the refresh button is pressed.

### Unique ID Generation
Each QR code includes a timestamp to ensure uniqueness and prevent replay attacks in production scenarios.

### TypeScript Integration
Full TypeScript implementation provides:
- Type safety for props and state
- Enhanced IDE support
- Better code maintainability

## Dependencies

### Core Dependencies
- **expo**: ~52.0.0 - Expo SDK for React Native development
- **react**: 18.3.1 - React library
- **react-native**: 0.76.0 - React Native framework
- **react-native-qrcode-svg**: ^6.3.15 - QR code generation
- **react-native-svg**: 15.8.0 - SVG support for QR codes

### Development Dependencies
- **typescript**: ~5.3.0 - TypeScript compiler
- **@types/react**: ~18.3.0 - React type definitions

## Build and Deployment

### Development Build
```bash
npx expo start
```

### Production Build
```bash
# For iOS
npx expo build:ios

# For Android
npx expo build:android
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a Pull Request

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the development team.
