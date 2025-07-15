# Getting Started Trip Planner App

## Step 1: Start Metro and Build and run your app

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 2: Project Overview
A mobile application built with React Native CLI, designed to help users create and manage trips. The UI follows a clean modular layout based on a provided [Figma design](https://www.figma.com/design/W4igb4ZIwHvpaTRYT8j2oj/Demo-Trip-Create?node-id=4-1139&t=aG5PTrja15uNS0Cd-0).

## Tech Stack

| Tool/Library            | Purpose                                     |
| ----------------------- | ------------------------------------------- |
| **React Native CLI**    | Native app framework                        |
| **Redux Toolkit**       | State management                            |
| **Redux Persist**       | Save Redux state (login + trips) to storage |
| **AsyncStorage**        | Local storage for Redux persist             |
| **React Navigation v6** | Stack + Tab navigation                      |
| **Safe Area Context**   | Handles safe area on iOS/Android            |
| **Custom Bottom Modal** | For location selection UX                   |

## App Flow & Screens

# 1. Login Screen
    Simulates login using static credentials

    Dispatches auth/login() → sets isLoggedIn: true in Redux

    Login status is persisted using redux-persist

# 2. Home Screen
    User selects:

    Load Location

    Unload Location

    Date & Time

    Trips are created and stored using:

    dispatch(trip/addTrip(...))

    Persisted automatically via Redux persist

# 3. Trips Screen
    Lists created trips from Redux

    Allows trip deletion via trip/deleteTrip(id)

    Trips auto-loaded on app launch

# 4. Settings Screen
    Shows user name + email (from Redux auth.user)

    Logout resets login state via auth/logout()