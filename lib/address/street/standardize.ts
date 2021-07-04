import * as DirectionAbbreviations from "../../abbreviations/direction";

export default function (street: string): string {
	const streetParts = street.trim().split(" ");

	const fullDirection = DirectionAbbreviations.DirectionAbbreviations[streetParts[0].toUpperCase()];
	if (fullDirection) {
		streetParts[0] = fullDirection;
	}

	return streetParts.join(" ");
};
