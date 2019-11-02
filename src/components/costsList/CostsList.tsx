import React from "react";
import { List, ListItem, Icon } from "framework7-react";
import { Cost } from "../../models/models";

type CostListProps = {
	costs: Cost[];
};

const CostList: React.FC<CostListProps> = props => {
	return (
		<List>
			{props.costs.map((c, idx) => (
				<ListItem
					key={idx}
					title={c.title}
					badge={c.total}
					style={{ color: c.color }}
				>
					<Icon slot="media" icon={c.icon}></Icon>
				</ListItem>
			))}
		</List>
	);
};
export default CostList;
