import { track as vercelTrack } from '@vercel/analytics'

export function track(event: string, properties?: Record<string, string>) {
  try {
    vercelTrack(event, properties)
  } catch {
    // Analytics unavailable in dev — fail silently
  }
}
