export function ratio(now, yesterday) {
  return Math.round(((now - yesterday) / yesterday) * 100);
}
