import { getTranslations } from "next-intl/server";

const SKIP_STRING_KEYS = new Set([
	"pageLink",
	"leadsTo",
	"image",
	"color",
	"id",
	"anchor",
	"listType",
]);

const translateValue = (
	value: unknown,
	key: string | undefined,
	t: (key: string) => string,
	visited = new WeakMap(),
): unknown => {
	if (typeof value === "string") {
		if (key && !SKIP_STRING_KEYS.has(key)) {
			return t(value);
		}
		return value;
	}

	if (Array.isArray(value)) {
		return value.map((item) => translateValue(item, key, t, visited));
	}

	if (value && typeof value === "object") {
		if (visited.has(value)) {
			return visited.get(value);
		}

		const translatedObject: Record<string, unknown> = {};
		visited.set(value, translatedObject);

		for (const [entryKey, entryValue] of Object.entries(value)) {
			translatedObject[entryKey] = translateValue(
				entryValue,
				entryKey,
				t,
				visited,
			);
		}

		return translatedObject;
	}

	return value;
};

export const translateBlock = async <T>(block: T) => {
	const t = await getTranslations();
	return translateValue(block, undefined, t) as T;
};
