import {View, Text, StyleSheet, Button} from "react-native";
import {PropsHome} from "../../App";

export function HomePage({ navigation }:PropsHome) {
    return (
        <View style={styles.container}>
         <Text>Home Screen</Text>
            <Button
                title="Go to Tasks"
                onPress={() => navigation.navigate('Tasks')}
            />
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#68219c',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"column",
        gap:40,
    },

});