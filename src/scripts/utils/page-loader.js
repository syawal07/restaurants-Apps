const PageLoader = {
  async render() {
    const mainContent = document.querySelector('#mainContent');
    mainContent.innerHTML = 'Halaman sedang dimuat...';

    try {
      const { default: Home } = await import('../views/pages/home');
      const { default: RestaurantDetail } = await import('../views/pages/detail');
      const { default: Favorite } = await import('../views/pages/favorite');

      const url = window.location.hash.slice(1).toLowerCase();
      let page;

      switch (url) {
        case '/':
          page = Home;
          break;
        case '/favorite':
          page = Favorite;
          break;
        case '/restaurant':
          page = RestaurantDetail;
          break;
        default:
          mainContent.innerHTML = 'Halaman tidak ditemukan.';
          return;
      }

      mainContent.innerHTML = await page.render();
      await page.afterRender();
    } catch (error) {
      console.error('Error:', error);
      mainContent.innerHTML = 'Terjadi kesalahan saat memuat halaman.';
    }
  },
};

export default PageLoader;
