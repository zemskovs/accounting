import React from "react";
import { Page, Navbar,  BlockTitle  } from "framework7-react";
import BottomBar from "../bottomBar/BottomBar";
import { Doughnut } from 'react-chartjs-2';

export default () => (
	<Page>
		<Navbar title="Бухгалтерия" />
		<BottomBar />

		<BlockTitle>Расходы по категориям</BlockTitle>

	</Page>
);
