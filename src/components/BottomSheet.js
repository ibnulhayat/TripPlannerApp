// import React, { useEffect, useState } from 'react';
// import {
//     Animated,
//     KeyboardAvoidingView,
//     Modal, PanResponder,
//     Platform,
//     Pressable,
//     StyleSheet,
//     useWindowDimensions,
//     View
// } from 'react-native';
// import { COLORS } from '../styles/colors';


// export default function BottomSheet  ({visible, setVisible, style, children, nonClosable}){

//     const { width, height } = useWindowDimensions()
//     const styles = GetStyles( width, height) 

//     const bottomAnim = React.useRef(new Animated.Value(-height * 2)).current
//     const [modalVisible, setModalVisible] = useState(false)
    

//     useEffect(() => {
//         if (visible) { ShowModal() } else { HideModal() }
//     }, [visible])

//     const ShowModal = () => {
//         setModalVisible(true)
//         SlideToOpenPosition()
//     }

//     const SlideToOpenPosition = () => {
//         Animated.spring(bottomAnim, { toValue: 0, duration: 200, useNativeDriver: false }).start();
//     }

//     const HideModal = () => {

//         if(nonClosable){
//             return false
//         }

//         setModalVisible(false)
//         setVisible(false)
//     }

//     return (

//         <Modal 
//             visible={modalVisible} 
//             onRequestClose={HideModal} 
//             animationType='fade' 
//             transparent={true}
//         >

//             <KeyboardAvoidingView
//                 behavior={Platform.OS === "ios" ? "padding" : null}
//                 style={{ flex: 1 }}
//             >

//                 <View style={[{flex:1}, { justifyContent: "flex-end", backgroundColor:'rgba(0,0,0,0.5)'}]} >


//                     <View style={[styles.modalShadow, StyleSheet.absoluteFillObject]} >
//                         <Pressable onPress={HideModal} onPressIn={HideModal} style={{ flex: 1 }} />
//                     </View>

//                         <View style={[styles.modalContent, {maxHeight:height*0.8}, style]} >

//                             <Pressable onPress={HideModal} onPressIn={HideModal} style={{ padding: 10 }}>
//                                 <View style={{ height: 4, width: 44, borderRadius: 4, backgroundColor: COLORS.placeholderTextColor, alignSelf: 'center' }} />
//                             </Pressable>
//                             { children }
//                         </View>
//                 </View>

//             </KeyboardAvoidingView>
//         </Modal>

//     )
// }

// const GetStyles = ( width, height) => StyleSheet.create({
//     modalContent: {
//         width: width,
//         backgroundColor: COLORS.appBackgroundColor,
//         borderTopLeftRadius: 35,
//         borderTopRightRadius: 35,
//         paddingBottom: Platform.OS == 'ios' ? 20 : 0,
//     },
//     modalShadow:{
//         backgroundColor: 'rgba(0,0,0,0.3)', 
//         top: 0, 
//         left:0, 
//         right:0, 
//         bottom:0, 
//         position: 'absolute', 
//         marginBottom: -30, 
//         width: width 
//     }
// })


import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import { COLORS } from '../styles/colors'; // your color system

export default function BottomSheet({ visible, setVisible, style, children, nonClosable = false}) {

  const { width, height } = useWindowDimensions();
  const styles = getStyles(width, height);
  const bottomAnim = useRef(new Animated.Value(height)).current;
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      openModal();
    } else {
      closeModal();
    }
  }, [visible]);

  const openModal = () => {
    setModalVisible(true);
    Animated.spring(bottomAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    if (nonClosable) return;

    Animated.timing(bottomAnim, {
      toValue: height,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
      setVisible(false);
    });
  };

  if (!modalVisible) return null;

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
              style,
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
  });
