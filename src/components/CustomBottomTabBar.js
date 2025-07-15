import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../styles/colors';

export function CustomBottomTabBar({ state, descriptors, navigation }){


  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconName = {
          Home: 'home',
          Trips: 'airport-shuttle',
          Settings: 'settings',
        }[route.name];

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tab}
          >
            <Icon
                name={iconName}
                size={24}
                color={isFocused ? COLORS.titleTextColor : COLORS.placeholderTextColor}
            />
            <Text
              style={[
                styles.label,
                { color: isFocused ? COLORS.titleTextColor : COLORS.placeholderTextColor }
              ]}
              type="label"
            >
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 85,
    backgroundColor: COLORS.buttonTextColor,
    borderTopWidth: 1,
    borderTopColor: COLORS.placeholderTextColor,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  label: {
    marginTop: 4,
    fontSize: 12,
  },
});
