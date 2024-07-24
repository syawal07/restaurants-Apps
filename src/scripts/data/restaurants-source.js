import API_ENDPOINT from '../globals/api-endpoint';

class RestoranSource {
  static async restaurantList() {
    const loading = document.querySelector('.loading');
    loading.style.display = 'block';
    try {
      const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
      loading.style.display = 'none';
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error(error);
      loading.style.display = 'none';
      return [];
    }
  }

  static async detailRestaurant(id) {
    const loading = document.querySelector('.loading');
    loading.style.display = 'block';
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      loading.style.display = 'none';
      return response.json();
    } catch (error) {
      console.error(error);
      loading.style.display = 'none';
      return null;
    }
  }
}

export default RestoranSource;
