export function getWaktuIndonesia(): string {
  const now = new Date();

  const hour = Number(
    now.toLocaleTimeString("id-ID", { hour12: false, timeZone: "Asia/Jakarta" }).split(":")[0]
  );

  if (hour >= 4 && hour < 10) return "Pagi";    // 04:00 - 09:59
  if (hour >= 10 && hour < 15) return "Siang"; // 10:00 - 14:59
  if (hour >= 15 && hour < 18) return "Sore";  // 15:00 - 17:59
  return "Malam";                              // 18:00 - 03:59
}