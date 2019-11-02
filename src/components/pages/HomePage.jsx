import React from "react";
import { Page, Navbar,  Toolbar, Link  } from "framework7-react";
import BottomBar from "../bottomBar/BottomBar";

export default () => (
	<Page>
		<Navbar title="Бухгалтерия" />
		<BottomBar />
	</Page>
);
