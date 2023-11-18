import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import Title from "../components/ui/Title";
import { colors } from "../utils";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function StartGameScreen({ sendUserGuess }) {
	const [enteredNumber, setEnteredNumber] = useState("");
	function handleTextInputChange(value) {
		if (parseInt(value) < 1) {
			setEnteredNumber("");
			Alert.alert("Warning", "Number must be between 1 - 99", [
				{
					text: "Okay",
					onPress: () => setEnteredNumber(""),
					style: "destructive",
				},
			]);
		} else {
			setEnteredNumber(value);
		}
	}
	function resetHandler() {
		setEnteredNumber("");
	}

	function confirmHandler() {
		const userGuess = parseInt(enteredNumber);
		sendUserGuess(userGuess);
		setEnteredNumber("");
	}
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
						maxLength={2}
						autoFocus={true}
						value={enteredNumber}
						onChangeText={handleTextInputChange}
						inputMode="numeric"
						keyboardAppearance="dark"
						selectionColor={colors.accent500}
					></TextInput>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
					<PrimaryButton onPress={confirmHandler}>
						Confirm
					</PrimaryButton>
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
