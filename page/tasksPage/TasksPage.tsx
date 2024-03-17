import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import {useState} from "react";
// @ts-ignore
import CheckBox from 'react-native-checkbox';
import {PropsTasks} from "../../App";
export interface Task {
    id: number;
    title: string;
    isDone: boolean;
    author: string;
    description: string;
}
export const TasksPage = ({ navigation }:PropsTasks)=>{
    const [value, setValue]=useState<string>('')
    const [tasks, setTasks]=useState<Task[]>([
        {id:1, title:"CSS", isDone:true, author:'Dziana', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa'},
        {id:2, title:"HTML", isDone:true,author:'Sofiya',description: ''},
        {id:3, title:"JS", isDone:true,author:'Sasha',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa'},
        {id:4, title:"REACT", isDone:true,author:'Dziana',description: ''},
        {id:5, title:"React native", isDone:false,author:'Kiryl',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamdsa'},
    ])

    const addTaskHandler = () => {
        const newTask:Task = { id: tasks.length + 1+10, title: value, isDone: false, author:'Dziana', description:'' };
        setTasks([...tasks, newTask])
        setValue('');
    };
    const deleteTaskHandler = (id: number) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    const changeIsDoneTaskHandler = (id: number) => {
        setTasks(tasks.map(t => t.id !== id ? t : { ...t, isDone: !t.isDone }))}
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
            />
            <Button color="pink" title={'add task'} onPress={addTaskHandler}/>
            <View style={styles.tasksContainer}>
                {tasks.map(t=>{
                    return (
                        <View style={styles.checkboxContainer} key={t.id} >
                            <CheckBox
                                label={null}
                                checked={t.isDone}
                                onChange={()=>changeIsDoneTaskHandler(t.id)}
                                style={styles.checkbox}
                            />
                            <Text>{t.title}</Text>
                            <View style={styles.deleteButton}>
                                <Button color="#f194ff" title={'delete'} onPress={()=>deleteTaskHandler(t.id)}/>
                            </View>
                            <Button color="#4e219c"
                                title="Show Task"
                                onPress={() => navigation.navigate('Task', { task: t })}
                            />
                        </View>
                    )

                })}
            </View>

            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
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
        },
        input: {
            height: 40,
            margin: 12,
            padding: 10,
            minWidth:250,
            backgroundColor:'white',
        },
        tasksContainer:{
            flexDirection: 'column',
            marginBottom: 20,
            justifyContent:'flex-start',
            padding:20,
        },
        checkboxContainer: {
            flexDirection: 'row',
            marginBottom: 20,
            gap:10,
            backgroundColor:'white',
            justifyContent:"space-between",
            alignItems:"center",
            padding:6,

        },
        checkbox: {
            alignSelf: 'center',
        },
        deleteButton:{
            width:80,
        }
    });
