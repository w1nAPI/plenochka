import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./Overlay.styles";

export default function Overlay({ visible, onClose, children }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.content}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>×</Text>
        </TouchableOpacity>
        {children}
      </View>
    </View>
  );
}
