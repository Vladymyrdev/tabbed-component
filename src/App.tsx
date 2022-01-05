import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { NewsList } from './components/NewsList';
import { Panel } from './components/Panel';
import { Tab } from './components/Tab';
import { tabsInfo } from './constants';

const App: FC = () => {
	const [fetchData, setFetchData] = useState<[]>([]);
	const [isLoading, setLoading] = useState(false);
	const [activeTab, setActiveTab] = useState('a');

	const getData = (activeTab: string) => {
		const el = tabsInfo?.filter((item) => activeTab === item.id)[0];
		setLoading(true);
		axios.get(el.apiUrl).then(({ data }) => {
			setFetchData(data?.response?.results);
			setLoading(false);
		});
	};

	useEffect(() => {
		try {
			getData(activeTab);
		} catch (error) {
			console.log(error);
		}
	}, [activeTab]);

	return (
		<div className="wrapper">
			<div className="conteiner">
				<nav className="tab_nav">
					{tabsInfo?.map((x) => (
						<Tab
							key={x.id}
							label={x.id}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						>
							{x.label}
						</Tab>
					))}
				</nav>
				{tabsInfo?.map((x) => (
					<Panel key={x.id} label={x.id} activeTab={activeTab}>
						<NewsList loading={isLoading} data={fetchData} />
					</Panel>
				))}
			</div>
		</div>
	);
};

export default App;
