import React from "react";
import { Page, Navbar, List, ListInput } from "framework7-react";
import BottomBar, { Pages } from "../bottomBar/BottomBar";

const AddPurchasePage: React.FC = props => {
	return (
		<Page>
			<Navbar title="Добавить покупку" backLink />
			<List>
				<ListInput
					label="Название категории"
					type="text"
					errorMessage="Введите, пожалуйста, название категории"
					validate
					required
					clearButton
				/>
				<ListInput
					label="Лимит на категрию"
					type="number"
					errorMessage="Введите, пожалуйста, лимит по категории"
					validate
					required
					clearButton
				/>
			</List>
			<BottomBar tabIndex={Pages.categories} />
		</Page>
	);
};

export default AddPurchasePage;
