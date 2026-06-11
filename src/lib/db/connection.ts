export function getSslOption(url: string) {
  const isLocal = /localhost|127\.0\.0\.1/.test(url);
  return isLocal ? false : ("require" as const);
}
