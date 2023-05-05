import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
    {/*Todays tasks*/}
    <View style={styles.tasksWrapper}>
<Text style={styles.sectiontitle}>Todays tasks</Text>

    <View style={styles.items}>
      {/*This is where all the tasks will go */}
      <Task text={'WHAT IS  LOVE❤'}/>
      <Task text={'DOES LOVE HURTS💘'}/>
      <Task text={'IT IS WHAT IT IS😅'}/>
      <View>
  <Text style={styles.mac}>eng_mac</Text>
</View>
      
      
    </View>
   
    </View>
    {/*WRITE A TASK*/}
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder='WRITE YOUR LOVE STORY'/>

        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#E8EAED',
    
  },
  tasksWrapper:{
    padding:80,
    paddingHorizontal:20,
  },
  sectiontitle:{
    fontWeight:'bold',
    fontSize:24,

  },
  mac:{
    fontWeight:'bold',
    fontSize:24,
    marginTop:400,
    marginLeft:125,
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-around', 
    alignItems:'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,


  },
  addText:{},
  
});

