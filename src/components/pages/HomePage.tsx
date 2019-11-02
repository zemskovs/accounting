import React from "react";
import {
	Page,
	Navbar,
	BlockTitle,
	Block,
	Swiper,
	SwiperSlide
} from "framework7-react";
import BottomBar, { Pages } from "../bottomBar/BottomBar";
import { Doughnut } from "react-chartjs-2";
import CostList from "../costsList/CostsList";
import { Cost } from "../../models/models";
import fetchHook from "../../hooks/fetchHook";

//toDO: разобраться с иконками
export default () => {
	const [cost, setCost] = React.useState<Cost[]>([
		{ title: "", total: 0, icon: "", color: "" }
	]);

	fetchHook(
		"https://zemskovs.github.io/accounting/src/demoData/cost.json",
		res => setCost(res.costs.sort((a, b) => b.total - a.total))
	);

	return (
		<Page>
			<Navbar title="Бухгалтерия" />
			<BottomBar tabIndex={Pages.home} />
			{cost && (
				<Swiper>
					<SwiperSlide>
						<Block>
							<Doughnut
								data={{
									labels: cost.map(x => x.title),
									datasets: [
										{
											data: cost.map(x => x.total),
											backgroundColor: cost.map(
												x => x.color
											),
											borderWidth: 1
										}
									]
								}}
								options={{ legend: { display: false } }}
							/>
						</Block>
						<BlockTitle>Расходы по категориям</BlockTitle>
						<CostList costs={cost} />
					</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
				</Swiper>
			)}
		</Page>
	);
};
