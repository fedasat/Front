import React from 'react'
import {View , Text , Button , StyleSheet , Image, TouchableOpacity , FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

function ShowRcipesD({navigation}){
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
        
    const DeleteRicetta = async(id) => {
        await axios.delete(`http://172.20.10.6:5000/DeleteRicetta/${id}`)
        .then((res)=>{
            console.log( res.data)
        }).catch((error)=>
            console.log('problem',error))
            handleGetRicetta();
    }

    const UpdateRicetta = async() => {
        await axios.put('http://172.20.10.6:5000/UpdateRicetta' ,
         {})
    }
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
                keyExtractor={(item) => item._id}
                data={data}
                renderItem={({item}) => (
                    <View style={{height:80, backgroundColor:'#d7d9db' , marginBottom:5, padding:20}}>
                        <Text style={{fontSize:12 ,color:"#fff" , marginStart:"auto"}} >{item.name} </Text>
                        <Button title='تعديل' color="#000" onPress={() => UpdateRicetta(item._id)} />
                        <View style={{flexDirection:'row'}}   >
                <Button title='حذف' color="#000" onPress={() => DeleteRicetta(item._id)}  />
                </View>
                    </View>)} 
            />
        </View>
        <View style={{flexDirection :'row' ,justifyContent:'space-around', padding:10}} >
            

                <Button title='إضافة' color="#000" onPress={()=> navigation.navigate('Ricetta')}  />
        </View> 
    </SafeAreaView>

      </>
      )
    }
    export default ShowRcipesD;

