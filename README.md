# E-Commerce Socks Shop Project

The site is available at https://ecshop.tomok.dev

<img src="https://github.com/tomokawaguchi/ecshop-project/blob/main/src/assets/project-snapshot.png" width="auto" height="400" />


*Please note that this is a mock e-commerce site and all of the images used are from https://burst.shopify.com/socks*

## Project Brief
### Aims

This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework. With this project you will practice how to:

- Fetch Data within a React App
- Use react-router-dom
- Use Firebase/Firestore

### MVP (conducted as Nology course work)

At a minimum your e-shop website should have two pages:

Home Page should contain:
- A Grid of products
- Carousel of featured products
- Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants

All products should be stored in Firestore. You should store the following information:
- quantity
- variants (could be colors, sizes, etc)
- price per unit
- name
- image url
- favourited or not (boolean) All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:
- List of products in cart should have an ability to change quantity of products in cart.
- List of products in cart should have an ability to remove items from cart.


## Technical Implementation
This is a mock e-commerce site built in ReactJS where you can browse socks as shop products. The products data is managed in Firestore with 2 main collections: 'products' and 'shoppingBag'. The 'products' collection holds all the products available in the store and 'shoppingBag' collection is used to manage the shopping cart items. 

Some of the featured functionalities are:

**1. Wishlist page and toggle heart button on the product**
The wishlist page showcase the products that are marked as wished by the user. It updates live time aligned with user interaction so if you like the item on the product page and go to wishlist page, the item should be appearing there. This was achieved by a simple state management.

**2. Products data management & items data to the Cart**  
To manage all products data and items data in the shopping cart, I have set up some methods to communicate with two different collections in the firestore in the services folder. Every time a user adds items, the items in the cart data will be managed under 'shoppingBag' collection. 

For managing the local data, I have used `Context` and `useReducer` hook to manage so that these details will be accesssible from any level of components as well as it will be more concise in one place. I have set up 4 different action types in the reducer function to update the producta and cart items data. Throughout the app, I also ensured that the quantity availability won't be exceeded with its limit when a user tried to add/update the cart items or items to add to the cart. 

**3. Shopping cart**  
The shopping cart is interactive as you can update the quantity within the availability of each product as well as update/remove items from the cart. The price will be updated upon click on the update button on the shopping-bag page.

## Refection

- This was one of the most challenging app built so far as I decided to use `Context` and `useReducer` as new concepts with data being fetched from firestore. However it was great learing curve in terms of time management and picking up new concepts as I went. 

- This was first time for me to handle non-relational database like firestore. At a glance, it was overwhelming to go through the documentations to write methods to communicate with firestore, however it was overall great in experiencing of sturcturing your own data and actually utilising the data in the app. 


## Future Goals
- I would like to update the app to improve with more e-commerce functionalities. One is the item grid's to have add to cart function from the product list level. Another is a functionality to prompt users to purchasse/remaind of the wishlist items at the cart.  



