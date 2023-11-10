import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const Header = ({ headerText, headerIcon }) => {
	const navigation = useNavigation();
	
	return (
		<View style={{ flexDirection: "row", marginTop:70 }}>
			<Text style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
				{headerText}
			</Text>

			<FontAwesome name={headerIcon} size={24}style={{ marginRight:40}} color="#f96163" onPress={() => navigation.navigate("Favorite")}/>
			<Text onPress={()=>navigation.navigate("Profile")}>Profile</Text>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({});
