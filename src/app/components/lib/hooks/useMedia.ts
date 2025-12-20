import { useEffect, useState, useCallback } from "react"

/**
 * Хук для проверки соответствия текущего экрана диапазону ширин (min и max width).
 * @param min Минимальная ширина (например, 768)
 * @param max Максимальная ширина (например, 1024)
 * @returns boolean - соответствует ли экран диапазону
 */
export function useMedia(min: number, max: number): boolean {
	const [passed, setPassed] = useState<boolean>(false)
	const update = useCallback((event: MediaQueryListEvent) => {
		setPassed(event.matches)
	}, [])

	useEffect(() => {
		if (typeof window === "undefined" || !window.matchMedia) {
			return
		}

		const mediaQueryString = `(min-width: ${min}px) and (max-width: ${max}px)`
		const mediaQueryList = window.matchMedia(mediaQueryString)
		setPassed(mediaQueryList.matches)
		mediaQueryList.addEventListener("change", update)
		return () => {
			mediaQueryList.removeEventListener("change", update)
		}
	}, [min, max, update])

	return passed
}
