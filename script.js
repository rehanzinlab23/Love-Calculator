function calculateLove() {
  const yourName = document.getElementById("yourName").value.trim().toLowerCase();
  const partnerName = document.getElementById("partnerName").value.trim().toLowerCase();
  const result = document.getElementById("result");

  // Check if empty
  if (!yourName || !partnerName) {
    result.style.display = "block";
    result.innerHTML = "💬 Please enter both names!";
    return;
  }

  //  Prevent numbers-only inputs
  const nameRegex = /^[a-zA-Z\s]+$/; 
  if (!nameRegex.test(yourName) || !nameRegex.test(partnerName)) {
    result.style.display = "block";
    result.innerHTML = "⚠️ Please enter valid names — numbers or symbols are not allowed!";
    return;
  }

  const combo = [yourName, partnerName].sort().join("");
  const specialCombo = ["rehan", "zunaira"].sort().join("");
  if (combo === specialCombo) {
    result.style.display = "block";
    result.innerHTML = `
      💞 ${yourName.toUpperCase()} ❤️ ${partnerName.toUpperCase()} <br>
      Compatibility: <strong>99%</strong> 💖<br>
      🌹 A destined match written in the stars! 🌹
    `;
    return;
  }

  if (yourName === partnerName) {
    result.style.display = "block";
    result.innerHTML = `
      💖 ${yourName.toUpperCase()} truly loves themselves! <br>
      Compatibility: <strong>100%</strong> ❤️
    `;
    return;
  }

  const combined = [yourName, partnerName].sort().join("");
  let hash = 0;
  for (let i = 0; i < combined.length; i++) {
    hash = combined.charCodeAt(i) + ((hash << 5) - hash);
    hash |= 0;
  }

  const lovePercent = 50 + Math.abs(hash % 21);

  result.style.display = "block";
  result.innerHTML = `
    💞 ${yourName.toUpperCase()} ❤️ ${partnerName.toUpperCase()} <br>
    Compatibility: <strong>${lovePercent}%</strong>
  `;
}