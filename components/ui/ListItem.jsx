import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils";

export default function ListItem({ attemptNumber, guess }) {
	return (
		<View style={styles.listContainer}>
			<LinearGradient
				colors={[colors.primary400, colors.accent500]}
				style={styles.listInnerContainer}
			>
				<View style={styles.textContainer}>
					<Text style={styles.text}>#{attemptNumber}</Text>
					<Text style={styles.text}>
						Opponent's Guess:
						<Text style={styles.guessText}>{guess}</Text>
					</Text>
				</View>
			</LinearGradient>
		</View>
	);
}

const styles = StyleSheet.create({
	listContainer: {
		marginVertical: 8,
		alignItems: "center",
	},
	listInnerContainer: {
		padding: 10,
		paddingVertical: 12,
		borderWidth: 2,
		borderColor: colors.primary400,
		borderRadius: 20,
		width: "80%",
	},
	textContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	text: {
		fontFamily: "open-sans",
		fontSize: 16,
		color: "#fff",
	},
	guessText: {
		fontSize: 18,
	},
});
