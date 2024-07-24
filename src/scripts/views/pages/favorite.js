import FavResto from '../../data/favorite-restaurant';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="newFavcontent">
        <h2 class="newLatestFav">Favorite Restaurant</h2>
        <div id="restaurant" class="restaurantIsEmpty">
          Nama Restaurant Tidak Ditemukan! 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavResto.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant');
    if (restaurants.length > 0) {
      restaurantsContainer.innerHTML = '';
    } else {
      restaurantsContainer.innerHTML = '<p>Restaurant tidak ditemukan!</p>';
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
