import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

interface IHeader{
  visualMode: string;
}

export function Header({ visualMode } : IHeader ) {
  return (
    <SafeAreaView style={visualMode === "light" ? styles.lightContainer : styles.darkContainer}>
      <View style={[styles.header, visualMode === "light" ? styles.lightHeader : styles.darkHeader]}>
        <Text style={[styles.headerText, visualMode === "light" ? styles.lightHeaderText : styles.darkHeaderText]}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }, visualMode === "light" ? styles.lightHeaderText : styles.darkHeaderText]}>do</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: '#273FAD',
  },
  darkContainer: {
    backgroundColor: '#483C67',
  },
  header: {
    paddingBottom: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  lightHeader: {
    backgroundColor: '#273FAD',
  },
  darkHeader: {
    backgroundColor: '#483C67',
  },
  headerText: {
    fontSize: 24,
    fontFamily: 'Poppins-Regular',
  },
  lightHeaderText: {
    color: '#FFF',
  },
  darkHeaderText: {
    color: '#E1E1E6',
  },
});