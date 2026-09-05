function copyText(elementId) {
  const el = document.getElementById(elementId);
  const originalText = el.textContent;

  navigator.clipboard.writeText(originalText).then(function () {
    el.textContent = "Copied!";

    setTimeout(function () {
      el.textContent = originalText;
    }, 1200);
  });
}