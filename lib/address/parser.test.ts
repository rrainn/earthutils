import * as parser from "./parser";

const tests = [
	{
		"input": "123 South Washington Street",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "South Washington Street"
		}
	},
	{
		"input": "123 S Washington Street",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "South Washington Street"
		},
		"options": {
			"standardizeStreet": true
		}
	},
	{
		"input": "123 Washington Parkway Ste 14",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway",
			"addr:unit": "14",
			"addr:unitname": "Suite"
		}
	},
	{
		"input": "123 Washington Parkway Ste #14",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway",
			"addr:unit": "14",
			"addr:unitname": "Suite"
		}
	},
	{
		"input": "123 Washington Parkway #14",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway",
			"addr:unit": "14",
			"addr:unitname": ""
		}
	},
	{
		"input": "123 WASHINGTON PARKWAY",
		"output": {
			"addr:housenumber": "123",
			"addr:street": "Washington Parkway"
		}
	}
];

tests.forEach((testObj) => {
	test("Should have correct direction abbreviations", () => {
		expect(parser.default(testObj.input, testObj.options || {})).toMatchObject(testObj.output);
	});
});
