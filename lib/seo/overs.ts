/**
 * Overs: the sister product from the same founder. A separate product, not the same entity as
 * Ruminate X. It makes still photos only, never video.
 *
 * These are Overs' own published facts, read from www.overs.studio (pricing, how it works and
 * the guides) on 2026-09-24. Pages that mention Overs take them from here, interpolated in code,
 * and say it is the sister product from the same founder wherever they recommend it.
 *
 * Pages do not say Ruminate X uses Overs. That claim needs Abhi's confirmation recorded in
 * lib/seo/facts.ts first.
 */
export const OVERS = {
  name: 'Overs',
  url: 'https://www.overs.studio',
  pricingUrl: 'https://www.overs.studio/pricing',
  relation: 'the sister product from the same founder',
  plain: 'an AI tool that makes product and campaign photos that match a brand, without a photo shoot',
  origin: 'the process 100creatives used to make hundreds of photos a week for hundreds of brands',
  freePhotosPerMonth: 40,
  proPerMonth: '$29',
  teamPerMonth: '$99',
  /** Model fees are separate on every plan, paid to OpenRouter on the user's own key. Overs adds no markup. */
  aiCostPerPhoto: 'a few cents',
  /** Overs writes a text motion prompt per photo for a video model. It makes no video itself. */
  motionModels: 'Seedance or Veo',
  /** Per-photo prices the model makers publish, as Overs lists them (USD, one render). */
  renderers: [
    { name: 'Nano Banana 2 Lite', maker: 'Google', perPhoto: '$0.034' },
    { name: 'GPT Image 2.5 Flare', maker: 'OpenAI', perPhoto: '$0.053' },
    { name: 'Nano Banana 2', maker: 'Google', perPhoto: '$0.067' },
    { name: 'Nano Banana Pro', maker: 'Google', perPhoto: '$0.134' },
    { name: 'GPT Image 2', maker: 'OpenAI', perPhoto: '$0.21' },
  ],
  planningPerRun: 'about 20 cents',
  checked: '2026-09-24',
} as const

/**
 * First-hand numbers from 100creatives, the agency from the same founder, as published in Overs'
 * guide below: four campaigns made in 2026 with AI image models, built by hand in Figma Weave.
 * A render is any image the model returned; a keeper is the one an art director picked. Never name the brands.
 */
export const AGENCY_RENDERS = {
  source: 'https://www.overs.studio/guides/how-many-ai-renders-per-usable-photo',
  campaigns: 4,
  year: 2026,
  renders: 361,
  keepers: 45,
  perKeeper: 'about 8',
  byCampaign: [
    { job: 'gummy supplement ads', renders: 38, keepers: 12, perKeeper: '3.2' },
    { job: "men's trousers on a model", renders: 40, keepers: 11, perKeeper: '3.6' },
    { job: 'brownie food ads with motion', renders: 120, keepers: 10, perKeeper: '12.0' },
    { job: 'surf apparel on one model in studio, cliff and ocean scenes', renders: 163, keepers: 12, perKeeper: '13.6' },
  ],
} as const

/**
 * Arithmetic on published prices, checked 2026-09-24. Pages show the assumption next to the number.
 * Per usable photo: 8 renders per keeper times one render on Nano Banana 2 Lite ($0.034) or GPT Image 2
 * at high quality ($0.211). The 30-photo set is 10 white-background, 10 lifestyle and 10 on-model photos,
 * priced in Overs' shoot-cost guide; the Overs column is one month of Pro ($29), about 20 cents of planning
 * for each of three runs, and 3 renders per keeper on Nano Banana 2 ($0.067) at the low end, 8 on
 * Nano Banana 2 typically, 14 on GPT Image 2 at high quality at the high end. It leaves out review time.
 */
export const STILLS_MATH = {
  perUsablePhotoLow: '$0.27',
  perUsablePhotoHigh: '$1.69',
  setSize: 30,
  studio: '$2,026',
  crew: '$13,790',
  oversLow: '$36',
  oversTypical: '$46',
  oversHigh: '$118',
  lowRenders: 90,
  typicalRenders: 240,
  highRenders: 420,
  shootCostGuide: 'https://www.overs.studio/guides/how-much-does-a-product-photo-shoot-cost',
} as const
