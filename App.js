import { useEffect, useCallback } from "react";
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { colors } from "./utils";
import StartGameScreen from "./screens/StartGameScreen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		"open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
		"open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
		"open-sans-medium": require("./assets/fonts/OpenSans-Medium.ttf"),
		"open-sans-bold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
	});

	useEffect(() => {
		(async () => {
			try {
				await SplashScreen.preventAutoHideAsync();
			} catch {
				// handle error
			}
		})();
	}, []);

	const onLayout = useCallback(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<LinearGradient
			// Background Linear Gradient
			colors={[colors.primary800, colors.accent500]}
			style={styles.rootScreen}
			onLayout={onLayout}
		>
			<ImageBackground
				source={require("./assets/images/dice.jpg")}
				resize="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.safeAreaView}>
					<StartGameScreen />
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
