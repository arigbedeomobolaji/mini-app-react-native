import { StyleSheet, View, Text, TextInput } from "react-native";
import Title from "../components/ui/Title";
import { colors } from "../utils";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function StartGameScreen() {
	return (
		<View style={styles.container}>
			<Title>Guess My Number</Title>
			<View style={styles.inputContainer}>
				<View style={styles.inputTextLabelContainer}>
					<Text style={styles.inputTextLabel}>Enter a Number</Text>
				</View>
				<View style={styles.textInputContainer}>
					<TextInput
						style={styles.textInput}
						keyboardType="number-pad"
						maxLength={2}
						autoFocus={false}
					></TextInput>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton>Reset</PrimaryButton>
					<PrimaryButton>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	inputContainer: {
		backgroundColor: colors.primary800,
		borderRadius: 10,
		marginTop: 30,
		padding: 20,
		paddingHorizontal: 30,
	},
	inputTextLabelContainer: {
		alignItems: "center",
	},
	inputTextLabel: {
		color: colors.accent500,
		fontSize: 24,
		fontFamily: "open-sans-medium",
	},
	textInputContainer: {
		marginTop: 14,
		alignItems: "center",
	},
	textInput: {
		width: "30%",
		borderBottomColor: colors.accent500,
		borderBottomWidth: 3,
		color: "#fff",
		fontFamily: "open-sans-bold",
		textAlign: "center",
		fontSize: 48,
		padding: 4,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
	},
});
