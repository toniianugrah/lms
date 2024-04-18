export function getAvatarFallback(fullname = '') {
  return fullname
    .split(' ')
    .slice(0, 2)
    .map((name) => name[0])
    .join('')
    .toUpperCase();
}
