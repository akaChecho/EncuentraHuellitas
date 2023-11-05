async function loadNavbar() {
  const response = await fetch("./Resources/pages/navbar.html");
  const html = await response.text();

  document.querySelector("#navbar").innerHTML = html;
}

(async () => {
    await loadNavbar();
  })();
  window.addEventListener("popstate", async () => {
  await loadNavbar();
  });