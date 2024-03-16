import React, { useState } from 'react'
import {View , Text , Button ,Image,TextInput, StyleSheet , ScrollView , styles, TouchableOpacity} from 'react-native'
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
function Ricetta({navigation}){

    const [patientName , setPatientName] = React.useState('');
    const [patientAge , setPatientAge] = React.useState('');
    const [patientSex , setPatientSex] = React.useState('');
    const [drug , setDrug] = React.useState('');
    const [usageTime , setUsageTime] = React.useState('');
    const [usage , setUsage] = React.useState('');
    const [usePeriod , setUsePeriod] = React.useState('');
    const [note , setNote] = React.useState('');
    const [date , setDate] = useState(new Date());
    const [doctor , setDoctor] = React.useState('');


    const CreateRicetta = async() => {
    
      if(!patientName || !patientAge || !patientSex|| !drug || !usageTime || !usage||
        !usePeriod || !note || !date || !doctor ){ 
        setTimeout(() => {
         Toast.show({
           type:'error',
           text1:' الرجاء ادخال جميع البيانات '
         
         })
        },200); return
       }
       
       if(patientName.trim() =="" || patientAge.trim() =="" || patientSex.trim() =="" ||
       drug.trim() =="" || usageTime.trim() =="" || usage.trim() =="" ||
       usePeriod.trim() =="" || note.trim() =="" || date.trim() =="" ||
       doctor.trim() ==""){
            setTimeout(() => {
             Toast.show({
               type:'error',
               text1:' الرجاء التأكد من البيانات '
             
             })
            },200); return
           }
           else{
          const response = await axios.post('http://172.20.10.6:5000/CreateRicetta' ,
           {
            patientName:patientName,
            patientAge:patientAge,
            patientSex:patientSex,
            drug:drug,
            usageTime:usageTime,
            usage:usage,
            usePeriod:usePeriod,
            note:note,
            date:date,
            doctor:doctor,
  }).then(response => {
      // Handle successful response
      console.log('Response:', response.data);
    })
    .catch(error => {
      // Handle error
      console.log('Error:', error.message);
      console.log('Request Config:', error.config);
      
      // You can access properties of the request configuration like this
      console.log('Request URL:', error.config.url);
      console.log('Request Method:', error.config.method);
      console.log('Request Headers:', error.config.headers);
      // And so on...
    });}
  navigation.dispatch(StackActions.replace("AdminD" , {
    catch(e){
  console.log('خطأ في تخزين البيانات',e)
    } } ))
  }
   
return(
<>
<SafeAreaView  style={{ 
     flexDirection:'row',
      paddingTop:1 ,
      marginTop:20 }}>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{ marginTop:'5%' , marginBottom:'5%'}}>
            <Text style={{fontSize:20 ,color:"#000", textAlign:"center", } }>
              الوصفة الطبية
            </Text>
        </View>
    <View
     style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginLeft:6 }}>
      <TextInput placeholder='الإسم :' style={{padding: 10 ,marginStart:"auto"}} 
      onChangeText={setPatientName} value={patientName} />
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginLeft:6 }}>
      <TextInput placeholder='العمر :'style={{padding: 10 ,marginStart:"auto"}} 
      onChangeText={setPatientAge} value={patientAge} />
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginLeft:6 }}>
      <TextInput placeholder='الجنس :' style={{padding: 10 ,marginStart:"auto"}}
      onChangeText={setPatientSex} value={patientSex}   />
    </View>
   
   <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginLeft:6 }}>
      
      <TextInput placeholder='الدواء : ' style={{padding: 10 ,marginStart:"auto"}} 
      onChangeText={setPatientAge} value={patientAge}  />
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginLeft:6 }}>
       
      <TextInput placeholder='الجرعة : ' style={{padding: 10 ,marginStart:"auto"}}
       onChangeText={setDrug} value={drug}   />
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginLeft:6 }}>

      <TextInput placeholder='الوقت : ' style={{padding: 10 ,marginStart:"auto"}} 
      onChangeText={setUsageTime} value={usageTime}  />
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginLeft:6 }}>
  
      <TextInput placeholder='المدة : ' style={{padding: 10 ,marginStart:"auto"}} 
       onChangeText={setUsage} value={usage}  />
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginLeft:6 }}>

      <TextInput placeholder='فترة : ' style={{padding: 10 ,marginStart:"auto"}} 
      onChangeText={setUsePeriod} value={usePeriod}  />
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginLeft:6 }}>
      <TextInput placeholder='الملاحظات : ' style={{padding: 10 ,marginStart:"auto"}} 
       onChangeText={setNote} value={note}  />
    </View>
    
    <View style={{flexDirection :'row' ,justifyContent:'space-around'}}>
      <TextInput placeholder='التاريخ : ' style={{padding: 10}} 
       onChangeText={setDate} value={date}  />
      <TextInput placeholder='الطبيب : ' style={{padding: 10}} 
       onChangeText={setDoctor} value={doctor}  />
    </View>

<View  style={{padding: 10 , marginEnd:'auto'}}   >
<Button title=' إرسال' color="#000"  onPress={CreateRicetta}/>
</View>

  
  

</ScrollView>
</SafeAreaView>
</>
)
}

export default Ricetta;