/*import React ,{useCallback,useEffect,useState} from "react";
import { View } from "react-native";
import { GiftedChat , Bubble } from 'react-native-gifted-chat'
import { MaterialCommunityIcon } from "react-native-vector-icons/MaterialCommunityIcons"; 
//import { MaterialCommunityIcon } from "react-native-vector-icons/FontAwesome"; 

function Chat(){
    const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const renderSend = (props) => {
return (
    <send {...props}>
<View>
<MaterialCommunityIcon
 name='send-circle' 
 size={32}
  style={{marginBottom:5,marginRight:5}} 
  color='#2e645' />
</View>
    </send>
)
  }

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  const renderBubble =(props) => {
    return(
<Bubble
    {...props}
    wrapperStyle={{
        right:{
            backgroundColor:'#2e64e5'

        }
    }}
    textStyle={{
        right:{
            color:'#fff'
        }
    }}
/>
    )
  }
 
  const scrollToBottomComponent = () => {
    return(
<FontAwesome name='angle-double-down' size={22} color='#333' />
    )
  }

    return(
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
    )
}

export default Chat;*/
/*
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  // Function to send a message
  const sendMessage = () => {
    // Code to send message to backend (e.g., via API)
    // After sending, update messages state
    setMessages([...messages, { text: inputText, fromUser: true }]);
    setInputText('');
  };

  useEffect(() => {
    // Code to fetch messages from backend
    // Update messages state with fetched messages
    // Example:
    // setMessages([ { text: 'Hello', fromUser: false }, { text: 'Hi', fromUser: true }]);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={{ alignSelf: item.fromUser ? 'flex-end' : 'flex-start' }}>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, borderWidth: 1, borderColor: 'gray', borderRadius: 5, margin: 5, padding: 10 }}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

export default ChatScreen;*/

import React from "react";
import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import ChatComponent from "../Component/ChatComponent";
import { styles } from "../../utils/styles";
import Modal from "../Component/Modal";

const [rooms, setRooms] = React.useState([]);

//👇🏻 Runs when the component mounts
React.useLayoutEffect(() => {
    function fetchGroups() {
        fetch("http://172.20.10.6:5000/api")
            .then((res) => res.json())
            .then((data) => setRooms(data))
            .catch((err) => console.error(err));
    }
    fetchGroups();
}, []);

//👇🏻 Runs whenever there is new trigger from the backend
React.useEffect(() => {
    socket.on("roomsList", (rooms) => {
        setRooms(rooms);
    });
}, [socket]);
const Chat = () => {

    //👇🏻 Dummy list of rooms
    const rooms = [
        {
            id: "1",
            name: "Novu Hangouts",
            messages: [
                {
                    id: "1a",
                    text: "Hello guys, welcome!",
                    time: "07:50",
                    user: "Tomer",
                },
                {
                    id: "1b",
                    text: "Hi Tomer, thank you! 😇",
                    time: "08:50",
                    user: "David",
                },
            ],
        },
        {
            id: "2",
            name: "Hacksquad Team 1",
            messages: [
                {
                    id: "2a",
                    text: "Guys, who's awake? 🙏🏽",
                    time: "12:50",
                    user: "Team Leader",
                },
                {
                    id: "2b",
                    text: "What's up? 🧑🏻‍💻",
                    time: "03:50",
                    user: "Victoria",
                },
            ],
        },
    ];

    return (
        <SafeAreaView style={styles.chatscreen}>
            <View style={styles.chattopContainer}>
                <View style={styles.chatheader}>
                    <Text style={styles.chatheading}>Chats</Text>

                  
 {/* Displays the Modal component when clicked */}
 <Pressable onPress={() => setVisible(true)}>
                        <Feather name='edit' size={24} color='green' />
                    </Pressable>


            {/* 👇🏻 Logs "ButtonPressed" to the console when the icon is clicked */}
                    <Pressable onPress={() => console.log("Button Pressed!")}>
                        <Feather name='edit' size={24} color='green' />
                    </Pressable>
                </View>
            </View>

            <View style={styles.chatlistContainer}>
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <ChatComponent item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View style={styles.chatemptyContainer}>
                        <Text style={styles.chatemptyText}>No rooms created!</Text>
                        <Text>Click the icon above to create a Chat room</Text>
                    </View>
                )}
            </View>

            <View style={styles.chatlistContainer}>...</View>
            {/*
                Pass setVisible as prop in order to toggle 
                the display within the Modal component.
            */}
            {visible ? <Modal setVisible={setVisible} /> : ""}
        </SafeAreaView>
    );
};

export default Chat;
