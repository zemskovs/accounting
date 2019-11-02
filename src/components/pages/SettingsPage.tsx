import React from 'react';
import { Page, Navbar } from 'framework7-react';
import BottomBar, { Pages } from '../bottomBar/BottomBar';

const SettingsPage: React.FC = (props) => {
	return (
		<Page>
			<Navbar title="Настройки" />
			<BottomBar tabIndex={Pages.settings} />
		</Page>
	)
}

export default SettingsPage;
