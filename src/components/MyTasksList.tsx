import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

function FlatListHeaderComponent({ visualMode }: IFlatListHeader) {
  return (
    <View>
      <Text style={[styles.header, visualMode === "light" ? styles.lightHeader : styles.darkHeader]}>Minhas tasks</Text>
    </View>
  )
}

interface IFlatListHeader {
  visualMode: string;
}
interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  visualMode: string
}

export function MyTasksList({ tasks, onLongPress, onPress, visualMode }: MyTasksListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
          style={item.done ? styles.taskButtonDone : styles.taskButton}
            testID={`button-${index}`}
            activeOpacity={0.7}
            onPress={() => onPress(item.id)} 
            onLongPress={() => onLongPress(item.id)} 
            //TODO - use onPress, onLongPress and style props
          >
            <View 
              testID={`marker-${index}`}
              style={item.done === true 
                ? (visualMode === "light" ? styles.lightTaskMarkerDone : styles.darkTaskMarkerDone)
                : (visualMode === "light" ? styles.lightTaskMarker : styles.darkTaskMarker)}
              //TODO - use style prop 
            />
            <Text
                   style={item.done === true 
                    ? (visualMode === "light" ? styles.lightTaskTextDone : styles.darkTaskTextDone) 
                    : (visualMode === "light" ? styles.lightTaskText : styles.darkTaskText)}
              //TODO - use style prop 
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent visualMode={visualMode}/>}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={{
        marginHorizontal: 24,
        marginTop: 32
      }}
    />
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold'
  },
  lightHeader: {
    color: '#3D3D4D',
  },
  darkHeader: {
    color: '#494DD5',
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  lightTaskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  darkTaskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  lightTaskText: {
    color: '#3D3D4D',
  },
  darkTaskText: {
    color: 'white',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  lightTaskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#273FAD',
  },
  darkTaskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    marginRight: 10,
    backgroundColor: '#565BFF',
  },
  lightTaskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  darkTaskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
})