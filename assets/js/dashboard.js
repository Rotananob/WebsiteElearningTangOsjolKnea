document.addEventListener("DOMContentLoaded", () => {
  // ========== SIDEBAR TOGGLE ==========
  const toggleSidebar = document.getElementById("toggleSidebar");
  const sidebar = document.getElementById("sidebar");
  if (toggleSidebar && sidebar) {
    toggleSidebar.addEventListener("click", () => {
      sidebar.classList.toggle("collapsed");
    });
  }

  // ========== NOTIFICATIONS ==========
  const notifBtn = document.getElementById("notifBtn");
  const notifDropdown = document.getElementById("notifDropdown");
  const notifList = document.getElementById("notifList");
  const notifCount = document.getElementById("notifCount");
  const clearNotif = document.getElementById("clearNotif");

  let notifications = JSON.parse(localStorage.getItem("notifications")) || [];

  function getCurrentTime() {
    return new Date().toLocaleString("km-KH", {
      dateStyle: "short",
      timeStyle: "short",
    });
  }

  function renderNotifications() {
    if (!notifList || !notifCount) return;
    notifList.innerHTML = "";
    notifications.forEach((n) => {
      let li = document.createElement("li");
      li.innerHTML = `<strong>${n.text}</strong><br><small>🕒 ${n.time}</small>`;
      notifList.appendChild(li);
    });
    notifCount.textContent = notifications.length;
    notifCount.style.display = notifications.length > 0 ? "inline-block" : "none";
  }

  function addNotification(message) {
    notifications.push({ text: message, time: getCurrentTime() });
    localStorage.setItem("notifications", JSON.stringify(notifications));
    renderNotifications();
  }

  if (notifBtn) {
    notifBtn.addEventListener("click", () => {
      notifDropdown.classList.toggle("show");
    });
  }

  if (clearNotif) {
    clearNotif.addEventListener("click", () => {
      notifications = [];
      localStorage.setItem("notifications", JSON.stringify(notifications));
      renderNotifications();
    });
  }

  if (!localStorage.getItem("notifInit")) {
    addNotification("សូមស្វាគមន៍មកកាន់ X-Flow E-learning🎓");
    addNotification("នេះជាប្រភេទ Website FrontEnd SPA ដូច្នេះdata ទាំងប៉ុន្មាននឹងរក្សាក្នុងត្រឹមbrowser🧾");
   addNotification("ចំណាយពេល១ថ្ងៃ ៣០នាទីរៀនដើម្បីរីកចម្រើន📈");
      addNotification("💌សូមចុចកន្លែងរបារមឺនុយហើយ join us ដើម្បីផ្ដល់ជាមតិមកយើងវិញថាគួរបន្លែមមេរៀនអ្វីទៀត?​🫂🗨️");



    localStorage.setItem("notifInit", "true");
  }

  renderNotifications();

  document.addEventListener("click", (e) => {
    if (notifBtn && notifDropdown) {
      if (!notifBtn.contains(e.target) && !notifDropdown.contains(e.target)) {
        notifDropdown.classList.remove("show");
      }
    }
  });

  // ========== USER INFO ==========
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) {
    const headerName = document.getElementById("headerName");
    const headerAvatar = document.getElementById("headerAvatar");
    if (headerName) headerName.textContent = storedUser.username || "អ្នកប្រើប្រាស់";
    if (headerAvatar) headerAvatar.src = storedUser.avatar || "assets/images/default-avatar.png";
  }

  // ========== LOGOUT ==========
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedIn");
      alert("🚪 អ្នកបានចាកចេញហើយ!");
      window.location.href = "index.html";
    });
  }

  // ========== COURSES (3-LEVEL STRUCTURE) ==========
  const courses = [

    
    {
      title: "👨‍💻 Programing",
      desc: "Web​ និង App development ,Game Development, Moblie App(IOS,Android) , Backend and Frontend.",
      category: "IT",
      modules: [
        {
          name: "Web Development Frontend ",
          
          lessons: [
            
            { name: "HTML Basics", link: "https://www.youtube.com/watch?v=qz0aGYrrlhU" },
            { name: "CSS Layout", link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" },
                        { name: "CSS Layout", link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" },
            { name: "CSS Layout", link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" },
            { name: "CSS Layout", link: "https://youtu.be/OkEuvm-kX9c?si=9NSNxjKHQc66YAio" },

          ]
        
        },  
        
        {
          name: "JavaScript",
          lessons: [
            { name: "JavaScript Intro", link: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
            { name: "ES6 Features", link: "https://www.youtube.com/watch?v=NCwa_xi0Uuc" }
          ]
        }
      ]
    },
    {
  title: "👩‍💻បង្កើតកម្មវិធី AIផ្សេងៗ",
  desc: "បង្កើតកម្មវិធីAI​ ដោយខ្លួនឯង បង្រៀនដោយគ្រូជំនាញផ្ទាល់​ ជាមេរៀនឯកជន មានវិឌីអូ+សៀវភៅមេរៀនហើយមាន Group ទាក់ទងគ្នាបានរាល់ចង្ងល់ផ្សេងៗ",
  price: "29.99$/3 Months ", // មានតម្លៃ
  category: "IT",
  modules: [
    {
      name: "🚫 មេរៀនក្នុង Folder នេះត្រូវបានលាក់",
      lessons: [
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
         { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

      { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
         { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },


      ]
    },
     {
      name: "🚫 មេរៀនក្នុង Folder នេះត្រូវបានលាក់",
      lessons: [
     { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
         { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

      { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
         { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },


      ]
    },
     {
      name: "⛔ មេរៀនក្នុង Folder នេះត្រូវបានលាក់",
      lessons: [
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        


       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
         { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

      { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
         { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },



      ]
    },
    {
      name: "⛔ មេរៀនក្នុង Folder នេះត្រូវបានលាក់",
      lessons: [
       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
         { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

    { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
         { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

      { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
{ name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
         { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

      { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
       { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
         { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },
        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },

        { name: "🚫tittle lesson hidden ", link: "http://127.0.0.1:5502/paymentClick.html" },


      ]
    },

    
  ]
},
    {
      title: "🏗️ វិស្វកម្ម",
      desc: "វិស្វកម្មសំណង់សំណង់ រៀនមូលដ្ធានដល់ខ្ពស់",
      category: "Engineering",
      modules: [
        {
          name: "General Engineering",
          lessons: [
            { name: "Engineering Basics", link: "https://www.youtube.com/watch?v=jHap7aCTC1I" },
            { name: "Civil Engineering", link: "https://www.youtube.com/watch?v=siRp5Qn4GEo" }
          ]
        }
      ]
    },
    {
      title: "🚑 ជំនួយ",
      desc: "ជំនួយបឋម និងការជួយក្នុងគ្រាគ្រោះថ្នាក់ណាមួយ",
      category: "Help",
      modules: [
        {
          name: "First Aid",
          lessons: [
            { name: "First Aid Basics", link: "https://youtu.be/kUMe1FH4CHE?si=EIEMzO3GBEZnLzq8" },
            { name: "CPR Training", link: "https://www.youtube.com/watch?v=cosVBV96E2g" }
          ]
        }
      ]
    },
    {
  title: "📢 ទំនាក់ទំនងសាធារណៈ",
  desc: "សិក្សាពីការផ្សព្វផ្សាយ និងគ្រប់គ្រងទំនាក់ទំនងសាធារណៈ",
  category: "PublicRelations",
  modules: [
    {
      name: "Public Relations Basics",
      lessons: [
        { name: "What is PR?", link: "https://youtu.be/VejDCJ9_wuk?si=34pH5a5Q7EzLejdT" },
        { name: "PR Strategies", link: "https://www.youtube.com/watch?v=abc" }
      ]
    }
  ]
},
{
  title: "⚖️ មេធាវី",
  desc: "មេធាវី និងច្បាប់ពាក់ព័ន្ធ",
  category: "Lawyer",
  modules: [
    {
      name: "Law Foundation",
      lessons: [
        { name: "Introduction to Law", link: "https://www.youtube.com/watch?v=VpWoUbGBltU" },
        { name: "Human Rights Basics", link: "https://www.youtube.com/watch?v=n3Xv_g3g-mA" }
      ]
    }
  ]
},
{
  title: "💊 Pharmacy",
  desc: "ឱសថសាស្ត្រ និងការប្រើប្រាស់ឱសថ",
  category: "Pharmacy",
  modules: [
    {
      name: "General Pharmacy",
      lessons: [
        { name: "Pharmacology 101", link: "https://www.youtube.com/watch?v=abc" },
        { name: "Biology Intro", link: "https://www.youtube.com/watch?v=xyz" }
      ]
    }
  ]
},
{
  title: "🗣️ ភាសា",
  desc: "រៀនភាសាអង់គ្លេស ចិន និងភាសាផ្សេងៗ",
  category: "Language",
  modules: [
    {
      name: "English",
      lessons: [
        { name: "English Basics", link: "https://www.youtube.com/watch?v=H1elmMBnykA" },
        { name: "Daily Conversation", link: "https://www.youtube.com/watch?v=oL5hQ5XW9mY" }
      ]
    },
    {
      name: "Chinese",
      lessons: [
        { name: "Chinese Pinyin", link: "https://www.youtube.com/watch?v=ZY6sW6okW9E" },
        { name: "Basic Conversation", link: "https://www.youtube.com/watch?v=dsz9A3AqS0o" }
      ]
    }
  ]
},
{
  title: "📜 ប្រវត្តិវិទ្យា",
  desc: "ការសិក្សាអំពីជីវប្រវត្តិ និងវប្បធម៌",
  category: "History",
  modules: [
    {
      name: "World History",
      lessons: [
        { name: "Ancient Civilizations", link: "https://www.youtube.com/watch?v=Z3Wvw6BivVI" },
        { name: "Modern History", link: "https://www.youtube.com/watch?v=2z3hu8jQ5oY" }
      ]
    },
    {
      name: "Khmer History",
      lessons: [
        { name: "Angkor Era", link: "https://www.youtube.com/watch?v=GZ8xV0f8Gbg" },
        { name: "Khmer Rouge Period", link: "https://www.youtube.com/watch?v=klj5Q6aXpkM" }
      ]
    }
  ]
},
{
  title: "🧪 គីមីចំណីអាហារ",
  desc: "ការសិក្សាអំពីគីមីវិទ្យានិងចំណីអាហារ",
  category: "FoodChemistry",
  modules: [
    {
      name: "Food Science",
      lessons: [
        { name: "Introduction to Food Chemistry", link: "https://www.youtube.com/watch?v=ZkT-NjKQjBk" },
        { name: "Food Preservation", link: "https://www.youtube.com/watch?v=6G2tDdG4U_4" }
      ]
    },
    {
      name: "Nutrition",
      lessons: [
        { name: "Basic Nutrition", link: "https://www.youtube.com/watch?v=HC-2pKk6qvU" },
        { name: "Food Safety", link: "https://www.youtube.com/watch?v=hX-8pGVdzsE" }
      ]
    }
  ]
},
{
  title: "🩺 វេជ្ជសាស្រ្ត",
  desc: "វេជ្ជសាស្រ្តទូទៅ និងទាក់ទងសុខភាព",
  category: "Medical",
  modules: [
    {
      name: "General Medicine",
      lessons: [
        { name: "Human Anatomy", link: "https://www.youtube.com/watch?v=uBGl2BujkPQ" },
        { name: "Medical Ethics", link: "https://www.youtube.com/watch?v=oyw-LT3UOQc" }
      ]
    },
    {
      name: "Nursing",
      lessons: [
        { name: "Nursing Basics", link: "https://www.youtube.com/watch?v=3U1M7l0jHs8" },
        { name: "Emergency Care", link: "https://www.youtube.com/watch?v=fvTqD9t9kT4" }
      ]
    }
  ]
},
{
  title: "⚡ អគ្គិសនី",
  desc: "ជំនាញអគ្គិសនី សុវត្ថិភាព និងការតភ្ជាប់",
  category: "Electrical",
  modules: [
    {
      name: "Basic Electrical",
      lessons: [
        { name: "Electrical Circuits", link: "https://www.youtube.com/watch?v=R9Z5jJ0Q0uM" },
        { name: "Ohm's Law", link: "https://www.youtube.com/watch?v=ZYI9h9ncz1A" }
      ]
    },
    {
      name: "Practical Electricity",
      lessons: [
        { name: "House Wiring", link: "https://www.youtube.com/watch?v=t2syYkqJJXM" },
        { name: "Electrical Safety", link: "https://www.youtube.com/watch?v=FlPGxDkRLK0" }
      ]
    }
  ]
},
{
  title: "🔧 មេកានិក",
  desc: "គ្រឿងយន្ត វិស្វកម្មម៉ាស៊ីន និងក្បួនដោះស្រាយបច្ចេកទេស",
  category: "Mechanical",
  modules: [
    {
      name: "Mechanics Basics",
      lessons: [
        { name: "Newton's Laws", link: "https://www.youtube.com/watch?v=Ghc-8U0nKV0" },
        { name: "Kinematics", link: "https://www.youtube.com/watch?v=x3JpFJXjzGk" }
      ]
    },
    {
      name: "Mechanical Engineering",
      lessons: [
        { name: "Thermodynamics", link: "https://www.youtube.com/watch?v=UpR0C1xFGF8" },
        { name: "Fluid Mechanics", link: "https://www.youtube.com/watch?v=qpj_YLr6Z1Q" }
      ]
    }
  ]
},

   {
      title: "👨‍💻 Graphic desgin",
      desc: "រៀនប្រ់ើប្រាស់កម្មវិធី , រចនារូបភាពឲទាក់ទាញ​ និង ការប្រើប្រាស់Toolថ្មីៗ",
      category: "IT",
      modules: [
        {
          name: "Web Development",
          lessons: [
            { name: "HTML Basics", link: "https://www.youtube.com/watch?v=qz0aGYrrlhU" },
            { name: "CSS Layout", link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" }
          ]
        },
        {
          name: "JavaScript",
          lessons: [
            { name: "JavaScript Intro", link: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
            { name: "ES6 Features", link: "https://www.youtube.com/watch?v=NCwa_xi0Uuc" }
          ]
        }
      ]
    },


   {
      title: "👨‍💻 Cyber Security",
      desc: "ស្វែងយល់ពីសន្តិសុខ internet​ និងការពារ  និងបច្ចេកវិទ្យាថ្មីៗ",
      category: "IT",
      modules: [
        {
          name: "Web Development",
          lessons: [
            { name: "HTML Basics", link: "https://www.youtube.com/watch?v=qz0aGYrrlhU" },
            { name: "CSS Layout", link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" }
          ]
        },
        {
          name: "JavaScript",
          lessons: [
            { name: "JavaScript Intro", link: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
            { name: "ES6 Features", link: "https://www.youtube.com/watch?v=NCwa_xi0Uuc" }
          ]
        }
      ]
    },
   {
      title: "👨‍💻 Vidoes Editor",
      desc: "រៀនពី workflow,soft skills,Creative, Technical,Software for  editing videos ",
      category: "IT",
      modules: [
        {
          name: "Web Development",
          lessons: [
            { name: "HTML Basics", link: "https://www.youtube.com/playlist?list=PL938URpgZ7qYQrfk-HHvzYJMsd576-P66" },
            { name: "CSS Layout", link: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" }
          ]
        },
        {
          name: "JavaScript",
          lessons: [
            { name: "JavaScript Intro", link: "https://www.youtube.com/watch?v=W6NZfCO5SIk" },
            { name: "ES6 Features", link: "https://www.youtube.com/watch?v=NCwa_xi0Uuc" }
          ]
        }
      ]
    },





  ];

  const courseList = document.getElementById("courseList");
  const chips = document.querySelectorAll(".chip");
  const searchInput = document.getElementById("searchInput");
  let activeCategory = "all";

  function highlightText(text, keyword) {
    if (!keyword) return text;
    const regex = new RegExp(`(${keyword})`, "gi");
    return text.replace(regex, `<mark>$1</mark>`);
  }

  function toYouTubeEmbed(link) {
    try {
      const url = new URL(link);
      const host = url.hostname.replace("www.", "");
      if (host.includes("youtube.com") && url.searchParams.get("v")) {
        return `https://www.youtube.com/embed/${url.searchParams.get("v")}?autoplay=1`;
      }
      if (host.includes("youtu.be")) {
        const id = url.pathname.replace("/", "");
        return `https://www.youtube.com/embed/${id}?autoplay=1`;
      }
      return link;
    } catch {
      return link;
    }
  }

  function renderCourses(filter = "all") {
    
    if (!courseList) return;
    const keyword = searchInput ? searchInput.value.toLowerCase() : "";
    courseList.innerHTML = "";

    courses.forEach(major => {
      const matchCategory = filter === "all" || filter === major.category;
      const matchKeyword =
        major.title.toLowerCase().includes(keyword) ||
        major.desc.toLowerCase().includes(keyword) ||
        (major.modules || []).some(m =>
          m.name.toLowerCase().includes(keyword) ||
          (m.lessons || []).some(ls => ls.name.toLowerCase().includes(keyword))
        );

      if (!(matchCategory && matchKeyword)) return;

      const wrapper = document.createElement("div");
      wrapper.className = "course";

      let modulesHtml = "";
      (major.modules || []).forEach(module => {
        const filteredLessons = (module.lessons || []).filter(ls =>
          !keyword || ls.name.toLowerCase().includes(keyword)
        );

        if (filteredLessons.length === 0 && keyword && !module.name.toLowerCase().includes(keyword)) {
          return;
        }

        let lessonsHtml = "<ul class='lesson-list hidden'>";
        filteredLessons.forEach(lesson => {
          lessonsHtml += `
            <li>
              📘 ${highlightText(lesson.name, keyword)}
              <button class="btn-small play-video" data-link="${lesson.link}" data-title="${lesson.name}">▶️ ចូលរៀន</button>
              <button class="btn-small favorite-btn" data-link="${lesson.link}" data-title="${lesson.name}">⭐ រក្សាទុក</button>
              
      
            </li>`;
        });
        lessonsHtml += "</ul>";

        modulesHtml += `
          <div class="module">
            <h4 class="module-header" style="cursor:pointer;">📂 ${highlightText(module.name, keyword)} ⬇️</h4>
            ${lessonsHtml}
          </div>
        `;
      });

      wrapper.innerHTML = `
  <h3>${highlightText(major.title, keyword)}</h3>
  <p>${highlightText(major.desc, keyword)}</p>
  ${
    major.price
      ? `<button class="btn-buy" data-title="${major.title}" data-price="${major.price}">💰 Subscribe (${major.price})</button>`
      : `<span class="course-note">🎁 Free Course</span>`
      
  }
  ${modulesHtml}
`;


      courseList.appendChild(wrapper);
    });

    if (!courseList.innerHTML.trim()) {
      courseList.innerHTML = "<p>❌ មិនទាន់មានវគ្គសិក្សាដែលអ្នកកំពុងស្វែងរកទេ!</p>";
    }

    attachLessonEvents();
    
    document.querySelectorAll(".btn-buy").forEach(btn => {
  btn.addEventListener("click", () => {
    const title = btn.dataset.title;
    const price = btn.dataset.price;

    // ផ្ទុកទិន្នន័យទៅ localStorage
    localStorage.setItem("selectedCourse", JSON.stringify({ title, price }));

    // បើកទៅ payment.html
    window.location.href = "payment.html";
  });
});

    attachModuleToggle();
  }

  renderCourses();

  if (searchInput) {
    searchInput.addEventListener("input", () => renderCourses(activeCategory));
  }

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.category;
      renderCourses(activeCategory);
    });
  });

  // ========== MODAL ==========
  const modal = document.getElementById("videoModal");
  const modalClose = document.getElementById("modalClose");
  const modalPlayerHolder = document.getElementById("modalPlayerHolder");

  function openModal(link) {
    const embed = toYouTubeEmbed(link);
    modalPlayerHolder.innerHTML = `<iframe width="100%" height="400" src="${embed}" frameborder="0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    modal.classList.add("show");
  }

  function closeModal() {
    modalPlayerHolder.innerHTML = "";
    modal.classList.remove("show");
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  document.addEventListener("click", (e) => {
    if (modal && e.target === modal) closeModal();
  });

  // ========== DARK MODE ==========
  const darkModeBtn = document.getElementById("darkModeBtn");
  const body = document.body;

  if (localStorage.getItem("darkMode") === "true") {
    body.classList.add("dark");
    if (darkModeBtn) darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    if (darkModeBtn) darkModeBtn.textContent = "🌙 Dark Mode";
  }

  if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
      const isDark = body.classList.contains("dark");
      localStorage.setItem("darkMode", isDark);
      darkModeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    });
  }

  // ========== FAVORITES ==========
  function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  }

  function saveFavorites(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
  }

  function toggleFavorite(lesson) {
    let favorites = getFavorites();
    const exists = favorites.find(f => f.link === lesson.link);

    if (exists) {
      favorites = favorites.filter(f => f.link !== lesson.link);
      alert("❌ មេរៀនដែលបានរក្សាទុក ត្រូវបានលុប!");
    } else {
      favorites.push(lesson);
      alert("⭐ មេរៀនបានរក្សាទុក អាចស្វែងរកក្នុងរបារមឺនុយ!");
    }

    saveFavorites(favorites);
  }

  function renderFavorites() {
    const favorites = getFavorites();
    courseList.innerHTML = "<h3>⭐ មេរៀនដែលបានរក្សាទុក</h3>";
    if (favorites.length === 0) {
      courseList.innerHTML += "<p>🙅‍♂️ មិនទាន់មានមេរៀនដែលអ្នករក្សាទុកទេ</p>";
      return;
    }

    let html = "<ul class='lesson-list'>";
    favorites.forEach(fav => {
      html += `
        <li>
          📘 ${fav.name}
          <button class="btn-small play-video" data-link="${fav.link}" data-title="${fav.name}">▶️ ចូលរៀន</button>
          <button class="btn-small favorite-btn" data-link="${fav.link}" data-title="${fav.name}">❌ លុប</button>
        </li>
      `;
    });
    html += "</ul>";
    courseList.innerHTML += html;

    attachLessonEvents();
  }

  function attachLessonEvents() {
    document.querySelectorAll(".play-video").forEach(btn => {
      btn.addEventListener("click", () => {
        const link = btn.dataset.link;
        openModal(link);
      });
    });

    document.querySelectorAll(".favorite-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const lesson = { name: btn.dataset.title, link: btn.dataset.link };
        toggleFavorite(lesson);
      });
    });
  }

  // ========== COLLAPSE/EXPAND MODULE ==========
  function attachModuleToggle() {
    document.querySelectorAll(".module-header").forEach(header => {
      header.addEventListener("click", () => {
        const lessonList = header.nextElementSibling;
        if (lessonList.classList.contains("hidden")) {
          lessonList.classList.remove("hidden");
          header.innerHTML = header.innerHTML.replace("⬇️", "⬆️");
        } else {
          lessonList.classList.add("hidden");
          header.innerHTML = header.innerHTML.replace("⬆️", "⬇️");
        }
      });
    });
  }

  const favBtn = document.getElementById("showFavorites");
  if (favBtn) {
    favBtn.addEventListener("click", () => {
      renderFavorites();
    });
  }
});

// ========== PROFILE ==========
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
    const prev = JSON.parse(localStorage.getItem("user")) || {};
    const updatedUser = {
      ...prev,
      username: document.getElementById("profileName").value.trim(),
      email: document.getElementById("profileEmail").value.trim(),
      bio: document.getElementById("profileBio").value.trim(),
      avatar: document.getElementById("avatarPreview").src
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("✔️ ព័ត៌មានត្រូវបានរក្សាទុក!");
    window.location.href = "dashboard.html";
  });
}
document.querySelectorAll(".pay-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const course = {
      title: btn.dataset.title,
      price: btn.dataset.price
    };
    localStorage.setItem("selectedCourse", JSON.stringify(course));
    window.location.href = "payment.html"; 
  });
});
// ========== VIEW PAYMENT HISTORY ==========
const viewHistoryBtn = document.getElementById("viewHistoryBtn");
if (viewHistoryBtn) {
  viewHistoryBtn.addEventListener("click", () => {
    window.location.href = "paymentHistory.html";
  });
}
  if (searchInput) {
    searchInput.addEventListener("input", () => renderCourses(activeCategory));

    // ✅ Logic ថ្មីសម្រាប់ Search + Enter
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        const keyword = searchInput.value.toLowerCase().trim();
        if (!keyword) return;

        // រកមេរៀនដំបូងដែលត្រូវ
        let foundLesson = null;
        for (const major of courses) {
          for (const module of major.modules || []) {
            for (const lesson of module.lessons || []) {
              if (
                major.title.toLowerCase().includes(keyword) ||
                major.desc.toLowerCase().includes(keyword) ||
                module.name.toLowerCase().includes(keyword) ||
                lesson.name.toLowerCase().includes(keyword)
              ) {
                foundLesson = lesson;
                break;
              }
            }
            if (foundLesson) break;
          }
          if (foundLesson) break;
        }

        // បើមាន → jump ទៅ Link
        if (foundLesson) {
          window.open(foundLesson.link, "_blank");
        } else {
          alert("❌ មិនមានមេរៀនដែលត្រូវនឹងការស្វែងរកទេ!");
        }
      }
    });
  }
// Sidebar toggle for mobile
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleSidebar");

// Create overlay element
let overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

// Use pointerdown (works on both desktop + mobile)
toggleBtn.addEventListener("pointerdown", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("show");
});

overlay.addEventListener("pointerdown", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("show");
});
