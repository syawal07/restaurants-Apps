const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan!', '.restaurantIsEmpty p');

  I.amOnPage('/');

  I.waitForElement('.restaurant_name a');

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant_name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

// eslint-disable-next-line no-undef
Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak ditemukan!', '.restaurantIsEmpty p');

  I.amOnPage('/');

  I.waitForElement('.restaurant_name a');

  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.restaurant_name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant_name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurantName);

  I.waitForElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');

  const FavoriteRestaurantIsEmpty = await I.grabTextFrom(
    '.restaurantIsEmpty p',
  );
  assert.strictEqual('Restaurant tidak ditemukan!', FavoriteRestaurantIsEmpty);
});
