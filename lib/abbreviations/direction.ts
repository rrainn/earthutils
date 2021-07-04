export const DirectionAbbreviations = {
	"N": "North",
	"E": "East",
	"S": "South",
	"W": "West"
};

export const DirectionAbbreviationsInverse = Object.entries(DirectionAbbreviations).reduce((obj, current) => {
	obj[current[1]] = current[0];

	return obj;
}, {});
