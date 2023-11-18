import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../utils";

export default function Card({ children }) {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.cardInnerContainer}>{children}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	cardContainer: {
		marginTop: 30,
		alignItems: "center",
	},
	cardInnerContainer: {
		padding: 20,
		paddingHorizontal: 30,
		backgroundColor: colors.primary800,
		borderRadius: 10,
	},
});
