document.addEventListener("DOMContentLoaded", function () {
  const content = document.querySelector(".content");
  const sidebar = document.getElementById("sidebar");
  const scrapedTextDiv = document.getElementById("scraped-text");
  const closeBtn = document.getElementById("close-btn");

  // 텍스트를 선택했을 때 발생하는 이벤트 핸들러
  content.addEventListener("mouseup", function (event) {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      scrapedTextDiv.textContent = selectedText;
      sidebar.classList.add("open");
    }
  });

  // 사이드바 닫기 버튼 이벤트 핸들러
  closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("open");
  });

  // 화면의 다른 곳을 클릭해도 사이드바를 닫기 위한 이벤트 핸들러
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !content.contains(event.target)) {
      sidebar.classList.remove("open");
    }
  });
});
