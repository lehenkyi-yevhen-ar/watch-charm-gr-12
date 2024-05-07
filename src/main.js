import('./js/menu.js')
      .then(module => {
        module.toggleMenu();
      })
      .catch(error => {
        console.error('Error loading menu.js:', error);
      });

document.addEventListener("DOMContentLoaded", function() {
        import('./js/header-active.js')
            .then(module => {
                console.log("header-active.js imported successfully!");
            })
            .catch(error => {
                console.error("Error importing header-active.js:", error);
            });
    });
    