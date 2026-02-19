// すべての初期化を1つのDOMContentLoadedでまとめる
document.addEventListener('DOMContentLoaded', function() {
  // スクロール時フェードイン
  const fadeEls = document.querySelectorAll('.fadein');
  const fadeInOnScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();

  // フォーム送信時の処理
  const form = document.querySelector('form');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 隠しページへのパスワードチェック
      const name = document.querySelector('#name')?.value || '';
      const email = document.querySelector('#email')?.value || '';
      const message = document.querySelector('#message')?.value || '';
      
      if(name === 'ともか' && email === '@おめでとう' && message === '隠しページへ') {
        // 隠しページへリダイレクト
        window.location.href = 'hidden.html';
      } else {
        alert('お問い合わせありがとうございます！');
        form.reset();
      }
    });
  }

  // ハンバーガーメニュー開閉
  const menuBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if(menuBtn && navMenu) {
    menuBtn.addEventListener('click', function() {
      navMenu.classList.toggle('open');
    });
    // メニュー内リンククリックで自動クローズ（モバイル時）
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if(window.innerWidth < 900) navMenu.classList.remove('open');
      });
    });
  }
});
