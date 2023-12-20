import { website } from '$lib/info';

/**
 * @typedef {{
 * always: string;
 * hourly: string;
 *  daily: string;
 *  weekly: string;
 *  monthly: string;
 *  yearly: string;
 *  never: string;
}} Freq
 */

/**
 * @type {Freq}
 */
const freq = {
	always: 'always',
	hourly: 'hourly',
	daily: 'daily',
	weekly: 'weekly',
	monthly: 'monthly',
	yearly: 'yearly',
	never: 'never'
};

export async function GET() {
	/**
	 * @typedef {{
	 * page: string,
	 * freq: Freq,
	 * priority: number
	 * }}
	 */
	const pageData = [
		{
			page: '',
			freq: freq.daily,
			priority: 1.0
		},
		{
			page: '/news',
			freq: freq.daily,
			priority: 0.7
		},
		{
			page: '/spirits',
			freq: freq.daily,
			priority: 0.7
		},
		{
			page: '/explore',
			freq: freq.daily,
			priority: 0.7
		},
		{
			page: '/press-kit',
			freq: freq.daily,
			priority: 0.7
		},
		{
			page: '/about',
			freq: freq.daily,
			priority: 0.7
		},
		{
			page: '/contribute',
			freq: freq.daily,
			priority: 0.7
		},
		{
			page: '/download',
			freq: freq.daily,
			priority: 1.0
		}
	];
	const date = '2023-12-20';

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
      ${pageData
				.map(
					(elem) => `
        <url>
          <loc>${website}${elem.page}</loc>
          <changefreq>${elem.freq}</changefreq>
          <priority>${elem.priority.toLocaleString('en-US', {
						minimumFractionDigits: 1,
						maximumFractionDigits: 1
					})}</priority>
          <lastmod>${date}</lastmod>
        </url>
      `
				)
				.join('')}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
