# E-Commerce Socks Shop Project

The site is available at https://ecshop.tomok.dev

![project snapshot](https://github.com/tomokawaguchi/ecshop-project/blob/main/src/assets/project-snapshot.png?raw=true)

*Please note that this is a mock e-commerce site and all of the images used come from https://burst.shopify.com/socks*

This is a mock e-commerce site built in ReactJS where you can browse socks as shop products. The products data is managed in Firestore with 2 main collections: 'products' and 'shoppingBag'. The 'products' collection holds all the products available in the store and 'shoppingBag' collection is used to manage the shopping cart items. Both data are retrieved and updated in the Context with the useReducer Hook.

### Some featured functionalities are:

1. Wishlist page and toggle heart button on the product
   The wishlist page showcase the products that are marked as wished by the user. It updates live time aligned with user interaction.
2. Product quantity  
   The product quantity is restricted by the respective products' availability. This applies in the quantity buttons on the shopping cart.
3. Shopping cart  
   The shopping cart is interactive as you can update the quantity within the availability of each product as well as add/remove items from the cart. The price will be updated upon click on the update button on the shopping-bag page.
