# Market Place API

### Build RESTful API for FE application

- Product Services

  - Query products [Public]:
    - End point: /v1/api/products
    - Method: GET
    - Request:
      ```js
      {
        page: 1,
        limit: 10,
        search: '',
        price_min: 0,
        price_max: 200,
        category: '6552fb59596f5fca3cd8f1c7',
        sort_by: 'product_name',
        order: 'asc'
      }
      ```
    - Response:
      ```js
      {
        message: 'Get list product success!',
        status: 'OK',
        code: 200,
        metadata: {
          items: [
            {
              _id: '65535014f8dad3e767f61737',
              product_name: 'Ashe',
              product_thumb:
                'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt5388dc09a75213a1/60ee0b7912cadb2032d63aa7/Classic_Ashe_Splash.jpg',
              product_description: 'Desc 29',
              product_price: 111,
              product_quantity: 22,
              product_category: {
                _id: '6552fb59596f5fca3cd8f1c7',
                category_name: 'Accessory'
              }
            },
            {
              _id: '65533333f8dad3e767f616ef',
              product_name: 'Lucian',
              product_thumb:
                'https://images.contentstack.io/v3/assets/blt187521ff0727be24/bltd0d3d68533866389/60ee0f38e31ac858d22f9c61/Lucian_0.jpg',
              product_description: 'Desc 28',
              product_price: 244,
              product_quantity: 32,
              product_category: {
                _id: '6552fb59596f5fca3cd8f1c7',
                category_name: 'Accessory'
              }
            },
            {
              _id: '65533313f8dad3e767f616ed',
              product_name: 'Leona',
              product_thumb:
                'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt6a3490eb186aa2d8/60ee0f2325b09b4bfcbdf553/Leona_0.jpg',
              product_description: 'Desc 27',
              product_price: 163,
              product_quantity: 33,
              product_category: {
                _id: '6552fb44596f5fca3cd8f1c6',
                category_name: 'Shoes'
              }
            }
          ],
          pagination: {
            page: 1,
            limit: 3,
            totalRows: 27
          }
        }
      }
      ```
  - Create new product [User]

- Category Services
  - Create New Category [User]
  - Query Categories [Public]
    - End point: /v1/api/categories
    - Method: GET
    - Request:
    - Response:
      ```js
      {
        message: 'Get list category success!',
        status: 'OK',
        code: 200,
        metadata: [
          {
            _id: '6552f9ef596f5fca3cd8f1be',
            category_name: 'Upper Body'
          },
          {
            _id: '6552fafd596f5fca3cd8f1c3',
            category_name: 'Lower Body'
          },
          {
            _id: '6552fb29596f5fca3cd8f1c5',
            category_name: 'Hat'
          },
          {
            _id: '6552fb44596f5fca3cd8f1c6',
            category_name: 'Shoes'
          },
          {
            _id: '6552fb59596f5fca3cd8f1c7',
            category_name: 'Accessory'
          },
          {
            _id: '6552fb83596f5fca3cd8f1c8',
            category_name: 'Legendary'
          },
          {
            _id: '6552fb91596f5fca3cd8f1c9',
            category_name: 'Mythic'
          },
          {
            _id: '6552fba1596f5fca3cd8f1ca',
            category_name: 'Epic'
          },
          {
            _id: '6552fbb1596f5fca3cd8f1cb',
            category_name: 'Rare'
          },
          {
            _id: '65530f2841dd48da8a601588',
            category_name: 'Common'
          }
        ]
      }
      ```
