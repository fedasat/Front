import React from 'react'
import {View , Text , Button , StyleSheet , Image, TouchableOpacity , FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

function AdminPH({navigation}){
    const [data , setdata] = React.useState([
        {name: 'feda' , id:'1'},
        {name: 'fadwa' , id:'2'},
        {name: 'fayza' , id:'3'},
        {name: 'bader' , id:'4'},
        {name: 'suleiman' , id:'5'},
        {name: 'fatma' , id:'6'},
    ]);
    return(
      <>
    <SafeAreaView  style={{height:'100%',backgroundColor:'white'}}>
        <View style={{ marginTop:'5%' , marginBottom:'5%'}}>
            <Text style={{fontSize:20 ,color:"#000", textAlign:"center", } }>
            إدارة الصيادلة  
            </Text>
        </View>
        <View style={{height:'auto'}}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={data}
                renderItem={({item}) => (
                    <View style={{height:80, backgroundColor:'#d7d9db' , marginBottom:5, padding:20}}>
                        <Text 
                        style={{fontSize:12 ,color:"#fff" , marginStart:"auto"}} >{item.name}
                        </Text>
                    </View>)} 
            />
        </View>
        <View style={{flexDirection :'row' ,justifyContent:'space-around', padding:10}} >
            
                <Button title='تعديل' color="#000"  />
                <Button title='حذف' color="#000"  />
                <Button title='إضافة' color="#000"  />
        </View> 
    </SafeAreaView>

      </>
      )
    }
    export default AdminPH;

