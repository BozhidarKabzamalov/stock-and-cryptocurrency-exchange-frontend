import HomeScreen from "@/app/index";
import { render } from "@testing-library/react-native";

describe("<HomeScreen />", () => {
	test("Text renders correctly on HomeScreen", async () => {
		const { getByText } = await render(<HomeScreen />);
		getByText("Hello World");
	});
});
