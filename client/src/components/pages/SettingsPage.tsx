import React from "react";
import {
	Page,
	Navbar,
	List,
	ListInput,
	BlockHeader,
	ListItem,
	Button
} from "framework7-react";
import BottomBar, { Pages } from "../bottomBar/BottomBar";

const SettingsPage: React.FC = props => {

	return (
		<Page>
			<Navbar title="Настройки" />

			<BlockHeader>Настройки категорий</BlockHeader>
			<List>
				<ListItem link="/add-categories/">Добавить категории</ListItem>
				<ListItem link="#">Удалить категории</ListItem>
			</List>
			<BlockHeader>Личные настройки</BlockHeader>
			<List noHairlinesMd>
				<ListInput
					label="Name"
					type="text"
					placeholder="Поменять имя"
					clearButton
				/>

				<ListInput
					label="Password"
					type="password"
					placeholder="Поменять пароль"
					clearButton
				/>

				<ListInput
					label="E-mail"
					type="email"
					placeholder="Поменять e-mail"
					clearButton
				/>
				<Button color="green">Сохранить</Button>
			</List>


			<BottomBar tabIndex={Pages.settings} />
		</Page>
	);
};

export default SettingsPage;
