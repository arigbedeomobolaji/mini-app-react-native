import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils";

export default function Title({ children }) {
	return (
		<View style={styles.titleContainer}>
			<View style={styles.innerTitleContainer}>
				<Text style={styles.title}>{children}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	titleContainer: {
		marginTop: 80,
		alignItems: "center",
	},
	innerTitleContainer: {
		padding: 8,
		paddingHorizontal: 50,
		borderWidth: 4,
		borderColor: "#fff",
	},
	title: {
		color: "#fff",
		fontFamily: "open-sans-extrabold",
		fontSize: 24,
		padding: 8,
		textAlign: "center",
	},
});
