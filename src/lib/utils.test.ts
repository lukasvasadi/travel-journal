import { describe, expect, it } from 'vitest'
import { formatDate, resolveImage } from './utils'

describe('formatDate', () => {
	it('formats an ISO date string using the given locale and style', () => {
		expect(formatDate('2023-06-10')).toBe('Jun 10, 2023')
	})

	it('formats using a custom dateStyle', () => {
		expect(formatDate('2023-06-10', 'long')).toBe('June 10, 2023')
	})
})

describe('resolveImage', () => {
	it('resolves a bundled image path to a URL', () => {
		const url = resolveImage('europe/iceland.jpeg')
		expect(typeof url).toBe('string')
		expect(url.length).toBeGreaterThan(0)
	})

	it('throws for a path with no matching bundled image', () => {
		expect(() => resolveImage('nowhere/missing.jpeg')).toThrow(/Image not found/)
	})
})
