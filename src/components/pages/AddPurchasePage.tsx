import React from "react";
import { Page, Navbar, List, ListInput, Button } from "framework7-react";
import BottomBar, { Pages } from "../bottomBar/BottomBar";

class AddPurchasePage extends React.Component {
	errors = new Map();
	handleInput = (e) => {
		this.errors.set(e.target.name, e.target.validity.valid || false)
	}

	handleSubmit = () => {
		if (this.isHasErroes())
			this.$f7 && this.$f7.dialog.alert("hello", "Ошибка");
	}

	isHasErroes = () => {
		let hasErrors = false;
		for (let field of this.errors.keys()) {
			if (!this.errors.get(field))
				hasErrors = true;
		}
		return hasErrors;
	}

	render() {
		return (
			<Page>
				<Navbar title="Добавить покупку" backLink />
				<List>
					<ListInput
						name="purchase"
						label="Сумма покупки, руб"
						type="number"
						errorMessage="Введите, пожалуйста, сумму покупки"
						validate
						required
						clearButton
						onInput={(e) => this.handleInput(e)}
					/>
					<ListInput
						name="note"
						label="Примечание"
						type="textarea"
						clearButton
						resizable
					/>
				</List>
				<Button onClick={this.handleSubmit} large color="green">Добавить</Button>
				<BottomBar tabIndex={Pages.categories} />
			</Page>
		);
	}
};

export default AddPurchasePage;
