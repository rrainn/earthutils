import * as parser from "./standardize";

const tests = [
	{
		"input": "Headquarters Plaza",
		"output": "Headquarters Plaza"
	},
	{
		"input": "S Headquarters Plaza",
		"output": "South Headquarters Plaza"
	}
];

tests.forEach((testObj) => {
	test(`Should output ${testObj.output} for ${testObj.input}`, () => {
		expect(parser.default(testObj.input)).toBe(testObj.output);
	});
});
