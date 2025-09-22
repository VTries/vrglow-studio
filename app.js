document.addEventListener("DOMContentLoaded", () => {
  const greetings = [
    "🎭 Welcome to VRGlow Studio, adventurer!",
    "🌌 Your VR world, your rules.",
    "✨ Glow like never before in VR!",
    "🕺 Strike a pose, you look amazing!"
  ];
  document.getElementById("dailyGreeting").innerText =
    greetings[new Date().getDate() % greetings.length];

  const upload = document.getElementById("imageUpload");
  const preview = document.getElementById("previewContainer");
  const filterSelector = document.getElementById("filterSelector");
  const downloadButtons = document.getElementById("downloadButtons");

  upload.addEventListener("change", () => {
    preview.innerHTML = "";
    filterSelector.innerHTML = "";
    downloadButtons.innerHTML = "";
    Array.from(upload.files).forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement("img");
        img.src = e.target.result;
        preview.appendChild(img);

        const rec = document.createElement("p");
        rec.innerText = `Recommended filter for image ${index + 1}: GlowBoost`;
        filterSelector.appendChild(rec);

        const btn = document.createElement("button");
        btn.innerText = "Download";
        btn.onclick = () => {
          const a = document.createElement("a");
          a.href = img.src;
          a.download = `VRGlow_${index + 1}.png`;
          a.click();
        };
        downloadButtons.appendChild(btn);
      };
      reader.readAsDataURL(file);
    });
  });

  // Premium logic
  const premiumSection = document.getElementById("premiumSection");
  const friendCode = "FRIENDS2025";
  const gfCode = "BABYV2025";

  const input = document.createElement("input");
  input.placeholder = "Enter premium code";
  const submit = document.createElement("button");
  submit.innerText = "Unlock";
  submit.onclick = () => {
    if (input.value === friendCode) {
      alert("💖 Hey bestie! Thanks for joining premium. Unlimited access unlocked!");
    } else if (input.value === gfCode) {
      alert("🔥 Hey baby 😉 Sexy premium unlocked, just for you!");
    } else {
      alert("❌ Invalid code.");
    }
  };

  premiumSection.appendChild(input);
  premiumSection.appendChild(submit);
});
