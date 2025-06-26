export function formatDate(dateString: string): string {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];

  const [year, month, day] = dateString.split("-").map(Number);

  if (!year || !month || !day) return "Неверный формат даты";

  return `${day} ${months[month - 1]} ${year} г.`;
}
