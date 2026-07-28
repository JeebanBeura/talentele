export function formatDate(dateString, options = {}) {
  const date = new Date(dateString);
  const defaultOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", { ...defaultOptions, ...options }).format(date);
}
