import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

const BackButton = ({ navigation }) => (
    <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <FontAwesome5 name={"home"} size={22} color="white" />
    </TouchableOpacity>
);

export default BackButton;
