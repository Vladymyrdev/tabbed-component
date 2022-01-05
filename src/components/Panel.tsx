import React from 'react';

export interface IPanelProps {
	label: string;
	activeTab: string;
}

export const Panel: React.FC<IPanelProps> = (props) => {
	return props.activeTab === props.label ? <main>{props.children}</main> : null;
};
