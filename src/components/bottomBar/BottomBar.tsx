import React from "react";
import { Toolbar, Link } from "framework7-react";

export enum Pages {
	home = 1,
	categories = 2,
	settings = 3
}

export type BottomBarProps = {
	tabIndex: Pages;
};

const BottomBar: React.FC<BottomBarProps> = props => {
	props = { tabIndex: Pages.home, ...props };
	return (
		<Toolbar tabbar bottom>
			<Link href={"/"} tabLinkActive={props.tabIndex === Pages.home}>
				Tab 1
			</Link>
			<Link
				href="/categories"
				tabLinkActive={props.tabIndex === Pages.categories}
			>
				Tab 2
			</Link>
			<Link
				href="/settings"
				tabLinkActive={props.tabIndex === Pages.settings}
			>
				Tab 3
			</Link>
		</Toolbar>
	);
};

BottomBar.displayName = "f7-toolbar";
export default BottomBar;
