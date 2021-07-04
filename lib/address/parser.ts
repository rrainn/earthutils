import standardizeStreet from "./street/standardize";

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

	if (settings?.standardizeStreet) {
		street = standardizeStreet(street);
	}

	return {
		"addr:housenumber": addressNumber,
		"addr:street": street
	};
};
