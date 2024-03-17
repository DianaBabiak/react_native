import {Button, StyleSheet, Text, View} from "react-native";
// @ts-ignore
import CheckBox from 'react-native-checkbox';
import {PropsTask} from "../../App";

export const TaskPage = ({route, navigation}:PropsTask)=>{
    const { task } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>ID:</Text>
                <Text>{task.id}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>TITLE:</Text>
                <Text>{task.title}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>IS DONE:</Text>
                <Text>{task.isDone?'Yes':'No'}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>AUTHOR:</Text>
                <Text>{task.author}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>DESCRIPTION:</Text>
                <Text>{task.description}</Text>
            </View>

        <Button
            title="Go to Tasks"
            onPress={() => navigation.navigate('Tasks')}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#68219c',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"column",
        gap:40,
        padding:20,
    },
    textContainer:{
        display:'flex',
        gap:10,
        justifyContent:"center",
        alignItems:'center',

    },
    titleText: {
        color: '#aebdbb',
        fontSize: 16,
        fontWeight:'bold',
    }

});
