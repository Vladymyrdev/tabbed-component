import React from 'react';

export interface ITabProps {
	activeTab: string;
	setActiveTab: (label: string) => void;
	label: string;
}

export const Tab: React.FC<ITabProps> = (props) => {
	return (
		<div className={props.activeTab === props.label ? 'active' : 'tab'}>
			<button onClick={() => props.setActiveTab(props.label)}>
				{props.children}
			</button>
		</div>
	);
};
