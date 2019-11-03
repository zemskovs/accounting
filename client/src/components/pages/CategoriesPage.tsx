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
import fetchHook from "../../hooks/fetchHook";

import BottomBar, { Pages } from "../bottomBar/BottomBar";

const CategoriesPage: React.FC = props => {
	const [categories, setCategories] = useState();

	fetchHook(
		"https://zemskovs.github.io/accounting/src/demoData/categories.json",
		res => setCategories(res.categories)
	);

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
			<BlockTitle>Добавить покупку в категорию:</BlockTitle>
			<List>
				{!categories ? (
					<div>Loading...</div>
				) : (
					categories.map(category => (
						<ListItem
							key={category.id}
							title={category.title}
							link={`/add-purchase/${category.id}`}
						/>
					))
				)}
			</List>
			<BottomBar tabIndex={Pages.categories} />
		</Page>
	);
};

export default CategoriesPage;
