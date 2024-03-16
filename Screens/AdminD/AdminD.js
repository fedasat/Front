import React from 'react'
import {View , Text , Button , StyleSheet , Image, TouchableOpacity , FlatList , listTab , map } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import  Ionicons  from 'react-native-vector-icons/Ionicons';



function AdminD({navigation}){
    const [data , setdata] = React.useState([]);

  const handleGetUsers = () =>{
    axios.get(
        'http://172.20.10.6:5000/getallUser' ).then(
            (response)=>setdata(response.data.data)
        ).catch((error)=>
            console.log('problem',error))
  }

React.useEffect(()=>{
    handleGetUsers();
         
            },[])
 
    const DeleteUser = async(id) => {
        await axios.delete(`http://172.20.10.6:5000/DeleteUser/${id}`)
        .then((res)=>{
            console.log( res.data)
        }).catch((error)=>
            console.log('problem',error))
            handleGetUsers();
         }
    
    const UpdateUser = async(id) => {
        await axios.put(`http://172.20.10.6:5000/UpdateUser/${id}`,)
        .then(
            (response)=>setdata(response.data.data))
    }
    return(
      <>
    <SafeAreaView  style={{height:'100%',backgroundColor:'white'}}>
        <View style={{ marginTop:'5%' , marginBottom:'5%'}}>
            <Text style={{fontSize:20 ,color:"#000", textAlign:"center", } }>
            إدارة الأطباء  
            </Text>
        </View>
            <FlatList
                   keyExtractor={(item) => item._id}
                data={data}
                renderItem={({item}) => (
             <View style={{height:80, backgroundColor:'#d7d9db' , marginBottom:5, padding:20}}>
            <Text style={{fontSize:12 ,color:"#fff" , marginStart:"auto"}} >{item.firstName}</Text>
            <Text style={{fontSize:12 ,color:"#fff" , marginStart:"auto"}} >{item.secondName}</Text>
            <Text style={{fontSize:12 ,color:"#fff" , marginStart:"auto"}} >{item.lastName}</Text>
            <Text style={{fontSize:12 ,color:"#fff" , marginStart:"auto"}} >  </Text>
            <View style={{flexDirection:'row'}}   >
            <Button title='حذف' color="#000" onPress={() => DeleteUser(item._id)} />
            <Button title='تعديل' color="#000"  onPress={() =>UpdateUser(item._id)} />
            </View>
            </View>
                    )}   
            />
                <View style={{flexDirection :'row' ,justifyContent:'space-around', padding:1}} >

    <Button title='إضافة' color="#000"  onPress={()=>navigation.navigate('AddUser')} />  
  </View>
    </SafeAreaView>

      </>
      )
    }
    export default AdminD;
   