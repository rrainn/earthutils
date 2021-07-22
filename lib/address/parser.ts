import standardizeStreet from "./street/standardize";
import * as SecondaryUnit from "../abbreviations/secondaryUnit";

export interface AddressParserSettings {
	standardizeStreet?: boolean;
}

export interface AddressParserOutput {
	"addr:housenumber"?: string;
	"addr:street"?: string;
	"addr:unit"?: string;
	"addr:unitname"?: string;
}

export default function (address: string, settings?: AddressParserSettings): AddressParserOutput {
	const [addressNumber, ...streetParts] = address.split(" ");
	let street = streetParts.join(" ");

	let returnObject = {};

	if (!Number.isNaN(parseInt(addressNumber))) {
		returnObject = {
			"addr:housenumber": addressNumber,
			"addr:street": street
		};
	} else if (address) {
		returnObject = {
			"addr:street": address
		};
	}

	const secondLastStreetPart = (streetParts[streetParts.length - 2] || "").toUpperCase().replace(".", "");
	if (streetParts[streetParts.length - 2] && (SecondaryUnit.SecondaryUnitAbbreviations[secondLastStreetPart] || SecondaryUnit.SecondaryUnitAbbreviationsInverseCaps[secondLastStreetPart] || streetParts[streetParts.length - 1].startsWith("#"))) {
		returnObject["addr:unit"] = streetParts[streetParts.length - 1].replace("#", "");
		if (SecondaryUnit.SecondaryUnitAbbreviations[secondLastStreetPart]) {
			returnObject["addr:unitname"] = SecondaryUnit.SecondaryUnitAbbreviations[secondLastStreetPart];
		} else if (SecondaryUnit.SecondaryUnitAbbreviationsInverseCaps[secondLastStreetPart]) {
			const abbreviation = SecondaryUnit.SecondaryUnitAbbreviationsInverseCaps[secondLastStreetPart];
			returnObject["addr:unitname"] = SecondaryUnit.SecondaryUnitAbbreviations[abbreviation];
		} else {
			returnObject["addr:unitname"] = "";
		}

		if (streetParts[streetParts.length - 1].startsWith("#")) {
			returnObject["addr:street"] = streetParts.slice(0, -1).join(" ");
		}
		if (SecondaryUnit.SecondaryUnitAbbreviations[secondLastStreetPart] || SecondaryUnit.SecondaryUnitAbbreviationsInverseCaps[secondLastStreetPart]) {
			returnObject["addr:street"] = streetParts.slice(0, -2).join(" ");
		}
	}

	if (settings?.standardizeStreet && returnObject["addr:street"]) {
		returnObject["addr:street"] = standardizeStreet(returnObject["addr:street"]);
	}

	if (returnObject["addr:housenumber"] && returnObject["addr:housenumber"].endsWith(".0")) {
		returnObject["addr:housenumber"] = returnObject["addr:housenumber"].replace(/*/\.\0$/gmu*/".0", "");
	}

	return returnObject;
};
