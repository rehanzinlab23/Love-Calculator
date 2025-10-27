   function calculateLove() {
               const yourName = document.getElementById("yourName").value.trim();
               const partnerName = document.getElementById("partnerName").value.trim();
               const result = document.getElementById("result");

               if (!yourName || !partnerName) {
                    result.style.display = "block";
                    result.innerHTML = "💬 Please enter both names!";
                    return;
               }

               // Generate a random love percentage
               const lovePercent = Math.floor(Math.random() * 51) + 50;

               result.style.display = "block";
               result.innerHTML = `
    💞 ${yourName} ❤️ ${partnerName} <br>
    Compatibility: <strong>${lovePercent}%</strong>
  `;
          }