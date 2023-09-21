import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const omicronTheme: CustomThemeConfig = {
	name: "omicron-theme",
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "12px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #d9add1
		"--color-primary-50": "249 243 248", // #f9f3f8
		"--color-primary-100": "247 239 246", // #f7eff6
		"--color-primary-200": "246 235 244", // #f6ebf4
		"--color-primary-300": "240 222 237", // #f0deed
		"--color-primary-400": "228 198 223", // #e4c6df
		"--color-primary-500": "217 173 209", // #d9add1
		"--color-primary-600": "195 156 188", // #c39cbc
		"--color-primary-700": "163 130 157", // #a3829d
		"--color-primary-800": "130 104 125", // #82687d
		"--color-primary-900": "106 85 102", // #6a5566
		// secondary | #675dd7
		"--color-secondary-50": "232 231 249", // #e8e7f9
		"--color-secondary-100": "225 223 247", // #e1dff7
		"--color-secondary-200": "217 215 245", // #d9d7f5
		"--color-secondary-300": "194 190 239", // #c2beef
		"--color-secondary-400": "149 142 227", // #958ee3
		"--color-secondary-500": "103 93 215", // #675dd7
		"--color-secondary-600": "93 84 194", // #5d54c2
		"--color-secondary-700": "77 70 161", // #4d46a1
		"--color-secondary-800": "62 56 129", // #3e3881
		"--color-secondary-900": "50 46 105", // #322e69
		// tertiary | #f8b094
		"--color-tertiary-50": "254 243 239", // #fef3ef
		"--color-tertiary-100": "254 239 234", // #feefea
		"--color-tertiary-200": "253 235 228", // #fdebe4
		"--color-tertiary-300": "252 223 212", // #fcdfd4
		"--color-tertiary-400": "250 200 180", // #fac8b4
		"--color-tertiary-500": "248 176 148", // #f8b094
		"--color-tertiary-600": "223 158 133", // #df9e85
		"--color-tertiary-700": "186 132 111", // #ba846f
		"--color-tertiary-800": "149 106 89", // #956a59
		"--color-tertiary-900": "122 86 73", // #7a5649
		// success | #49fc5b
		"--color-success-50": "228 255 230", // #e4ffe6
		"--color-success-100": "219 254 222", // #dbfede
		"--color-success-200": "210 254 214", // #d2fed6
		"--color-success-300": "182 254 189", // #b6febd
		"--color-success-400": "128 253 140", // #80fd8c
		"--color-success-500": "73 252 91", // #49fc5b
		"--color-success-600": "66 227 82", // #42e352
		"--color-success-700": "55 189 68", // #37bd44
		"--color-success-800": "44 151 55", // #2c9737
		"--color-success-900": "36 123 45", // #247b2d
		// warning | #ffe66b
		"--color-warning-50": "255 251 233", // #fffbe9
		"--color-warning-100": "255 250 225", // #fffae1
		"--color-warning-200": "255 249 218", // #fff9da
		"--color-warning-300": "255 245 196", // #fff5c4
		"--color-warning-400": "255 238 151", // #ffee97
		"--color-warning-500": "255 230 107", // #ffe66b
		"--color-warning-600": "230 207 96", // #e6cf60
		"--color-warning-700": "191 173 80", // #bfad50
		"--color-warning-800": "153 138 64", // #998a40
		"--color-warning-900": "125 113 52", // #7d7134
		// error | #ff5272
		"--color-error-50": "255 229 234", // #ffe5ea
		"--color-error-100": "255 220 227", // #ffdce3
		"--color-error-200": "255 212 220", // #ffd4dc
		"--color-error-300": "255 186 199", // #ffbac7
		"--color-error-400": "255 134 156", // #ff869c
		"--color-error-500": "255 82 114", // #ff5272
		"--color-error-600": "230 74 103", // #e64a67
		"--color-error-700": "191 62 86", // #bf3e56
		"--color-error-800": "153 49 68", // #993144
		"--color-error-900": "125 40 56", // #7d2838
		// surface | #393847
		"--color-surface-50": "225 225 227", // #e1e1e3
		"--color-surface-100": "215 215 218", // #d7d7da
		"--color-surface-200": "206 205 209", // #cecdd1
		"--color-surface-300": "176 175 181", // #b0afb5
		"--color-surface-400": "116 116 126", // #74747e
		"--color-surface-500": "57 56 71", // #393847
		"--color-surface-600": "51 50 64", // #333240
		"--color-surface-700": "43 42 53", // #2b2a35
		"--color-surface-800": "34 34 43", // #22222b
		"--color-surface-900": "28 27 35" // #1c1b23
	}
};
