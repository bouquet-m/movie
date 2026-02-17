// 必要に応じてJavaScriptを追加
// 例：フォーム送信時のアラート

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('お問い合わせありがとうございます！');
    });
  }
});
