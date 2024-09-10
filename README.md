# TicketResellPlatform_Mobile

TicketResellPlatform_Mobile is a mobile application built with React Native and Expo for reselling tickets. This project uses Firebase for backend services and integrates various libraries for navigation, state management, and UI components.

## Tech Stack

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Using npm

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/TicketResellPlatform_Mobile.git
    cd TicketResellPlatform_Mobile
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    API_URL='your_api_url'
    FIREBASE_API_KEY='your_firebase_api_key'
    FIREBASE_AUTH_DOMAIN='your_firebase_auth_domain'
    FIREBASE_PROJECT_ID='your_firebase_project_id'
    FIREBASE_STORAGE_BUCKET='your_firebase_storage_bucket'
    FIREBASE_MESSAGING_SENDER_ID='your_firebase_messaging_sender_id'
    FIREBASE_APP_ID='your_firebase_app_id'
    FIREBASE_MEASUREMENT_ID='your_firebase_measurement_id'
    ```

### Using yarn

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/TicketResellPlatform_Mobile.git
    cd TicketResellPlatform_Mobile
    ```

2. Install dependencies:
    ```sh
    yarn install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```env
    API_URL='your_api_url'
    FIREBASE_API_KEY='your_firebase_api_key'
    FIREBASE_AUTH_DOMAIN='your_firebase_auth_domain'
    FIREBASE_PROJECT_ID='your_firebase_project_id'
    FIREBASE_STORAGE_BUCKET='your_firebase_storage_bucket'
    FIREBASE_MESSAGING_SENDER_ID='your_firebase_messaging_sender_id'
    FIREBASE_APP_ID='your_firebase_app_id'
    FIREBASE_MEASUREMENT_ID='your_firebase_measurement_id'
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

2. Run the app on an Android device/emulator:
    ```sh
    npm run android
    # or
    yarn android
    ```

3. Run the app on an iOS device/emulator:
    ```sh
    npm run ios
    # or
    yarn ios
    ```

4. Run the app on the web:
    ```sh
    npm run web
    # or
    yarn web
    ```

## Configuration

The project configuration is managed through various files:

- **Firebase Configuration**: Located in [`src/config/firebase.config.ts`](src/config/firebase.config.ts).
- **TypeScript Configuration**: Located in [`tsconfig.json`](tsconfig.json).
- **Babel Configuration**: Located in [`babel.config.js`](babel.config.js).
- **Tailwind CSS Configuration**: Located in [`tailwind.config.js`](tailwind.config.js).

## Scripts

- `npm start` or `yarn start`: Start the Expo development server.
- `npm run android` or `yarn android`: Run the app on an Android device/emulator.
- `npm run ios` or `yarn ios`: Run the app on an iOS device/emulator.
- `npm run web` or `yarn web`: Run the app on the web.

## Dependencies

Key dependencies used in this project:

- `expo`: Expo SDK for building React Native apps.
- `firebase`: Firebase SDK for backend services.
- `@react-navigation/native`: Navigation library for React Native.
- `nativewind`: Tailwind CSS for React Native.
- `axios`: Promise-based HTTP client.

For a complete list of dependencies, refer to the [`package.json`](package.json) file.

## Development

1. Ensure you have the Expo CLI installed:
    ```sh
    npm install -g expo-cli
    # or
    yarn global add expo-cli
    ```

2. Follow the [Installation](#installation) steps to set up the project.

3. Start the development server and make changes to the codebase. The app will automatically reload with your changes.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.