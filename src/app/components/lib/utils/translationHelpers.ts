export type Messages = Record<string, unknown>;

export const resolveMessageByPath = <T = unknown>(
	messages: Messages,
	path: string,
): T | undefined => {
	return path.split(".").reduce<unknown>((current, segment) => {
		if (
			current === undefined ||
			current === null ||
			typeof current !== "object"
		) {
			return undefined;
		}
		return (current as Record<string, unknown>)[segment];
	}, messages) as T | undefined;
};

export const resolveTranslationLines = (
	messages: Messages,
	path: string,
): string[] => {
	const resolved = resolveMessageByPath<unknown>(messages, path);
	if (Array.isArray(resolved)) {
		return resolved.filter((line): line is string => typeof line === "string");
	}
	if (typeof resolved === "string") {
		return [resolved];
	}
	return [path];
};
