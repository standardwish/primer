// HTML 파일을 로드하는 함수
function loadSidebarHtml(callback) {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    // 사이드바가 이미 로드된 경우, 콜백을 바로 호출
    callback(sidebar);
    return;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("GET", chrome.runtime.getURL("../sidebar.html"), true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      console.error("Failed to load sidebar.html:", xhr.statusText);
    }
  };
  xhr.send();
}

// 메시지 리스너
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "text-selection") {
    showSidebar(request.payload.message);
  }
});

// 사이드바를 보여주는 함수
function showSidebar(text) {
  let sidebar = document.getElementById("sidebar");
  if (!sidebar) {
    loadSidebarHtml((html) => {
      const container = document.createElement("div");
      container.innerHTML = html;
      document.body.appendChild(container);

      sidebar = document.getElementById("sidebar");
      document.getElementById("scraped-text").textContent = text;

      document.getElementById("close-btn").addEventListener("click", () => {
        sidebar.style.display = "none";
      });

      document.getElementById("add-btn").addEventListener("click", () => {
        alert("캘린더에 추가 기능이 실행되었습니다.");
      });
    });
  } else {
    document.getElementById("scraped-text").textContent = text;
  }
}
