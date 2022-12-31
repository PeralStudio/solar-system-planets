import { useContext } from "react";
import {
    SafeAreaView,
    View,
    Image,
    Text,
    TouchableOpacity,
    Linking,
} from "react-native";
import { PlanetsContext } from "../../context/planetsContext";
import { styles } from "./styles";
import { Background } from "../../components/Background/index";
import { FontAwesome5 } from "@expo/vector-icons";

export function Planet(props) {
    const [planet] = useContext(PlanetsContext);

    const width = planet.name === "Saturno" ? 400 : 225;

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    style={[styles.planet, { width: width }]}
                    source={planet.imageBig}
                />
                <View style={styles.information}>
                    <View style={styles.status}>
                        <View style={styles.statu}>
                            <FontAwesome5
                                name={"moon"}
                                size={22}
                                color="white"
                            />
                            <Text style={styles.statuText}>{planet.moons}</Text>
                        </View>
                        <View style={styles.statu}>
                            <Text style={{ color: "#FFFAFA", fontSize: 16 }}>
                                Edad
                            </Text>
                            <Text style={styles.statuText}>
                                {planet.age} billones
                            </Text>
                        </View>
                        <View style={styles.statu}>
                            <FontAwesome5
                                name={"temperature-high"}
                                size={22}
                                color="white"
                            />
                            <Text style={styles.statuText}>
                                {planet.temperatureHigh}° /
                            </Text>
                            <Text style={styles.statuText}>
                                {planet.temperatureLow}°
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.description}>{planet.description}</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => Linking.openURL(planet.link)}
                    >
                        <Text style={styles.buttonText}>Saber más</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Background>
    );
}
