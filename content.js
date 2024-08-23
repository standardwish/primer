// content.js

// 사이드바 요소를 페이지에 삽입
const sidebar = document.createElement("div");
sidebar.id = "my-extension-sidebar";
sidebar.style.position = "fixed";
sidebar.style.top = "0";
sidebar.style.right = "0";
sidebar.style.width = "300px";
sidebar.style.height = "100vh";
sidebar.style.backgroundColor = "white";
sidebar.style.boxShadow = "-2px 0 5px rgba(0,0,0,0.1)";
sidebar.style.zIndex = "10000";
document.body.appendChild(sidebar);

// React 앱을 사이드바에 로드
const root = document.createElement("div");
root.id = "root";
sidebar.appendChild(root);

const script = document.createElement("script");
script.type = "module";
script.src = chrome.runtime.getURL("src/main.tsx");
document.head.appendChild(script);
