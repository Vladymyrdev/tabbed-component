import { IProps, ListInfoType } from '../types';

export const NewsList = ({ data, loading }: IProps) => {
	return (
		<div className="tab-panel-container">
			<div id="tab-panel-1">
				{loading ? (
					<div className="loader">
						<p>Loading...</p>
						<div className="dots-bars"></div>
					</div>
				) : (
					data?.map((x: ListInfoType, i) => (
						<div key={x.id} className="list-item">
							<span>{i + 1}</span>
							<a href={x.webUrl}>{x.webTitle}</a>
						</div>
					))
				)}
			</div>
		</div>
	);
};
