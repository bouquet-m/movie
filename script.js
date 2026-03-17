// すべての初期化を1つのDOMContentLoadedでまとめる
document.addEventListener('DOMContentLoaded', function() {
  // ポスター画像のロード待機
  const posterImage = document.querySelector('.poster-image');
  const loadingOverlay = document.querySelector('.loading-overlay');
  
  if(posterImage && loadingOverlay) {
    // 画像のロードが完了したかチェック
    if(posterImage.complete) {
      // 既にキャッシュされている場合
      setTimeout(() => {
        loadingOverlay.classList.add('fade-out');
        setTimeout(() => {
          loadingOverlay.style.display = 'none';
        }, 500);
      }, 3000);
    } else {
      // ロード中の場合
      posterImage.onload = function() {
        // 画像ロード完了後、3秒後にローディング画面を非表示
        setTimeout(() => {
          loadingOverlay.classList.add('fade-out');
          setTimeout(() => {
            loadingOverlay.style.display = 'none';
          }, 500);
        }, 3000);
      };
    }
  }
  
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
