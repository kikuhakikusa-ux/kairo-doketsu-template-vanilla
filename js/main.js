// =========================================================
// アプリのエントリポイント
// ここにあなたのアプリのロジックを書きます。
// 外部ライブラリは <script src="..."> で index.html に読み込む方式（CDN）でOK。
// =========================================================

// --- デモ：ボタンを押すとメッセージが出るだけのサンプル。消して使ってください。---
const btn = document.getElementById("demo-btn");
const out = document.getElementById("demo-out");

if (btn && out) {
  let count = 0;
  btn.addEventListener("click", () => {
    count += 1;
    out.textContent = `${count} 回 タップしたよ！ここからアプリを作っていこう ✨`;
  });
}
