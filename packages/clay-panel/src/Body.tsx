/**
 * SPDX-FileCopyrightText: (c) 2019 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

const ClayPanelBody = ({
	children,
	className,
	...otherProps
}: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div {...otherProps} className={classNames('panel-body', className)}>
			{children}
		</div>
	);
};

export default ClayPanelBody;
