export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}
export function getCurrentTime(): { utc: Date; local: Date } {
  const now = new Date();
  const localNow = new Date(now.toLocaleString());
  return { utc: now, local: localNow };
}

export function formatDate(date: Date): string {
  console.log(date);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
