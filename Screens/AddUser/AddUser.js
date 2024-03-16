import React from 'react'
import {View , Text , Button ,Image,TextInput, StyleSheet , ScrollView , styles, TouchableOpacity} from 'react-native'
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import { StackActions } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import axios from 'axios';

function AddUser({navigation}){
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
  
    const CreateUser = async() => {
    
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
            await axios.post('http://172.20.10.6:5000/CreateUser' ,
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
        <ScrollView showsVerticalScrollIndicator={false} style={{height:'100%',backgroundColor:'white'}}>
        <View style={{ marginTop:'15%' , marginBottom:'5%'}}>
            <Text style={{fontSize:20 ,color:"#000", textAlign:"center",  } }>
              إضافة مستخدم 
            </Text>
        </View>
<View style={{ 
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

    <Button title='إضافة' color="#000"  onPress={CreateUser}/>
    </ScrollView>
    </>
    )
}
    
export default AddUser;
