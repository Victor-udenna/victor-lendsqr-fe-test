export function truncateText(text?: string, maxLength: number = 15): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 2) + "...";
}
