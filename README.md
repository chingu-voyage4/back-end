# To start using:

Currently, if you want to use the server on you machine, you will need to first add the mock data using POST /api/items and fill the data manually.
Mock JSON data can be found here: BACK-END\mock_data.
I recommend using 'Postman' to simulate HTTP requests.
For easy visualization of the DB, use a MongoDB client ('Compass' for example).

# To run:

1.  yarn
2.  yarn start (Server running on 9000)

# Tested APIs:

**GET**

1.  Get all items -> localhost:9000/api/items

2.  Get item by ID -> localhost:9000/api/{itemId}

**POST**

1.  New user signup -> localhost:9000/api/users/signup

    **Body example:**

    ```
    {
    "imageUrl": "https://pbs.twimg.com/profile_images/850362029571543040/oOk99miL_400x400.jpg",
    "name": {
    "first": "Sammy",
    "last": "Defow"
    },
    "password": "1234",
    "email": "samsam@gmail.com"
    }
    ```

2.  Existing user signin -> localhost:9000/api/users/signin

    **Body example:**

    ```
    {
    "password": "1234",
    "email": "samsam@gmail.com"
    }
    ```

3.  Add new item, requires user ID (Should be changed to token) -> localhost:9000/api/items

    **Body example:**

    ```
    {
    "title": "Yellow Ikea sofa",
    "description":
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "imageUrl": [
    "http://static.designmag.it/designmag/fotogallery/845X0/92753/knopparp-divano-a-due-posti.jpg",
    "https://cdn.wallapop.com/shnm-portlet/images?pictureId=170743002&pictureSize=W640",
    "http://th.designerblog.it/emmYRffy15F10WtyAdYSLy4NaN8=/fit-in/655xorig/http%3A%2F%2Fmedia.designerblog.it%2Fc%2Fcat%2Fcatalogo-ikea-2014-di-divani%2Fdivani-ikea-2014.jpg"
    ],
    "userId": "5a900ea2270ee0087f864985",
    "phones": {
    "cell": "34534345345",
    "landline": "5687857786"
    },
    "location": {
    "country": "Israel",
    "city": "Tel-Aviv",
    "streetName": "Kaplan",
    "streetNumber": 32,
    "lat": 32.4563546,
    "lng": 31.2345434
    },
    "publishDate": 4352345,
    "lastUpdate": 4352567,
    "subCategoryId": "frchr",
    "price": 120,
    "isActive": true
    }
    ```
