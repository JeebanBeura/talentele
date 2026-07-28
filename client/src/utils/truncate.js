export function truncate(str, length = 100, suffix = "...") {
  if (!str) return "";
  if (str.length <= length) return str;
  return str.substring(0, length).trim() + suffix;
}
