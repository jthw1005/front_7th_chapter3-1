import { Header } from '@/components/Header';
import ManagementPage from '@/pages/ManagementPage';
import '@/styles/components.css';

export const App = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			<Header />
			<main>
				<ManagementPage />
			</main>
		</div>
	);
};
