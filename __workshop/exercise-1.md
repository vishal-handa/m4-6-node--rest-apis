# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer
Information about stock:
GET /product/ -endpoint to get all the available products
GET /product/type -endpoint to get the info about a specific product
POST /product/ -endpoint to add a new product to the menu
PUT /product/13 -endpoint to update the product with id-13
PATCH /product/13 -endpoint to update a particular property of a product with id-13
DELETE /product/13 -endpoint to delete the product from the database.

Information about customer:
GET /customer -endpoint to get all the customer information
GET /customer/45 -endpoint to get all the info about a particular customer
POST /customer - endpoint to add a new customer
PUT /customer/45 -endpoint to update an existing customer
PATCH /customer/45 -endpoint to update a specific property of an existing customer
DELETE /customer/45 -endpoint to delete a particular customer
