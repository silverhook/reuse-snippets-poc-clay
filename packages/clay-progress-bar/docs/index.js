/**
 * SPDX-FileCopyrightText: (c) 2019 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: BSD-3-Clause
 */

import Editor from '$clayui.com/src/components/Editor';
import ClayProgressBar from '@clayui/progress-bar';
import React from 'react';

const progressBarImportsCode = `import ClayProgressBar from '@clayui/progress-bar';`;

const ProgressBarCode = `const Component = () => {
	
	return (
		<>
			<ClayProgressBar
				spritemap={spritemap}
				value={50}
			/>

			<ClayProgressBar spritemap={spritemap} value={100} />
			
			<ClayProgressBar
				spritemap={spritemap}
				value={20}
			/>

			<ClayProgressBar
				spritemap={spritemap}
				value={20}
			/>
		</>
	);
}

render(<Component />)`;

const progressBarJSPImportsCode = `<%@ taglib uri="http://liferay.com/tld/clay" prefix="clay" %>`;

const ProgressBarJSPCode = `<clay:progressbar
	value="<%= 50 %>"
/>

<clay:progressbar
	status="success"
	value="<%= 100 %>"
/>

<clay:progressbar
	value="<%= 20 %>"
/>`;

export const ProgressBar = () => {
	const scope = {ClayProgressBar};

	const codeSnippets = [
		{
			imports: progressBarImportsCode,
			name: 'React',
			value: ProgressBarCode,
		},
		{
			disabled: true,
			imports: progressBarJSPImportsCode,
			name: 'JSP',
			value: ProgressBarJSPCode,
		},
	];

	return <Editor code={codeSnippets} scope={scope} />;
};

const progressBarFeedbackImportsCode = `import ClayProgressBar from '@clayui/progress-bar';`;

const ProgressBarFeedbackCode = `const Component = () => {
	
	return (
		<>
			<ClayProgressBar
				feedback
				spritemap={spritemap}
				value={99}
			>
				<div className="progress-group-addon">99% Completed</div>
			</ClayProgressBar>

			<ClayProgressBar
				feedback
				spritemap={spritemap}
				value={100}
			>
				<div className="progress-group-addon">100% Completed</div>
			</ClayProgressBar>

			<ClayProgressBar
				feedback
				spritemap={spritemap}
				value={99}
				warn
			>
				<div className="progress-group-addon">99% Completed</div>
			</ClayProgressBar>
		</>
	);
}

render(<Component />)`;

export const ProgressBarFeedback = () => {
	const scope = {ClayProgressBar};
	const code = ProgressBarFeedbackCode;

	return (
		<Editor
			code={code}
			imports={progressBarFeedbackImportsCode}
			scope={scope}
		/>
	);
};

const progressBarStatusImportsCode = `import ClayProgressBar from '@clayui/progress-bar';`;

const ProgressBarStatusCode = `const Component = () => {
	
	return (
		<>
			<ClayProgressBar
				spritemap={spritemap}
				value={0}
			/>

			<ClayProgressBar
				spritemap={spritemap}
				value={50}
			/>

			<ClayProgressBar
				spritemap={spritemap}
				value={100}
			/>

			<ClayProgressBar
				spritemap={spritemap}
				value={50}
				warn
			/>

			<ClayProgressBar
				spritemap={spritemap}
				value={100}
				warn
			/>
		</>
	);
}

render(<Component />)`;

export const ProgressBarStatus = () => {
	const scope = {ClayProgressBar};
	const code = ProgressBarStatusCode;

	return (
		<Editor
			code={code}
			imports={progressBarStatusImportsCode}
			scope={scope}
		/>
	);
};
