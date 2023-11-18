import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utils";

export default function NumberTitle({ children }) {
	return (
		<View style={styles.NumberTitleContainer}>
			<View style={styles.NumberTitleInnerContainer}>
				<Text style={styles.NumberTitleText}>{children}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	NumberTitleContainer: {
		alignItems: "center",
		marginTop: 16,
	},
	NumberTitleInnerContainer: {
		borderWidth: 4,
		borderColor: colors.accent500,
		paddingVertical: 20,
		paddingHorizontal: 110,
		borderRadius: 15,
	},
	NumberTitleText: {
		fontFamily: "open-sans-bold",
		color: "#ffffff",
		fontSize: 45,
		color: colors.accent500,
	},
});
