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

const data = {
	labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
	datasets: [
		{
			label: "# of Votes",
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132, 0.2)",
				"rgba(54, 162, 235, 0.2)",
				"rgba(255, 206, 86, 0.2)",
				"rgba(75, 192, 192, 0.2)",
				"rgba(153, 102, 255, 0.2)",
				"rgba(255, 159, 64, 0.2)"
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)"
			],
			borderWidth: 1
		}
	]
};
//toDO: разобраться с иконками
export default () => (
	<Page>
		<Navbar title="Бухгалтерия" />
		<BottomBar tabIndex={Pages.home} />
		<Swiper>
			<SwiperSlide>
				<Block>
					<Doughnut
						data={data}
						options={{ legend: { display: false } }}
					/>
				</Block>
				<BlockTitle>Расходы по категориям</BlockTitle>
				<CostList
					costs={[{ title: "one", icon: "inbox", total: 12 }]}
				/>
			</SwiperSlide>
			<SwiperSlide>Slide 2</SwiperSlide>
			<SwiperSlide>Slide 3</SwiperSlide>
		</Swiper>
	</Page>
);
