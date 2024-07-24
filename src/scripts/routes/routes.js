import RestaurantList from '../views/pages/home';
import Detail from '../views/pages/detail';
import Like from '../views/pages/favorite';

const routes = {
  '/': RestaurantList,
  '/restaurant-list': RestaurantList,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
