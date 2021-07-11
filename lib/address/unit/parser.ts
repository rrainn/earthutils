
/*

returnObject["addr:unit"] = streetParts[streetParts.length - 1].replace("#", "");
		if (SecondaryUnit.SecondaryUnitAbbreviations[secondLastStreetPart]) {
			returnObject["addr:unitname"] = SecondaryUnit.SecondaryUnitAbbreviations[secondLastStreetPart];
		} else if (SecondaryUnit.SecondaryUnitAbbreviationsInverseCaps[secondLastStreetPart]) {
			const abbreviation = SecondaryUnit.SecondaryUnitAbbreviationsInverseCaps[secondLastStreetPart];
			returnObject["addr:unitname"] = SecondaryUnit.SecondaryUnitAbbreviations[abbreviation];
		} else {
			returnObject["addr:unitname"] = "";
		}
		*/

import * as SecondaryUnit from "../../abbreviations/secondaryUnit";

export default function (unit: string): any {
	const unitParts = unit.replace(/^#/gmu, "").trim().split(" ");
	const [originalUnitName, ...unitValue] = unitParts;
	const unitName = originalUnitName.toUpperCase().replace(".", "");
	const unitNameFirstCap = unitName.charAt(0).toUpperCase() + unitName.slice(1).toLowerCase();

	const returnObject = {};

	if (SecondaryUnit.SecondaryUnitAbbreviations[unitName]) {
		returnObject["addr:unitname"] = SecondaryUnit.SecondaryUnitAbbreviations[unitName];
	} else if (SecondaryUnit.SecondaryUnitAbbreviationsInverseCaps[unitName]) {
		const abbreviation = SecondaryUnit.SecondaryUnitAbbreviationsInverseCaps[unitName];
		returnObject["addr:unitname"] = SecondaryUnit.SecondaryUnitAbbreviations[abbreviation];
	} else if (Object.values(SecondaryUnit.SecondaryUnitAbbreviations).includes(unitNameFirstCap)) {
		returnObject["addr:unitname"] = unitNameFirstCap;
	} else {
		returnObject["addr:unitname"] = "";
	}

	returnObject["addr:unit"] = unitValue.join(" ");

	if (returnObject["addr:unitname"] === "") {
		returnObject["addr:unit"] = `${originalUnitName} ${returnObject["addr:unit"]}`.trim();
	}

	return returnObject;

};

