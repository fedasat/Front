import React from 'react'
import {View , Text , Button , StyleSheet , Image, TouchableOpacity , FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

function ShowRcipesPH({navigation}){
    const [data , setdata] = React.useState([]);

    const handleGetRicetta = () =>{
        axios.get(
            'http://172.20.10.6:5000/getAllRicetta' ).then(
                (response)=>setdata(response.data.data)
            ).catch((error)=>
                console.log('problem',error))
      }

      React.useEffect(()=>{
        handleGetRicetta();
                },[])
    return(
      <>
    <SafeAreaView  style={{height:'100%',backgroundColor:'white'}}>
        <View style={{ marginTop:'5%' , marginBottom:'5%'}}>
            <Text style={{fontSize:20 ,color:"#000", textAlign:"center", } }>
            قائمة عرض الوصفات
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
        <View style={{flexDirection :'row' ,justifyContent:'space-around' , padding:10}} >
                <Button title='طباعة' color="#000"  />
                <Button title='إرسال' color="#000"  />
                
        </View> 
    </SafeAreaView>

      </>
      )
    }
    export default ShowRcipesPH;

