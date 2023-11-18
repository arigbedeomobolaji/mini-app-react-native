import { useEffect, useCallback, useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "./utils";
import StartGameScreen from "./screens/StartGameScreen";
import PrimaryButton from "./components/ui/PrimaryButton";
import GameScreen from "./screens/GameScreen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
	const [userGuess, setUserGuess] = useState();
	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
		"open-sans-medium": require("./assets/fonts/OpenSans-Medium.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
	});

	const onLayoutRootView = useCallback(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	function handleUserGuess(userInput) {
		setUserGuess(userInput);
	}

	let screen = <StartGameScreen sendUserGuess={handleUserGuess} />;

	if (userGuess) {
		screen = <GameScreen />;
	}
	return (
		<LinearGradient
			colors={[colors.primary800, colors.accent500]}
			style={styles.rootScreen}
			onLayout={onLayoutRootView}
		>
			<ImageBackground
				source={require("./assets/images/dice.jpg")}
				resize="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.safeAreaView}>
					{screen}
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		flex: 1,
		width: "100%",
		opacity: 0.15,
	},
	safeAreaView: {
		marginTop: 20,
		marginHorizontal: 8,
	},
});
