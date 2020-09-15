import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
	return (
		<div className="card">
			<a href={repo.html_url}>{repo.name}</a>
		</div>
	);
};

RepoItem.prototypes = {
	repo: PropTypes.object.isRequired,
};
export default RepoItem;
