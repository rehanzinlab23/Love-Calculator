function calculateLove() {
  const yourName = document.getElementById("yourName").value.trim().toLowerCase();
  const partnerName = document.getElementById("partnerName").value.trim().toLowerCase();
  const result = document.getElementById("result");

  document.querySelectorAll(".floating-heart").forEach(h => h.remove());
  document.querySelectorAll(".floating-skull").forEach(h => h.remove());

  if (!yourName || !partnerName) {
    return showResult("💬 Please enter both names!");
  }

  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(yourName) || !nameRegex.test(partnerName)) {
    return showResult("⚠️ Please enter valid names — numbers or symbols are not allowed!");
  }

  // Make order-independent string (remove spaces too)

  const combo = [yourName.replace(/\s+/g, ""), partnerName.replace(/\s+/g, "")]
    .sort()
    .join("");

  const specialCombo99 = ["rehan", "zunaira"].sort().join("");
  const specialCombo0 = ["farhan", "mahnoor"].sort().join("");
  const specialCombo01 = ["fatima", "sarim"].sort().join("");
  const specialCombo02 = ["usman", "zunaira"].sort().join("");
  const specialCombo03 = ["umair", "zunaira"].sort().join("");

  if (combo === specialCombo99) {
    createFloatingHearts();
    return showResult(`
      💞 ${yourName.toUpperCase()} ❤️ ${partnerName.toUpperCase()} <br>
      Compatibility: <strong>100%</strong> 💖<br>
      🌹 A destined match written in the stars! 🌹
    `);
  }

  if (combo === specialCombo0) {
    createFloatingSkulls()
    return showResult(`
       ${yourName.toUpperCase()} & ${partnerName.toUpperCase()} <br>
      Compatibility: <strong>0%</strong>💀<br>
      🚫 Some connections are just not meant to be...
    `);
  }

  if (combo === specialCombo01) {
    createFloatingSkulls()
    return showResult(`
       ${yourName.toUpperCase()} & ${partnerName.toUpperCase()} <br>
      Compatibility: <strong>0%</strong>💀<br>
      🚫 Some connections are just not meant to be...
    `);
  }

  if (combo === specialCombo02) {
    createFloatingSkulls()
    return showResult(`
       ${yourName.toUpperCase()} & ${partnerName.toUpperCase()} <br>
      Compatibility: <strong>0%</strong>💀<br>
      🚫 Some connections are just not meant to be...
    `);
  }

  if (combo === specialCombo03) {
    createFloatingLaugh()
    return showResult(`
       ${yourName.toUpperCase()} & ${partnerName.toUpperCase()} <br>
      Compatibility: <strong>0%</strong>😂<br>
     Khwab mei bh moto sy pyar ni ho skta! 😂
    `);
  }

  if (yourName === partnerName) {
    createFloatingHearts();
    return showResult(`
      💖 ${yourName.toUpperCase()} Truly Loves Themselves! <br>
      Compatibility: <strong>100%</strong> ❤️
    `);
  }

  const combined = combo;
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = combined.charCodeAt(i) + ((hash << 5) - hash);
    hash |= 0;
  }
  const lovePercent = 50 + Math.abs(hash % 51);

  createFloatingHearts();
  showResult(`
    💞 ${yourName.toUpperCase()} ❤️ ${partnerName.toUpperCase()} <br>
    Compatibility: <strong>${lovePercent}%</strong>
  `);
}

function showResult(html) {
  const result = document.getElementById("result");
  result.style.display = "block";
  result.innerHTML = html;
}

// createFloatingHearts()

function createFloatingHearts() {
  for (let i = 0; i < 10; i++) {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "💖";
    document.body.appendChild(heart);

    const x = Math.random() * window.innerWidth;
    const duration = 3 + Math.random() * 2;

    heart.style.left = `${x}px`;
    heart.style.animationDuration = `${duration}s`;

    setTimeout(() => heart.remove(), duration * 2000);
  }
}

// createFloatingSkulls()

function createFloatingSkulls() {
  for (let i = 0; i < 10; i++) {
    const skull = document.createElement("div");
    skull.classList.add("floating-heart");
    skull.innerHTML = "💀";
    document.body.appendChild(skull);

    const x = Math.random() * window.innerWidth;
    const duration = 3 + Math.random() * 2;

    skull.style.left = `${x}px`;
    skull.style.animationDuration = `${duration}s`;

    setTimeout(() => skull.remove(), duration * 2000);
  }
}

//  createFloatingLaugh()

function createFloatingLaugh() {
  for (let i = 0; i < 10; i++) {
    const skull = document.createElement("div");
    skull.classList.add("floating-heart");
    skull.innerHTML = "😂";
    document.body.appendChild(skull);

    const x = Math.random() * window.innerWidth;
    const duration = 3 + Math.random() * 2;

    skull.style.left = `${x}px`;
    skull.style.animationDuration = `${duration}s`;

    setTimeout(() => skull.remove(), duration * 2000);
  }
}