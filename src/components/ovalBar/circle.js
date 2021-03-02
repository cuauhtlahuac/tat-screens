import React from 'react';

const circle = () => (
	<svg width="250" height="250" style={{display: 'block'}}>
		<defs>
			<linearGradient id="linear" x1="120%" y1="90%" x2="100%" y2="0%">
				<stop offset="60%" stop-color="#bb64c8" />
				<stop offset="90%" stop-color="#783183" />
			</linearGradient>

			<filter id="f1" width="30px" height="30px">
				<feComponentTransfer>
					<feFuncA type="identity" slope="1" />
				</feComponentTransfer>
				<feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#333" />
			</filter>
		</defs>

		<circle
			cx="125"
			cy="125"
			r="100"
			stroke="#11aacc22"
			stroke-width="30"
			fill="none"
		/>
		<path
			d="M 30 100 A 100 100 90 1 1 171 215"
			stroke="url(#linear)"
			stroke-linecap="round"
			stroke-width="30"
			fill="none"
			stroke-dasharray="750,1256"
		/>

		<circle
			id="circle"
			cx="171"
			cy="215"
			r="10"
			fill="#bb64c8"
			filter="url(#f1)"
		/>
		<circle
			id="circle"
			cx="30"
			cy="100"
			r="10"
			fill="#783183"
			filter="url(#f1)"
		/>
		<circle
			id="circle"
			cx="25"
			cy="130"
			r="4"
			fill="rgba(32, 161, 202, 0.14)"
		/>
		<circle
			id="circle"
			cx="32"
			cy="160"
			r="4"
			fill="rgba(32, 161, 202, 0.14)"
		/>
		<circle
			id="circle"
			cx="49"
			cy="190"
			r="4"
			fill="rgba(32, 161, 202, 0.14)"
		/>
		<circle
			id="circle"
			cx="80"
			cy="215"
			r="4"
			fill="rgba(32, 161, 202, 0.14)"
		/>
		<circle
			id="circle"
			cx="110"
			cy="225"
			r="4"
			fill="rgba(32, 161, 202, 0.14)"
		/>
		<circle
			id="circle"
			cx="140"
			cy="226"
			r="4"
			fill="rgba(32, 161, 202, 0.14)"
		/>

	</svg>
);

export default circle;
