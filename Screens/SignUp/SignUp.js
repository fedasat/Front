import React, { useState } from 'react'
import {View , Text , Button ,Image,TextInput,  ScrollView , TouchableOpacity} from 'react-native'
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import { StackActions } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import axios from 'axios';

function SignUp({navigation}){
  const[date , setDate] = useState(new Date())
  const[open , setOpen] = useState(false)

  const [firstName , setFirstName] = React.useState('');
  const [secondName , setSecondName] =React.useState('');
  const [lastName , setLastName] = React.useState('');
  const [email , setEmail] = React.useState('');
  const [birthDate , setBirthDate] =React.useState('');
  const [phone , setPhone] = React.useState('');
  const [location , setLocation] =React.useState('');
  const [image , setImage] = React.useState('');
  const [jobTitle , setJobTitle] =React.useState('');
  const [specialization , setSpecialization] =React.useState('');
  const [password ,setPassword ] = React.useState('');
  const [confirmPassword , setConfirmPassword] =React.useState('');


  const SignUpUser = async() => {
    
    if(!firstName || !secondName || !lastName|| !email || !birthDate || !phone||
      !location || !image || !jobTitle || !specialization || !password || !confirmPassword ){ 
      setTimeout(() => {
       Toast.show({
         type:'error',
         text1:' الرجاء ادخال جميع البيانات '
       
       })
      },200); return
     }
     
     if(firstName.trim() =="" || secondName.trim() =="" || lastName.trim() =="" ||
     email.trim() =="" || birthDate.trim() =="" || phone.trim() =="" ||
      location.trim() =="" || image.trim() =="" || jobTitle.trim() =="" ||
       specialization.trim() =="" || password.trim() =="" || confirmPassword.trim() =="" ){
          setTimeout(() => {
           Toast.show({
             type:'error',
             text1:' الرجاء التأكد من البيانات '
           
           })
          },200); return
         }
         else{
        await axios.post('http://172.20.10.6:5000/SignUpUser' ,
         {
            firstName:firstName,
            secondName:secondName,
            lastName:lastName,
            email:email,
            birthDate:birthDate,
            phone:phone,
            location:location,
            image:image,
            jobTitle:jobTitle,
            specialization:specialization,
            password:password,
            confirmPassword:confirmPassword
}
).then(response => {
    // Handle successful response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error
    console.log(error)
    // console.log('Error:', error.message);
    // console.log('Request Config:', error.config);
    
    // // You can access properties of the request configuration like this
    // console.log('Request URL:', error.config.url);
    // console.log('Request Method:', error.config.method);
    // console.log('Request Headers:', error.config.headers);
    // And so on...
  });}
navigation.dispatch(StackActions.replace("AdminD" , {
 catch(e){
 console.log('خطأ في تخزين البيانات',e)
   } } ))
}
   
return(
<>
<ScrollView showsVerticalScrollIndicator={false}>
<View  >
    <Image 
    style={{height:500 , width:500}}
    source={{uri:"data:image/png;base64,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"}}/>
    </View>

<View>
  <Text></Text>
  <Text></Text>
</View>
    <View
     style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
     marginRight:6,
      marginLeft:6}}>
       <TextInput placeholder='الاسم الأول' style={{padding: 10 ,marginStart:"auto" }} 
         onChangeText={setFirstName} value={firstName}/>
      <Ionicons name="person-outline" size={29} color="#666" />
     
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6 }}>
      <TextInput placeholder='الاسم التاني'style={{padding: 10 ,marginStart:"auto"}}    
     onChangeText={setSecondName} value={secondName}/>
        <Ionicons name="person-outline" size={29} color="#666" style={{marginRight:1}}/>
      
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6 }}>
            <TextInput placeholder='اللقب' style={{padding: 10 ,marginStart:"auto"}} 
             onChangeText={setLastName} value={lastName} />
     <Ionicons name="person-outline" size={29} color="#666" style={{marginRight:1}}/>
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6}}>
       <TextInput placeholder='البريد الالكتروني ' style={{padding: 10 ,marginStart:"auto"}} 
         onChangeText={setEmail} value={email} />
      <Ionicons name="mail-outline" size={29} color="#666" style={{marginRight:1}}/>
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6}}>
         <TextInput placeholder=' تاريخ الميلاد ' style={{padding: 10 ,marginStart:"auto"}}  
          onChangeText={setBirthDate} value={birthDate} />
        <Ionicons name="call-outline" size={29} color="#666" style={{marginRight:1}}/>
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6}}>
         <TextInput placeholder='رقم الهاتف ' style={{padding: 10 ,marginStart:"auto"}}  
          onChangeText={setPhone} value={phone} />
        <Ionicons name="call-outline" size={29} color="#666" style={{marginRight:1}}/>
    </View>


    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6}}>
            <TextInput placeholder='العنوان ' style={{padding: 10 ,marginStart:"auto"}}
              onChangeText={setLocation} value={location} />
     <Ionicons name="location-outline" size={29} color="#666" style={{marginRight:1}}/>

    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6}}>
          <TextInput placeholder='الصورة الشخصصية ' style={{padding: 10 ,marginStart:"auto"}}
            onChangeText={setImage} value={image} />
   <Ionicons name="image-outline" size={29} color="#666" style={{marginRight:1}}/>
  
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6 }}>
        <TextInput placeholder=' المسمى الوضيفي ' style={{padding: 10 ,marginStart:"auto"}}
          onChangeText={setJobTitle} value={jobTitle} />
       <Ionicons name="document-outline" size={29} color="#666" style={{marginRight:1}}/>
    
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6 }}>
            <TextInput placeholder=' التخصص ' style={{padding: 10 ,marginStart:"auto"}}  
                onChangeText={setSpecialization} value={specialization}
            />
      <Ionicons name="document-outline" size={29} color="#666" style={{marginRight:1}}/>

    </View>


    <View style={{
      flexDirection:'row' ,
      borderBottomColor:'#ccc' ,
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6}}>
            <TextInput placeholder='كلمة المرور' secureTextEntry={true} style={{padding: 10 ,marginStart:"auto"}}
                onChangeText={setPassword} value={password}
            />

      <Ionicons name="bag-outline" size={29} color="#666" style={{marginRight:1}}/>
    </View>

    <View style={{ 
      flexDirection:'row' , 
      borderBottomColor:'#ccc' , 
      borderBottomWidth:2 ,
      paddingBottom:2 ,
      marginBottom:20,
      marginRight:6,
      marginLeft:6}}>
            <TextInput placeholder=' تأكيد كلمة المرور ' secureTextEntry={true} style={{padding: 10 ,marginStart:"auto"}}
              onChangeText={setConfirmPassword} value={confirmPassword}/>

        <Ionicons name="bag-outline" size={29} color="#666" style={{marginRight:1}}/>
    </View>

    <Button title='تسجيل الدخول' color="#000"  onPress={SignUpUser}/>

    <View style={{flexDirection :'row' ,justifyContent:'center'}}>
  <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
  <Text style={{textAlign:'center' , color:'#ccc' , fontSize:12}}> تسجيل </Text>
  </TouchableOpacity>
  <Text  style={{textAlign:'center' , color:'#000' , fontSize:12}}> لديك حساب؟</Text>
  </View>
  
    <View>
 <Text></Text>
    </View>
</ScrollView>

</>
)
}

export default SignUp;