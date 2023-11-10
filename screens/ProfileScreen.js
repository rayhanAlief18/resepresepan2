import { StyleSheet, Text, View, Image, TouchableOpacity,SafeAreaView,Pressable } from "react-native";
import React from "react";
import Avatar from "../assets/images/avatar.png";
import { FontAwesome } from "@expo/vector-icons";


const ProfileScreen = ({ }) => {
    
	return (
		<View style={{ flex: 1, paddingRight:20,paddingLeft:20}}>
            <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16, marginTop: 55 }}>
				<Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
					<FontAwesome name={"arrow-circle-left"} size={28} color="white" />
				</Pressable>

				<FontAwesome name={"heart-o"} size={28} color="white" />
			</SafeAreaView>
			<SafeAreaView style={{ backgroundColor:"grey",borderRadius:10,padding:10,alignItems: "center" ,flexDirection: "column", marginHorizontal: 16, marginTop: 55 }}>
                <Image style={{}} source={require("../assets/images/avatar.png")}></Image>
                <Text>Joseph Joestar</Text>

            </SafeAreaView>
            <View style={{flex:1,flexDirection:"column", gap:10, marginTop:20,padding:20,backgroundColor: 'pink',borderWidth: 1, borderTopLeftRadius:10, borderTopRightRadius:10}}>
            <Text style={{fontSize:20}}>Account Info</Text>
                <Text>Nama : Joseph Joestar</Text>
                <Text>No Telp : Umur</Text>
                <Text>Email : Umur</Text>
            </View>
		</View>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({});
