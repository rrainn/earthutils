import * as SecondaryUnit from "../../abbreviations/secondaryUnit";

// This function will return the full secondary unit or false
function standardizeSecondaryUnit(value: string): string | false {
	const unitName = value.toUpperCase().replace(".", "");
	const unitNameFirstCap = unitName.charAt(0).toUpperCase() + unitName.slice(1).toLowerCase();

	if (SecondaryUnit.SecondaryUnitAbbreviations[unitName]) {
		return SecondaryUnit.SecondaryUnitAbbreviations[unitName];
	} else if (SecondaryUnit.SecondaryUnitAbbreviationsInverseCaps[unitName]) {
		const abbreviation = SecondaryUnit.SecondaryUnitAbbreviationsInverseCaps[unitName];
		return SecondaryUnit.SecondaryUnitAbbreviations[abbreviation];
	} else if (Object.values(SecondaryUnit.SecondaryUnitAbbreviations).includes(unitNameFirstCap)) {
		return unitNameFirstCap;
	} else {
		return false;
	}
}

export default function (unit: string): any {
	const unitParts = unit.replace(/^#/gmu, "").trim().split(" ");
	const [unitName, ...unitValue] = unitParts;

	const returnObject = {};

	const standardizedSecondaryUnit = standardizeSecondaryUnit(unitName);
	if (standardizedSecondaryUnit) {
		returnObject["addr:unitname"] = standardizedSecondaryUnit;
	} else {
		returnObject["addr:unitname"] = "";
	}

	returnObject["addr:unit"] = unitValue.join(" ");

	if (returnObject["addr:unitname"] === "") {
		returnObject["addr:unit"] = `${unitName} ${returnObject["addr:unit"]}`.trim();
	}

	return returnObject;

};

