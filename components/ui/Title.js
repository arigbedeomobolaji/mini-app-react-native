import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils";

export default function Title({ children }) {
	return (
		<View style={styles.titleContainer}>
			<Text style={styles.title}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		marginTop: 80,
		borderWidth: 4,
		borderColor: "#fff",
		padding: 8,
		paddingHorizontal: 20,
	},
	title: {
		color: "#fff",
		fontFamily: "open-sans-bold",
		fontSize: 24,
		padding: 8,
	},
});
