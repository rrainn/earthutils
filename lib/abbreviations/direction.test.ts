import * as direction from "./direction";

test("Should have correct direction abbreviations", () => {
	expect(direction.DirectionAbbreviations).toMatchObject({
		"N": "North",
		"E": "East",
		"S": "South",
		"W": "West"
	});
});

test("Should have correct inverse direction abbreviations", () => {
	expect(direction.DirectionAbbreviationsInverse).toMatchObject({
		"North": "N",
		"East": "E",
		"South": "S",
		"West": "W"
	});
});
