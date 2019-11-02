import React from "react";
import {
	Navbar,
	Page,
	List,
	ListInput,
	Button,
} from "framework7-react";
import BottomBar, { Pages } from "../bottomBar/BottomBar";

const AddCategoriesPage: React.FC = props => {
	return (
		<Page>
			<Navbar title="Добавить категорию" backLink />
			<BottomBar tabIndex={Pages.settings} />
			<List noHairlinesMd>
				<ListInput
					label="Имя категории"
					type="text"
					placeholder="Введите название категории"
					clearButton
				/>
				{/* <ListInput
					type="colorpicker"
					label="Palette"
					placeholder="Color"
					readonly
					value={{ hex: "#FFEBEE" } as any}
					colorPickerParams={{
						modules: ["palette"],
						openIn: "auto",
						openInPhone: "sheet",
						palette: [
							[
								"#FFEBEE",
								"#FFCDD2",
								"#EF9A9A",
								"#E57373",
								"#EF5350",
								"#F44336",
								"#E53935",
								"#D32F2F",
								"#C62828",
								"#B71C1C"
							],
							[
								"#F3E5F5",
								"#E1BEE7",
								"#CE93D8",
								"#BA68C8",
								"#AB47BC",
								"#9C27B0",
								"#8E24AA",
								"#7B1FA2",
								"#6A1B9A",
								"#4A148C"
							],
							[
								"#E8EAF6",
								"#C5CAE9",
								"#9FA8DA",
								"#7986CB",
								"#5C6BC0",
								"#3F51B5",
								"#3949AB",
								"#303F9F",
								"#283593",
								"#1A237E"
							],
							[
								"#E1F5FE",
								"#B3E5FC",
								"#81D4FA",
								"#4FC3F7",
								"#29B6F6",
								"#03A9F4",
								"#039BE5",
								"#0288D1",
								"#0277BD",
								"#01579B"
							],
							[
								"#E0F2F1",
								"#B2DFDB",
								"#80CBC4",
								"#4DB6AC",
								"#26A69A",
								"#009688",
								"#00897B",
								"#00796B",
								"#00695C",
								"#004D40"
							],
							[
								"#F1F8E9",
								"#DCEDC8",
								"#C5E1A5",
								"#AED581",
								"#9CCC65",
								"#8BC34A",
								"#7CB342",
								"#689F38",
								"#558B2F",
								"#33691E"
							],
							[
								"#FFFDE7",
								"#FFF9C4",
								"#FFF59D",
								"#FFF176",
								"#FFEE58",
								"#FFEB3B",
								"#FDD835",
								"#FBC02D",
								"#F9A825",
								"#F57F17"
							],
							[
								"#FFF3E0",
								"#FFE0B2",
								"#FFCC80",
								"#FFB74D",
								"#FFA726",
								"#FF9800",
								"#FB8C00",
								"#F57C00",
								"#EF6C00",
								"#E65100"
							]
						],
						formatValue(value) {
							return value.hex;
						}
					}}
				/> */}
				<Button color="green">Сохранить</Button>
			</List>
		</Page>
	);
};

export default AddCategoriesPage;
