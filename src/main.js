import('./js/menu.js')
      .then(module => {
        module.toggleMenu();
      })
      .catch(error => {
        console.error('Error loading menu.js:', error);
      });