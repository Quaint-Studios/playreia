import { website } from '$lib/info';

interface Freq {
	always: string;
	hourly: string;
	daily: string;
	weekly: string;
	monthly: string;
	yearly: string;
	never: string;
}

const freq: Freq = {
	always: 'always',
	hourly: 'hourly',
	daily: 'daily',
	weekly: 'weekly',
	monthly: 'monthly',
	yearly: 'yearly',
	never: 'never'
};

export async function GET() {
	interface PageData {
		page: string;
		freq: string;
		priority: number;
		lastmod?: string;
	}

	const pageData: PageData[] = [
		{
		  page: '/',
		  freq: freq.daily,
		  priority: 1.0,
		  lastmod: '2024-12-22'
		},
		{
		  page: '/dev-blog',
		  freq: freq.weekly,
		  priority: 0.8
		},
		{
		  page: '/events',
		  freq: freq.weekly,
		  priority: 0.8
		},
		{
		  page: '/game-update',
		  freq: freq.weekly,
		  priority: 0.8
		},
		{
		  page: '/guide',
		  freq: freq.weekly,
		  priority: 0.8
		},
		{
		  page: '/news',
		  freq: freq.weekly,
		  priority: 0.8
		},
		{
		  page: '/patch-notes',
		  freq: freq.weekly,
		  priority: 0.8
		},
		{
		  page: '/about-us',
		  freq: freq.yearly,
		  priority: 0.8
		},
		{
		  page: '/blog',
		  freq: freq.daily,
		  priority: 0.7
		},
		{
		  page: '/contact',
		  freq: freq.yearly,
		  priority: 0.7
		},
		{
		  page: '/contribute',
		  freq: freq.yearly,
		  priority: 0.7
		},
		{
		  page: '/contribute/backers',
		  freq: freq.weekly,
		  priority: 0.7
		},
		{
		  page: '/download',
		  freq: freq.monthly,
		  priority: 0.9
		},
		{
		  page: '/faq',
		  freq: freq.yearly,
		  priority: 0.3
		},
		{
		  page: '/foldingathome',
		  freq: freq.yearly,
		  priority: 0.6
		},
		{
		  page: '/game',
		  freq: freq.monthly,
		  priority: 0.9
		},
		{
		  page: '/game-design-document',
		  freq: freq.yearly,
		  priority: 0.8
		},
		{
		  page: '/jobs',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn',
		  freq: freq.yearly,
		  priority: 0.8
		},
		{
		  page: '/learn/characters',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/characters/bosses',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/characters/monsters',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/characters/npcs',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/characters/spirits',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/gameplay',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/guides',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/items',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/items/consumables',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/items/equipment',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/items/materials',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/items/quest-items',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/items/soulstones',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/items/weapons',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/locations',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/locations/cities',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/locations/dungeons',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/locations/infinite-city',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/lore',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/lore/ethereals',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/learn/skills',
		  freq: freq.monthly,
		  priority: 0.7
		},
		{
		  page: '/login',
		  freq: freq.yearly,
		  priority: 0.6
		},
		{
		  page: '/newsletter',
		  freq: freq.yearly,
		  priority: 0.7
		},
		{
		  page: '/press-kit',
		  freq: freq.monthly,
		  priority: 0.8
		},
		{
		  page: '/privacy',
		  freq: freq.yearly,
		  priority: 0.3
		},
		{
		  page: '/register',
		  freq: freq.yearly,
		  priority: 0.7
		},
		{
		  page: '/terms',
		  freq: freq.yearly,
		  priority: 0.3
		}
	  ];
	const date = '2024-12-22';

	return new Response(
		`<?xml version="1.0" encoding="UTF-8" ?>
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
    <lastmod>${elem.lastmod != undefined ? elem.lastmod : date}</lastmod>
  </url>
  `
		)
		.join('')
		.trim()}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
