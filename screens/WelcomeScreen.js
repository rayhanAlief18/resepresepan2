import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

const WelcomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center" }}>
			<Image
				source={require("../assets/images/welcome1.png")}
				style={{ marginTop: 20, height:490, width:400}}
			/>

			<Text style={{ color: "#f96163", marginTop:-40, fontSize: 25, fontWeight: "bold", textAlign:"center" }}>
				Resep Mudah Dengan Handphone
			</Text>

			<Text
				style={{
					textAlign:"center",
					fontSize: 14,
					fontWeight: "bold",
					color: "#3c444c",
					marginTop: 10,
					marginBottom: 20,
				}}
			>
				Buat Penglaman Memasak Anda Sekarang !
			</Text>

			<TouchableOpacity
				onPress={() => navigation.navigate("RecipeList")}
				style={{
					backgroundColor: "#f96163",
					borderRadius: 18,
					paddingVertical: 18,
					width: "80%",
					alignItems: "center",
				}}
			>
				<Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
					Get Started
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
