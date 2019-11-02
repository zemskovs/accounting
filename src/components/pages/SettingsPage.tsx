import React from 'react';
import { Page } from 'framework7-react';
import BottomBar, { Pages } from '../bottomBar/BottomBar';

const SettingsPage: React.FC = (props) => {
	return (
		<Page>
			<BottomBar tabIndex={Pages.settings} />
		</Page>
	)
}

export default SettingsPage;
