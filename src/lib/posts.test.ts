import { describe, expect, it } from 'vitest'
import { getPosts } from './posts'

describe('getPosts', () => {
	it('excludes unpublished posts', async () => {
		const posts = await getPosts()
		const slugs = posts.map((post) => post.slug)

		expect(slugs).not.toContain('barcelona')
		expect(slugs).not.toContain('glamping')
		expect(slugs).not.toContain('shropshire')
	})

	it('sorts posts by date, newest first', async () => {
		const posts = await getPosts()
		const dates = posts.map((post) => new Date(post.date).getTime())

		for (let i = 1; i < dates.length; i++) {
			expect(dates[i - 1]).toBeGreaterThanOrEqual(dates[i])
		}
	})

	it('returns only published posts with the expected shape', async () => {
		const posts = await getPosts()

		expect(posts.length).toBeGreaterThan(0)
		for (const post of posts) {
			expect(post.published).toBe(true)
			expect(typeof post.slug).toBe('string')
			expect(typeof post.title).toBe('string')
		}
	})
})
