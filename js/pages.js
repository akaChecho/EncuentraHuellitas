(async () => {
    // Obtener el contenido del archivo HTML
    const response = await fetch("./Resources/pages/navbar.html");
    const html = await response.text();
  
    // Insertar el contenido en el DOM
    document.querySelector("#navbar").innerHTML = html;

  // Escuchar el evento popstate
  })();

// Cargar el navbar inicialmente
(async () => {
    await loadNavbar();
  })();
  
  // Escuchar el evento popstate y recargar el navbar
  window.addEventListener("popstate", async () => {
    // Cargar el navbar
    await loadNavbar();
  });
