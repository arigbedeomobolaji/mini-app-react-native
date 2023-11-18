import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils";

export default function PrimaryButton({ children, onPress }) {
	return (
		<View style={styles.buttonContainer}>
			<Pressable
				style={({ pressed }) => pressed && styles.pressedStyle}
				android_ripple={true}
				onPress={onPress}
			>
				<View>
					<Text style={styles.button}>{children}</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 20,
		padding: 8,
		margin: 8,
		marginTop: 25,
		paddingHorizontal: 30,
		shadowColor: colors.primary300,
		shadowOffset: { width: -1, height: 1.5 },
		shadowOpacity: 0.3,
		shadowRadius: 2,
		elevation: 20,
		backgroundColor: colors.primary500,
	},
	button: {
		color: "#fff",
		textAlign: "center",
		fontFamily: "open-sans-bold",
		fontWeight: 600,
		paddingHorizontal: 10,
	},
	pressedStyle: {
		opacity: 0.1,
	},
});
