/**
 * SPDX-FileCopyrightText: (c) 2019 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';

export interface IProps extends React.HTMLAttributes<HTMLParagraphElement> {
	/**
	 * Flag to indicate if content should be styled as subtext.
	 */
	subtext?: boolean;
}
const ClayListItemText = React.forwardRef<HTMLParagraphElement, IProps>(
	({children, className, subtext, ...otherProps}: IProps, ref) => (
		<p
			{...otherProps}
			className={classNames(className, {
				'list-group-subtext': subtext,
				'list-group-text': !subtext,
			})}
			ref={ref}
		>
			{children}
		</p>
	)
);

ClayListItemText.displayName = 'ClayListItemText';

export default ClayListItemText;
