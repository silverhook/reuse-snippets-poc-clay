/**
 * SPDX-FileCopyrightText: (c) 2023 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {useRef} from 'react';

export function useIsFirstRender() {
	const isFirst = useRef(true);

	if (isFirst.current) {
		isFirst.current = false;

		return true;
	}

	return isFirst.current;
}
