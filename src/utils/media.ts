export const DEFAULT_MEDIA_URL = 'https://raw.githubusercontent.com/Edwards67/astro-blog/main/src/data/astro-media.json'

export type MediaExternallyHostedVideo = {
    title: string
    description: string
    url: string
    host: string
    participants: Array<string>
    date: string
    thumbnail?: string
}
