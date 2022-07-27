import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const peoples = [
    { name: "Morgan Freeman", age: 72 },
    { name: "Vetrimaran", age: 42 },
    { name: "A.R.Rehman", age: 49 },
    { name: "Mariam Beevi", age: 63 },
    { name: "Mohan Lal", age: 61 },
    { name: "Mammooty", age: 76 },
    { name: "Sai Pallavi", age: 32 },
    { name: "Rahul Dravid", age: 55 },
    { name: "Zakir Naik", age: 66 },
    { name: "Afaan", age: 4 },
  ];

  return (
    <FlatList
      keyExtractor={(people) => people.name}
      data={peoples}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
