import HomePage from './components/pages/HomePage';
import AddPurchasePage from './components/pages/AddPurchasePage';
import CategoriesPage from './components/pages/CategoriesPage';
import NotFoundPage from './components/pages/NotFoundPage';
import SettingsPage from './components/pages/SettingsPage';

export default [
	{
		path: '/',
		component: HomePage,
	},
	{
		path: '/categories',
		component: CategoriesPage,
	},
 	{
		path: '/add-purchase/:id',
		component: AddPurchasePage,
	},
	{
		path: '/settings',
		component: SettingsPage,
	},
 	{
		path: '(.*)',
		component: NotFoundPage,
	},
];
