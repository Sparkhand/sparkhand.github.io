document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    window.location.href = this.value;
  });

document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(function () {
    document.body.className = "";
  }, 500);
});
