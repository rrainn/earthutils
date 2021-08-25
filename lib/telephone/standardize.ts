function addDashes(number: string): string {
	return number.replace(/^(.{3})(.{3})(.{4})$/gmu, '$1-$2-$3');
}

export default function (telephone: string, settings?: {country?: string}): string {
	if (typeof telephone === "string") {
		if (telephone.startsWith("tel:")) {
			telephone = telephone.replace("tel:", "");
		}

		// +1-123-456-7890
		if (telephone.length === 15 && telephone.startsWith("+1-")) {
			return telephone;
		}
		// +1-1234567890
		if (telephone.length === 13 && telephone.startsWith("+1-")) {
			return `+1-${addDashes(telephone.replace("+1-", ""))}`;
		}
		// +11234567890
		if (telephone.length === 12 && telephone.startsWith("+1")) {
			return `+1-${addDashes(telephone.replace("+1", ""))}`;
		}
		// +1123-456-7890
		if (telephone.length === 14 && telephone.startsWith("+1")) {
			return `+1-${addDashes(telephone.replace("+1", "").replaceAll("-", ""))}`;
		}

		if (settings && settings.country === "US") {
			// 1234567890
			if (telephone.length === 10) {
				return `+1-${addDashes(telephone)}`;
			}
			// 123-456-7890
			if (telephone.length === 12 && !telephone.startsWith("+")) {
				return `+1-${addDashes(telephone.replaceAll("-", ""))}`;
			}
		}
	}

	return undefined;
};
