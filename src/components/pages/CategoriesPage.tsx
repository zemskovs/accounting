import React, { useEffect, useState } from 'react';
import {
	Page,
	Navbar,
	BlockTitle,
	List,
	ListItem,
	Subnavbar,
	Searchbar,
 } from 'framework7-react';

import BottomBar, { Pages } from '../bottomBar/BottomBar';

const CategoriesPage: React.FC = (props) => {
	const [categories, setCategories] = useState()

	useEffect(() => {
		fetch("http://localhost:3001/public/demoData/categories.json")
		.then(x => x.text())
		.then(x => console.log(x));
	})

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
	)
}

export default CategoriesPage;
