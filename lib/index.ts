import * as DirectionAbbreviations from "./abbreviations/direction";
import AddressParser from "./address/parser";
import StreetStandardize from "./address/street/standardize";
import UnitParser from "./address/unit/parser";
import * as USStateAbbreviations from "./abbreviations/us_states";
import * as CountryAbbreviations from "./abbreviations/countries";
import TelephoneStandardize from "./telephone/standardize";

export = {
	DirectionAbbreviations,
	AddressParser,
	StreetStandardize,
	UnitParser,
	USStateAbbreviations,
	CountryAbbreviations,
	TelephoneStandardize
};
