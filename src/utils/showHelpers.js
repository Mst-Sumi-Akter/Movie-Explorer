export function cleanSummary(summary) {
  return summary?.replace(/<[^>]*>/g, '') || 'No synopsis is available for this title yet.'
}

export function formatYear(date) {
  return date ? new Date(date).getFullYear() : 'TBA'
}
