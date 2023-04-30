import React from 'react';

const DropDown = ({category}) => {

    const capitalizedcat = category.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1));

	return (
        <>
		<ul className="sub__menu">
			{capitalizedcat.map((item, index) => (
				<li key={index}>
					<a>{item}</a>
				</li>
			))}
		</ul>
        </>
	);
};

export default DropDown;
