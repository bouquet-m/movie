// スライドショー背景切替（複数画像対応）
document.addEventListener('DOMContentLoaded', function() {
  const bg = document.querySelector('.slideshow-bg');
  console.log('[Slideshow] slideshow-bg elements found:', bg ? 'Yes' : 'No');
  if (!bg) return;
  
  // hana_a.png, hana_b.png, hana_c.pngを5秒ごとにフェード
  const images = ['a', 'b', 'c'];
  const slides = images.map(cls => {
    const div = document.createElement('div');
    div.className = `slide-img ${cls}`;
    div.style.backgroundImage = `url('images/hana_${cls}.png')`;
    bg.appendChild(div);
    console.log(`[Slideshow] Created slide ${cls}:`, div);
    return div;
  });
  
  let currentIdx = 0;
  
  function showSlide(idx) {
    slides.forEach((el, i) => {
      el.classList.toggle('active', i === idx);
      console.log(`[Slideshow] ${el.className}: active=${i === idx}`);
    });
  }
  
  // 初回表示
  showSlide(currentIdx);
  console.log('[Slideshow] Initial slide shown:', currentIdx);
  
  // 5秒ごとに切り替え
  setInterval(() => {
    currentIdx = (currentIdx + 1) % slides.length;
    showSlide(currentIdx);
    console.log('[Slideshow] Switched to:', currentIdx);
  }, 5000);
});
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
