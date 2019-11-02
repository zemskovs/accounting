import React, { useEffect, useState } from "react";
import {
	Page,
	Navbar,
	BlockTitle,
	List,
	ListItem,
	Subnavbar,
	Searchbar
} from "framework7-react";

import BottomBar, { Pages } from "../bottomBar/BottomBar";

const CategoriesPage: React.FC = props => {
	const [categories, setCategories] = useState();

	useEffect(() => {
		if (!categories)
			fetch(
				"https://zemskovs.github.io/accounting/src/demoData/categories.json"
			)
				.then(x => x.json())
				.then(x => setCategories(x.categories));
	});
	debugger
	return (
		<Page>
			<Navbar title="Категории">
				<Subnavbar inner={false}>
					<Searchbar
						searchContainer=".search-list"
						searchIn=".item-title"
						disableButton={false}
					></Searchbar>
				</Subnavbar>
			</Navbar>
			<BlockTitle>Добавить покупки</BlockTitle>
			<List>
				<ListItem title="Link 1" link="#"></ListItem>
				<ListItem title="Link 2" link="#"></ListItem>
				<ListItem title="Link 3" link="#"></ListItem>
			</List>
			<BottomBar tabIndex={Pages.categories} />
		</Page>
	);
};

export default CategoriesPage;
