import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import { colors } from "../utils";
import NumberTitle from "../components/NumberTitle";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import ListItem from "../components/ui/ListItem";

let min = 1;
let max = 99;

export default function GameScreen({ userGuess, handleGameIsOver }) {
	const [currentGuess, setCurrentGuess] = useState(null);
	const [guessList, setGuessList] = useState([]);

	function generateRndNumber(direction) {
		if (currentGuess === userGuess) {
			setCurrentGuess(currentGuess);
			return;
		}
		if (
			(currentGuess < userGuess && direction === "lower") ||
			(currentGuess > userGuess && direction === "higher")
		) {
			return Alert.alert("Integrity Up!", "We both know you're lying", [
				{
					text: "Choose the right Direction",
					style: "destructive",
				},
			]);
		}
		let newGuess;
		if (direction === "lower") {
			max = currentGuess + 1;
			newGuess = generateRangedRandomNumber(min, max, max - 1);
		} else {
			min = currentGuess + 1;
			newGuess = generateRangedRandomNumber(min, max, min);
		}
		setCurrentGuess(newGuess);
		setGuessList((prevGuessList) => [newGuess, ...prevGuessList]);
	}

	useEffect(() => {
		const initialGuess = generateRangedRandomNumber(min, max, userGuess);
		setCurrentGuess(initialGuess);
		setGuessList((prevGuessList) => [initialGuess, ...prevGuessList]);
	}, []);

	useEffect(() => {
		if (currentGuess === userGuess) {
			handleGameIsOver(guessList.length);
		}
	}, [currentGuess, userGuess]);

	function generateRangedRandomNumber(min, max, exclude) {
		let randNumber = Math.floor(Math.random() * (max - min)) + min;
		if (max === min) {
			return randNumber;
		}
		if (
			randNumber === exclude &&
			(min !== randNumber || max !== randNumber)
		) {
			randNumber = generateRangedRandomNumber(min, max, exclude);
		}
		return randNumber;
	}
	return (
		<View>
			{/* Opponent Guess Text Title */}
			<Title>Opponent's Guess</Title>
			{/* Computer Generated Guess */}
			<NumberTitle>{currentGuess}</NumberTitle>
			{/* USer Select Either High or Low */}
			<Card>
				<View style={styles.guessDirection}>
					<Text style={styles.guessDirectionTitle}>
						Higher or lower?
					</Text>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton
						onPress={generateRndNumber.bind(this, "lower")}
						style={styles.customStyle}
					>
						<Ionicons name="remove" size={30} color="white" />
					</PrimaryButton>
					<PrimaryButton
						onPress={generateRndNumber.bind(this, "higher")}
						style={styles.customStyle}
					>
						<Ionicons name="add" size={30} color="white" />
					</PrimaryButton>
				</View>
			</Card>
			{/* Display Everything the User has Show */}
			<FlatList
				data={guessList}
				renderItem={({ item, index }) => {
					return (
						<ListItem
							attemptNumber={guessList.length - index}
							guess={item}
						/>
					);
				}}
				keyExtractor={(item) => item + Math.random()}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	guessDirection: {
		alignItems: "center",
	},
	guessDirectionTitle: {
		color: colors.accent500,
		fontSize: 30,
		fontFamily: "open-sans-medium",
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	customStyle: {
		backgroundColor: colors.primary400,
		width: "100%",
		paddingHorizontal: 35,
		paddingVertical: 5,
	},
});
