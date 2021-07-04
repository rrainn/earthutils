import * as streetSuffix from "./streetSuffix";

const tests = [
	{
		"type": "toName",
		"input": "AV",
		"output": "Avenue"
	},
	{
		"type": "toName",
		"input": "AVE",
		"output": "Avenue"
	},
	{
		"type": "toName",
		"input": "ST",
		"output": "Street"
	},
	{
		"type": "toName",
		"input": "BLVD",
		"output": "Boulevard"
	}
];
tests.filter((test) => test.type === "toName").forEach((testObj) => {
	test(`Should output ${testObj.output} for ${testObj.input} when using toName()`, () => {
		expect(streetSuffix.toName(testObj.input)).toBe(testObj.output);
	});
});
