document.addEventListener("DOMContentLoaded", () => {
  // REGISTER
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = document.getElementById("regUsername").value.trim();
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("regConfirmPassword").value;
      if (password !== confirmPassword) {
        return alert("❗ ពាក្យសម្ងាត់មិនត្រូវគ្នា");
      }
      localStorage.setItem("user", JSON.stringify({ username, password }));
      alert("✔️ ចុះឈ្មោះជោគជ័យ!");
      window.location.href = "login.html";
    });
  }

  // LOGIN
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", e => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.username === username && storedUser.password === password) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "welcome.html";
      } else {
        alert("❌ ឈ្មោះអ្នកប្រើ ឬ ពាក្យសម្ងាត់មិនត្រឹមត្រូវ!");
      }
    });
  }

  // PROFILE
  const profileForm = document.getElementById("profileForm");
  if (profileForm) {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      document.getElementById("profileName").value = storedUser.username || "";
      document.getElementById("profileEmail").value = storedUser.email || "";
      document.getElementById("profileBio").value = storedUser.bio || "";
      if (storedUser.avatar) {
        document.getElementById("avatarPreview").src = storedUser.avatar;
      }
    }
    const avatarUpload = document.getElementById("avatarUpload");
    avatarUpload.addEventListener("change", e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => document.getElementById("avatarPreview").src = reader.result;
        reader.readAsDataURL(file);
      }
    });
    profileForm.addEventListener("submit", e => {
      e.preventDefault();
      const updatedUser = {
        ...storedUser,
        username: document.getElementById("profileName").value.trim(),
        email: document.getElementById("profileEmail").value.trim(),
        bio: document.getElementById("profileBio").value.trim(),
        avatar: document.getElementById("avatarPreview").src
      };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      alert("✔️ ព័ត៌មានត្រូវបានរក្សាទុក!");
      window.location.href = "welcome.html";
    });
  }

  // LOGOUT
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedIn");
      window.location.href = "login.html";
    });
  }

  // WELCOME
  const userDisplay = document.getElementById("userDisplay");
  const userAvatar = document.getElementById("userAvatar");
  if (userDisplay && userAvatar) {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      
      userDisplay.textContent = ` ${storedUser.username}​​ អ្នកពិតជាសំណាងណាស់ដែលស្គាល់គេហទំព័រនេះព្រោះថ្នាក់រៀន​ទាំងអស់គឺ FREE⭐​ `;
      userAvatar.src = storedUser.avatar || "assets/images/default-avatar.png";
    }
  }
});
