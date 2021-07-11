// https://pe.usps.com/text/pub28/28apc_003.htm
export const SecondaryUnitAbbreviations = {
	"APT": "Apartment",
	"BSMT": "Basement",
	"BLDG": "Building",
	"DEPT": "Department",
	"FL": "Floor",
	"FRNT": "Front",
	"HNGR": "Hanger",
	"KEY": "Key",
	"LBBY": "Lobby",
	"LOT": "Lot",
	"LOWR": "Lower",
	"OFC": "Office",
	"PH": "Penthouse",
	"PIER": "Pier",
	"REAR": "Rear",
	"RM": "Room",
	"SIDE": "Side",
	"SLIP": "Slip",
	"SPC": "Space",
	"STOP": "Stop",
	"STE": "Suite",
	"TRLR": "Trailer",
	"UNIT": "Unit",
	"UPPR": "Upper"
};

export const SecondaryUnitAbbreviationsInverse = Object.entries(SecondaryUnitAbbreviations).reduce((obj, current) => {
	obj[current[1]] = current[0];

	return obj;
}, {});

export const SecondaryUnitAbbreviationsInverseCaps = Object.entries(SecondaryUnitAbbreviations).reduce((obj, current) => {
	obj[current[1].toUpperCase()] = current[0];

	return obj;
}, {});
