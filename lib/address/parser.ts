import standardizeStreet from "./street/standardize";
import * as SecondaryUnit from "../abbreviations/secondaryUnit";

export interface AddressParserSettings {
	standardizeStreet?: boolean;
}

export interface AddressParserOutput {
	"addr:housenumber": string;
	"addr:street": string;
}

export default function (address: string, settings?: AddressParserSettings): AddressParserOutput {
	const [addressNumber, ...streetParts] = address.split(" ");
	let street = streetParts.join(" ");

	const returnObject = {
		"addr:housenumber": addressNumber,
		"addr:street": street
	};

	const secondLastStreetPart = (streetParts[streetParts.length - 2] || "").toUpperCase();
	if (streetParts[streetParts.length - 2] && (SecondaryUnit.SecondaryUnitAbbreviations[secondLastStreetPart] || streetParts[streetParts.length - 1].startsWith("#"))) {
		returnObject["addr:unit"] = streetParts[streetParts.length - 1].replace("#", "");
		returnObject["addr:unitname"] = SecondaryUnit.SecondaryUnitAbbreviations[secondLastStreetPart] || "";

		if (streetParts[streetParts.length - 1].startsWith("#")) {
			returnObject["addr:street"] = streetParts.slice(0, -1).join(" ");
		}
		if (SecondaryUnit.SecondaryUnitAbbreviations[secondLastStreetPart]) {
			returnObject["addr:street"] = streetParts.slice(0, -2).join(" ");
		}
	}

	if (settings?.standardizeStreet) {
		returnObject["addr:street"] = standardizeStreet(returnObject["addr:street"]);
	}

	return returnObject;
};
