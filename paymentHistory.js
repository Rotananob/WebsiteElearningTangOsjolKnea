// យកប្រវត្តិចាស់ពី localStorage (ប្រើ JSON)
let history = JSON.parse(localStorage.getItem("paymentHistory")) || [];

// ដក element
const historyBody = document.getElementById("historyBody");
const noHistory = document.getElementById("noHistory");

// បង្ហាញប្រវត្តិ
function renderHistory() {
  historyBody.innerHTML = "";

  if (history.length === 0) {
    noHistory.style.display = "block";
    return;
  }

  noHistory.style.display = "none";
  history.forEach(item => {
    const row = document.createElement("tr");

    // 👉 បើគ្មាន course → "មិនបញ្ជាក់"
    const courseName = item.course && item.course.trim() !== "" ? item.course : "🩺 បង្កើតកម្មវិធី​AI ";

    // 👉 បើគ្មាន amount → 0
    const amountValue = item.amount && !isNaN(item.amount) ? item.amount : 29.99;

    row.innerHTML = `
      <td>${courseName}</td>
      <td>$${amountValue}</td>   <!-- 💲 ប្ដូរជា $ -->
      <td>${item.date}</td>
      <td>
        <span class="status ${item.status}">
          ${
            item.status === "success" ? "✅ ជោគជ័យ" :
            item.status === "pending" ? "⏳ មិនទាន់បង់" :
            "❌ បរាជ័យ"
          }
        </span>
      </td>
    `;
    historyBody.appendChild(row);
  });
}



// ✅ កត់ត្រាបង់ប្រាក់ (ទោះមិនបានបង់ពិតក៏ដោយ)
// បន្ថែម status ដោយ default = success
function addPayment(course, amount, status = "success") {
  const newPayment = {
    course: course,
    amount: amount,
    date: new Date().toLocaleString("km-KH", { dateStyle: "medium", timeStyle: "short" }),
    status: status   // ✔️ បន្ថែមស្ថានភាព
  };

  history.push(newPayment);
  localStorage.setItem("paymentHistory", JSON.stringify(history));
  renderHistory();
}

// 🧹 Clear ប្រវត្តិ
function clearHistory() {
  history = [];
  localStorage.removeItem("paymentHistory");
  renderHistory();
}

// ពេលទំព័រផ្ទុក → បង្ហាញប្រវត្តិ
renderHistory();

// 🔗 Export functions ទៅប្រើនៅ Dashboard (ឬទំព័រ Pay)
window.addPayment = addPayment;
window.clearHistory = clearHistory;
