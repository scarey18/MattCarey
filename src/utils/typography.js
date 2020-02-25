import Typography from 'typography'
import kirkhamTheme from 'typography-theme-kirkham'


kirkhamTheme.googleFonts = [
	{
		name: 'Playfair Display',
		styles: [700],
	},
	{
		name: 'Fira Sans',
		styles: [
			'300',
			'300i',
			'700',
			'700i',
		],
	},
]

const typography = new Typography(kirkhamTheme)

export default typography;