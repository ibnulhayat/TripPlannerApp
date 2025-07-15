import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View
} from 'react-native';
import { COLORS } from '../styles/colors'; // your color system

export default function BottomSheet({ modalVisible, setModalVisible, customStyle, children, nonClosable = false}) {

  const { width, height } = useWindowDimensions()
  const styles = getStyles(width, height)
  const bottomAnim = useRef(new Animated.Value(height)).current

  useEffect(() => {
    if (modalVisible) {
      openModal()
    } else {
      closeModal()
    }
  }, [modalVisible])

  const openModal = () => {
    Animated.spring(bottomAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  };

  const closeModal = () => {
    if (nonClosable) return;

    Animated.timing(bottomAnim, {
      toValue: height,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false)
    })
  }


  return (
    <Modal
      visible={modalVisible}
      onRequestClose={closeModal}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      
        <View
          style={styles.overlay}
          pointerEvents="box-none"
        >
          {/* Mask */}
          {!nonClosable && (
            <Pressable style={StyleSheet.absoluteFill} onPress={closeModal} />
          )}

          {/* Animated Bottom Sheet */}
          <Animated.View
            style={[
              styles.sheet,
              customStyle,
              {
                transform: [{ translateY: bottomAnim }],
              },
            ]}
          >
            {/* Drag handle */}
            {!nonClosable && (
              <Pressable onPress={closeModal} style={styles.handleContainer}>
                <View style={styles.handle} />
              </Pressable>
            )}

            {children}
          </Animated.View>
        </View>
    </Modal>
  );
}

const getStyles = (width, height) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    sheet: {
      width,
      maxHeight: height * 0.85,
      backgroundColor: COLORS.appBackgroundColor || '#fff',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingBottom: Platform.OS === 'ios' ? 24 : 0,
    },
    handleContainer: {
      paddingTop: 12,
      paddingBottom: 6,
    },
    handle: {
      height: 4,
      width: 44,
      borderRadius: 2,
      backgroundColor: COLORS.placeholderTextColor || '#ccc',
      alignSelf: 'center',
    },
  })
