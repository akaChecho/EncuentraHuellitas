// Define the loadNavbar function
async function loadNavbar() {
    // Get the navbar content
    const response = await fetch("./Resources/pages/navbar.html");
    const html = await response.text();
  
    // Insert the content into the DOM
    document.querySelector("#navbar").innerHTML = html;
  }
  
  // Cargar el navbar inicialmente
  (async () => {
      await loadNavbar();
    })();
    
    // Escuchar el evento popstate y recargar el navbar
    window.addEventListener("popstate", async () => {
      // Cargar el navbar
      await loadNavbar();
    });