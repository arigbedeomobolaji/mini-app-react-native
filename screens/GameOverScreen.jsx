import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import { colors } from "../utils";
import PrimaryButton from "../components/ui/PrimaryButton";
export default function GameOverScreen({ rounds, userGuess, onRestartGame }) {
	return (
		<View>
			<Title>GAME OVER</Title>
			<View style={styles.imageContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/roadmap.jpg")}
				/>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					Your phone needed{" "}
					<Text style={styles.innerText}>{rounds}</Text> rounds to
					uess the number{" "}
					<Text style={styles.innerText}>{userGuess}</Text>
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<PrimaryButton onPress={onRestartGame}>
					Start Over
				</PrimaryButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	imageContainer: {
		marginTop: 50,
		alignItems: "center",
	},
	image: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: colors.primary400,
	},
	textContainer: {
		marginTop: 30,
		marginHorizontal: 20,
	},
	text: {
		fontSize: 23,
		fontFamily: "open-sans-medium",
		textAlign: "center",
		color: "#000",
	},
	innerText: {
		color: colors.primary400,

		fontFamily: "open-sans-extrabold",
	},
	buttonContainer: {
		alignItems: "center",
	},
});
