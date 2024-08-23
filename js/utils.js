function formatDateString(dateString) {
  const date = new Date(dateString);
  if (isNaN(date)) return dateString; // 유효한 날짜가 아니면 원본 텍스트 반환

  const options = { year: "numeric", month: "short", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
}

function formatText(text) {
  // YYYY-MM-DD 형식의 날짜를 찾아서 포맷
  const datePattern = /\b\d{4}-\d{2}-\d{2}\b/g;
  return text.replace(datePattern, (match) => formatDateString(match));
}
