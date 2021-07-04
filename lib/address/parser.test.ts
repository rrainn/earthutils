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
	}
];

tests.forEach((testObj) => {
	test("Should have correct direction abbreviations", () => {
		expect(parser.default(testObj.input, testObj.options || {})).toMatchObject(testObj.output);
	});
});
