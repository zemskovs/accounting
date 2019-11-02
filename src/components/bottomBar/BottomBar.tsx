import React from "react";
import { Toolbar, Link } from "framework7-react";

const BottomBar: React.FC = () => (
	<Toolbar tabbar bottom>
		<Link href={"#"} tabLinkActive>
			Tab 1
		</Link>
		<Link>Tab 2</Link>
		<Link>Tab 3</Link>
	</Toolbar>
);
BottomBar.displayName = "f7-toolbar";
export default BottomBar;
