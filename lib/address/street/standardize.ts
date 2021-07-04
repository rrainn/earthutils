import * as DirectionAbbreviations from "../../abbreviations/direction";
import * as StreetSuffix from "../../abbreviations/streetSuffix";

export default function (street: string): string {
	let streetParts = street.trim().split(" ");

	const fullDirection = DirectionAbbreviations.DirectionAbbreviations[streetParts[0].toUpperCase()];
	if (fullDirection) {
		streetParts[0] = fullDirection;
	}

	const removeTrailingCharacters = [",", "-"];
	if (removeTrailingCharacters.includes(streetParts[streetParts.length - 1])) {
		streetParts.pop();
	}
	if (removeTrailingCharacters.some((char) => streetParts[streetParts.length - 1].endsWith(char))) {
		streetParts[streetParts.length - 1] = streetParts[streetParts.length - 1].slice(0, -1);
	}

	const possibleStreetSuffix = streetParts[streetParts.length - 1].replace(".", "").toUpperCase();
	const streetSuffixName = StreetSuffix.toName(possibleStreetSuffix);
	if (streetSuffixName) {
		streetParts[streetParts.length - 1] = streetSuffixName;
	}

	// Ensure that only the first letters in each word are capitalized
	streetParts = streetParts.map((part) => {
		return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
	});

	return streetParts.join(" ");
};
