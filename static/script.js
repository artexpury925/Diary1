const pages = [
  {
    title: "The Day My World Changed Forever",
    text: `
      <strong>My dearest Caren Chelangat Ronoh,</strong><br><br>
      It all began at Seretet Secondary School. I still remember that exact moment — 
      the sun was shining through the classroom window, and then you walked in.<br><br>
      
      My heart literally stopped. I forgot how to breathe. 
      I had never believed in love at first sight… until that second.<br><br>
      
      From that day, every prayer I made had your name in it. 
      Every dream I had at night had your beautiful smile. 
      I knew, even as a young boy, that God created you just for me.<br><br>
      
      You are the reason my heart learned how to beat.
    `,
    video: "https://videos.pexels.com/video-files/3047092/3047092-hd_1920_1080_30fps.mp4",
    song: "https://www.chosic.com/wp-content/uploads/2022/07/Scott-Buckley-Moonlight.mp3"
  },
  {
    title: "One Year of Being Yours",
    text: `
      <strong>365 days of pure magic…</strong><br><br>
      
      From nervous "hi" texts to late-night calls that lasted till sunrise.<br>
      From holding your hand for the first time (I was shaking!) to stealing kisses under the trees at school.<br><br>
      
      Every single moment with you feels like a movie only God could write.<br>
      You turned my ordinary life into the most beautiful love story.<br><br>
      
      I still save all your voice notes. I still smile at every photo of us. 
      I still thank God every single night that you chose me.<br><br>
      
      This has been the best year of my life — because it was spent loving you.
    `,
    video: "https://videos.pexels.com/video-files/854735/854735-hd_1920_1080_30fps.mp4",
    song: "https://www.chosic.com/wp-content/uploads/2022/07/You-Are-My-Sunshine.mp3"
  },
  {
    title: "May 13th — The Day You Became Mine",
    text: `
      <strong>May 13th will always be sacred to me…</strong><br><br>
      
      The day you said "Yes" to being my girlfriend.<br>
      The day my dreams stopped being dreams and became my reality.<br><br>
      
      I count down to every May 13th like a child waits for Christmas.<br>
      I already have our 2026 celebration planned — and 2027, 2028… all the way to when we're old and gray.<br><br>
      
      One day, on a future May 13th, I will be on one knee asking you to be my wife.<br>
      And I already know your answer will be "Yes" — because we were written in the stars long before we met.
    `,
    video: "https://videos.pexels.com/video-files/3195392/3195392-hd_1920_1080_30fps.mp4",
    song: "https://www.chosic.com/wp-content/uploads/2022/07/Ed-Sheeran-Perfect.mp3"
  },
  {
    title: "You Are My Home, My Peace, My Everything",
    text: `
      <strong>Caren Chelangat Ronoh,</strong><br><br>
      
      Before you, I was just existing.<br>
      After you, I started living.<br><br>
      
      When I'm with you, the world disappears. 
      When I hear your voice, all my worries melt away.<br>
      When you smile at me… I swear heaven comes down to earth.<br><br>
      
      You are my safe place. My happy place. My favorite place.<br>
      I want to wake up next to you for the rest of my life.<br>
      I want to build a family with you. I want to grow old with you.<br><br>
      
      You are not just my girlfriend.<br>
      You are my future wife. My soulmate. My forever.
    `,
    video: "https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_30fps.mp4",
    song: "https://www.chosic.com/wp-content/uploads/2022/07/John-Legend-All-of-Me.mp3"
  },
  {
    title: "You Are The Most Beautiful Woman In The World",
    text: `
      <strong>To me, you are perfection.</strong><br><br>
      
      The way you laugh with your whole heart.<br>
      The way your eyes light up when you talk about your dreams.<br>
      The way you care so deeply for everyone around you.<br><br>
      
      Your beauty is not just on the outside (though you are breathtaking).<br>
      Your beauty is in your kindness, your strength, your pure golden heart.<br><br>
      
      Every love song was written about you.<br>
      Every love poem was meant for you.<br>
      Every star in the sky shines a little brighter because you exist.<br><br>
      
      I am the luckiest man on earth — because I get to love you.
    `,
    video: "https://videos.pexels.com/video-files/7579185/7579185-hd_1920_1080_30fps.mp4",
    song: "https://www.chosic.com/wp-content/uploads/2022/07/Bruno-Mars-Just-The-Way-You-Are.mp3"
  },
  {
    title: "My Promise To You — Forever",
    text: `
      <strong>Caren, this is my vow to you:</strong><br><br>
      
      I will love you on your best days and hold you closer on your worst.<br>
      I will celebrate every victory with you and wipe away every tear.<br>
      I will choose you every single day for the rest of my life.<br><br>
      
      One day soon, I will put a ring on your finger.<br>
      I will stand before God and everyone we love and promise to love you forever.<br>
      And I will spend every day after that proving my promise is real.<br><br>
      
      You are my today, my tomorrow, my always.<br>
      My soulmate. My future wife. My Caren.<br><br>
      
      <strong>I love you more than words can ever say.<br>
      Thank you for being mine.</strong>
    `,
    video: "https://videos.pexels.com/video-files/7565619/7565619-hd_1920_1080_30fps.mp4",
    song: "https://www.chosic.com/wp-content/uploads/2022/07/Elvis-Presley-Cant-Help-Falling-In-Love.mp3"
  }
];

function loadPage(n) {
  const p = pages[n-1];
  document.getElementById("bgVideo").src = p.video;
  document.getElementById("music").src = p.song;
  document.getElementById("title").innerHTML = p.title;
  document.getElementById("text").innerHTML = p.text;

  // Romantic photo popup + lots of falling hearts & roses
  setTimeout(() => {
    const popup = document.getElementById("photoPopup");
    popup.classList.remove("show");
    setTimeout(() => {
      popup.classList.add("show");
      createHearts();
    }, 100);
  }, 800);
}

function createHearts() {
  const symbols = ["Red heart", "Two hearts", "Rose", "Bouquet", "Sparkles", "Glowing star"];
  for(let i = 0; i < 42; i++) {
    const h = document.createElement("div");
    h.innerHTML = symbols[Math.floor(Math.random()*6)];
    h.style.cssText = `
      position:fixed; 
      left:${Math.random()*100}vw; 
      top:-80px; 
      font-size:${28+Math.random()*25}px; 
      animation:fall ${3.5+Math.random()*4}s linear forwards; 
      z-index:99;
      pointer-events:none;
    `;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 10000);
  }
}