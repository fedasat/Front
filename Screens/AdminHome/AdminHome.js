import React, { useEffect, useState } from 'react'
import {View , Text , Button , StyleSheet , Image, TouchableOpacity , FlatList ,ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import { TextInput } from 'react-native-gesture-handler';

//const API_ENDPOINT = 'https://randomuser.me/api/';

function AdminHome({navigation}){
   /* const [data , setdata] = React.useState([
        {name: 'feda' , id:'1'},
        {name: 'fadwa' , id:'2'},
        {name: 'fayza' , id:'3'},
        {name: 'bader' , id:'4'},
        {name: 'suleiman' , id:'5'},
        {name: 'fatma' , id:'6'},
    ]);*/
    const [isLoading , setIsLoading] =useState(false);
    const [data , setdata] = useState([])
    const [searchQuery , setSearchQuery] =useState("");
    const [error,setError] =useState(null)
    const [fullData,setFullData] = useState([])

    useEffect(()=>{
        setIsLoading(true);
        fetchData(API_ENDPOINT)
    }, [])

    const fetchData=async(url) => {
        try{
            const response = await fetch(url)
            const json = await response.json();
            setdata(json.results);
            console.log(json.results);
            setIsLoading(false)
        }catch(error){
            setError(error)
                console.log(error)
        }
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
    }

    if(isLoading){
        return(
            <View style={{flex:1, justifyContent:'center' , alignItems:'center'}}>
            <ActivityIndicator size={'large'} color="#ccc"/>
            </View>
        )
    }

    if(error){
        return(
            <View style={{flex:1, justifyContent:'center' , alignItems:'center'}}>
                <Text>
                    Error check your internet:
                </Text>  
            </View>
        )
    }
    
    return(
      <>
    <SafeAreaView  style={{height:'100%',backgroundColor:'white', flex:1}}>

    <TextInput
     placeholder='Search' 
     clearButtonMode='always' 
     autoCapitalize='none'
      autoCorrect={false}
      value={searchQuery}
      onChangeText={(query) => handleSearch(query)}
    style={{paddingHorizontal:20 , 
            paddingVertical:10,
            borderColor:"#ccc",
            borderWidth:1,
            borderRadius:8,
            marginHorizontal:5}}
     />

        <View style={{height:'auto'}}>
            <FlatList
                keyExtractor={(item) => item.login.username}
                data={data}
                renderItem={({item}) => (
                    <View style={{height:80, backgroundColor:'#d7d9db' , marginBottom:5, padding:20}}>
                        <Text 
                        style={{fontSize:12 ,color:"#fff" , marginStart:"auto"}} >
                        {item.email}
                        </Text>
                    </View>)} 
            />
        </View> 
        <View style={{flexDirection :'row' ,justifyContent:'space-around', padding:10}} >
            
            <Button title='إدارةالأطباء' color="#000" onPress={()=>navigation.navigate('AdminD')} />
            <Button title='إدارة الصيادلة' color="#000" onPress={()=>navigation.navigate('AdminPH')}  />
    </View> 
    </SafeAreaView>

      </>
      )
    }
    export default AdminHome;

