import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import CategoriesFilter from "../components/CategoriesFilter";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import RecipeCard from "../components/RecipeCard";


const RecipeListScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
			{/* render header */}
			<Header headerText={"AYO MEMASAK "} headerIcon={"bell-o"}/>

			{/* Search Filter */}
			<SearchFilter icon="search" placeholder={"Apa Yang Ingin Kamu Masak?"} />

			{/* Categories filter */}

			<View style={{ marginTop: 10 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
				{/* Categories list */}
				<CategoriesFilter />
			</View>

			{/* Recipe List Filter */}

			<View style={{ marginTop: 10, flex: 1 }}>
				<Text style={{ fontSize: 22, fontWeight: "bold" }}>Recipes</Text>
				{/* Recipes list */}

				<RecipeCard />
			</View>
		</SafeAreaView>
	);
};

export default RecipeListScreen;

const styles = StyleSheet.create({});
