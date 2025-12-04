const pages = [
  { title:"My Darling Caren", text:"The moment I saw you at Seretet Secondary School,<br>my heart stopped beating and started loving.<br>That day changed my life forever.", video:"https://videos.pexels.com/video-files/3047092/3047092-hd_1920_1080_30fps.mp4", song:"https://www.chosic.com/wp-content/uploads/2022/07/Scott-Buckley-Moonlight.mp3" },
  { title:"One Year of Pure Magic", text:"From shy smiles to holding hands,<br>every single memory with you is my greatest treasure.<br>I fall in love with you more every day.", video:"https://videos.pexels.com/video-files/854735/854735-hd_1920_1080_30fps.mp4", song:"https://www.chosic.com/wp-content/uploads/2022/07/You-Are-My-Sunshine.mp3" },
  { title:"May 13th — Our Forever Day", text:"Our anniversary is coming...<br>The most special day of my life.<br>I can't wait to celebrate 50 more with you, my future wife.", video:"https://videos.pexels.com/video-files/3195392/3195392-hd_1920_1080_30fps.mp4", song:"https://www.chosic.com/wp-content/uploads/2022/07/Ed-Sheeran-Perfect.mp3" },
  { title:"I Confess My Love", text:"Caren Chelangat Ronoh,<br>I love you more than words can ever express.<br>You are my peace, my joy, my home.<br>Forever isn't long enough.", video:"https://videos.pexels.com/video-files/855564/855564-hd_1920_1080_30fps.mp4", song:"https://www.chosic.com/wp-content/uploads/2022/07/John-Legend-All-of-Me.mp3" },
  { title:"You Are Perfect To Me", text:"Your smile lights up my entire world.<br>Your voice is my favorite sound.<br>You are the most beautiful person inside and out.", video:"https://videos.pexels.com/video-files/7579185/7579185-hd_1920_1080_30fps.mp4", song:"https://www.chosic.com/wp-content/uploads/2022/07/Bruno-Mars-Just-The-Way-You-Are.mp3" },
  { title:"Forever My Wife", text:"Caren, one day very soon I'll be on one knee.<br>Until then, know this:<br>You have my whole heart for my whole life.<br>I love you endlessly, my soulmate.", video:"https://videos.pexels.com/video-files/7565619/7565619-hd_1920_1080_30fps.mp4", song:"https://www.chosic.com/wp-content/uploads/2022/07/Elvis-Presley-Cant-Help-Falling-In-Love.mp3" }
];

function loadPage(n) {
  const p = pages[n-1];
  document.getElementById("bgVideo").src = p.video;
  document.getElementById("music").src = p.song;
  document.getElementById("title").innerHTML = p.title + " ❤️";
  document.getElementById("text").innerHTML = p.text;

  // Photo popup + falling hearts
  setTimeout(() => {
    document.getElementById("photoPopup").classList.add("show");
    createHearts();
  }, 1000);
}

function createHearts() {
  for(let i = 0; i < 35; i++) {
    const h = document.createElement("div");
    h.innerHTML = ["❤️","💕","🌹","💐","✨"][Math.floor(Math.random()*5)];
    h.style.cssText = `position:fixed; left:${Math.random()*100}vw; top:-60px; font-size:${25+Math.random()*20}px; 
                       animation:fall ${4+Math.random()*4}s linear forwards; z-index:99;`;
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }
}