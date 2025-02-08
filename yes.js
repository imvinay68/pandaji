const febHolidays = [
    "Dear Pranjal, every heartbeat of mine says your name ❤️",
    "You are my first thought in the morning and my last before I sleep 😘",
    "No matter how far you are, my heart always finds its way to you 🤞",
    "You are the most beautiful chapter of my life ✨",
    "My love for you is like an infinite loop, never-ending and always running 💖",
    "With you, every moment feels like a dream I never want to wake up from 🥰",
    "You are the only constant in my life’s equation ✔",
    "Every day with you is a gift I never take for granted 🎁",
    "You are my happiness, my peace, my home 🏡",
    "No code, no logic, no AI can define the depth of my love for you 💻💕",
    "Pranjal, you are the light in my darkest nights 🌟",
    "Loving you is the most beautiful feeling I have ever known 😍",
    "In every heartbeat, in every breath, it’s always you ❣",
    "You make my world brighter, happier, and so much better 🌍❤️",
    "I never knew what true love was until I met you 😘",
    "You are not just my love, you are my biggest blessing 🙏",
    "Your voice is the sweetest melody I ever want to hear 🎶",
    "No distance can ever change what I feel for you 🤞",
    "I never believed in soulmates until I found you ✨💕",
    "My life without you would be like code without execution—pointless 😅",
    "Every small thing about you makes me love you even more 🥺",
    "You are the most beautiful and kind-hearted person I know 💖",
    "Your smile is the magic that makes my worst days better 😊",
    "You are the reason behind my endless motivation and dreams 🌈",
    "You’re my most precious treasure, my private variable only I can access 🤭",
    "You are the answer to every question my heart ever asked ❣",
    "With you, I don’t just exist—I truly live 🥰",
    "You are my past, present, and the most beautiful future I dream of ❤️",
    "No matter how many lifetimes I had, I would choose you every time 💕",
    "You are my greatest adventure, my favorite story 📖",
    "Even in silence, our hearts talk in a language only we understand 🤍",
    "Loving you is the only thing I never want to stop doing 💖",
    "You are my reality, my fairytale, my everything 😘",
    "My world starts and ends with you 🏡💑",
    "You make me believe in love, in destiny, in miracles ✨",
    "Whenever I close my eyes, all I see is you 😍",
    "You are my inspiration, my support, my forever 💕",
    "Every ‘I love you’ from you is my favorite sound ❣",
    "Pranjal, you are my world, my everything, my always 🥰",
    "I love you today, tomorrow, and forever ❤️"
];

  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  