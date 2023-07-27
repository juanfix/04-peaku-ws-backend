# DB Diagram

![trabook_er_model](https://github.com/juanfix/04-peaku-ws-backend/assets/14180890/eddfd2c7-68cd-4717-b72f-97e25555c74d)

# API endpoints

These endpoints allow you to register blogs, plans, cities, countries and assign plans to cities.

## Country

### GET

`host`/api/country<br/>

Get a list of countries.

**Parameters**

None

**Response**

```
{
    "ok": true,
    "status": 200,
    "data": [
        {
            "id_country": "572bc4d5-5543-4a75-bbf1-6d4d59e9ae12",
            "name": "UK",
            "createdAt": "2023-07-25T23:42:38.000Z",
            "updatedAt": "2023-07-25T23:42:38.000Z"
        },
        {
            "id_country": "c523e20c-c9b1-4931-8623-540b5de9aa94",
            "name": "Japan",
            "createdAt": "2023-07-26T00:33:43.000Z",
            "updatedAt": "2023-07-26T00:33:43.000Z"
        },
        {
            "id_country": "d72444d7-ecb4-4d59-8fea-5fa743e97631",
            "name": "France",
            "createdAt": "2023-07-25T23:42:32.000Z",
            "updatedAt": "2023-07-25T23:42:32.000Z"
        },
        {
            "id_country": "dc5cd8b4-d748-486e-82cc-48c87e71b75d",
            "name": "Spain",
            "createdAt": "2023-07-25T23:41:35.000Z",
            "updatedAt": "2023-07-25T23:41:35.000Z"
        },
        {
            "id_country": "f6a2d4ad-98c5-4fa7-8dde-900995334e2b",
            "name": "Italy",
            "createdAt": "2023-07-25T23:42:23.000Z",
            "updatedAt": "2023-07-25T23:42:23.000Z"
        }
    ]
}
```

### POST

`host`/api/country<br/>

It creates a country.

**Parameters: JSON**

| Name   | Required | Type   | Description             |
| ------ | -------- | ------ | ----------------------- |
| `name` | required | string | The name of the country |

**Response**

```
{
    "ok": true,
    "status": 201,
    "message": "Country created!"
}
```

---

## City

### GET

`host`/api/city<br/>

Get a list of citues.

**Parameters**

None

**Response**

```
{
    "ok": true,
    "status": 200,
    "data": [
        {
            "id_city": "0fa8cc54-14e4-429d-92e7-d701e8db389c",
            "name": "Osaka",
            "createdAt": "2023-07-26T01:00:51.000Z",
            "updatedAt": "2023-07-26T01:00:51.000Z",
            "country": {
                "name": "Japan"
            }
        },
        {
            "id_city": "6752196b-2f08-4c61-a66e-dcd65c52a23a",
            "name": "Madrid",
            "createdAt": "2023-07-26T01:17:12.000Z",
            "updatedAt": "2023-07-26T01:17:12.000Z",
            "country": {
                "name": "Spain"
            }
        },
        {
            "id_city": "6a9fb36c-df85-4792-831f-5952f7d582ba",
            "name": "Paris",
            "createdAt": "2023-07-26T01:17:46.000Z",
            "updatedAt": "2023-07-26T01:17:46.000Z",
            "country": {
                "name": "France"
            }
        },
        {
            "id_city": "a9731623-51ea-4f58-8c2c-0ce9d33e4c09",
            "name": "Firenze",
            "createdAt": "2023-07-26T01:17:30.000Z",
            "updatedAt": "2023-07-26T01:17:30.000Z",
            "country": {
                "name": "Italy"
            }
        },
        {
            "id_city": "b35054be-5795-486d-a6b7-e599aa4052f6",
            "name": "Rome",
            "createdAt": "2023-07-26T01:18:55.000Z",
            "updatedAt": "2023-07-26T01:18:55.000Z",
            "country": {
                "name": "Italy"
            }
        },
        {
            "id_city": "bda4a18b-24c3-4167-9d91-c667edcdb4a2",
            "name": "London",
            "createdAt": "2023-07-26T01:18:36.000Z",
            "updatedAt": "2023-07-26T01:18:36.000Z",
            "country": {
                "name": "UK"
            }
        },
        {
            "id_city": "d226e71f-941d-4fd3-a7b9-f862af044b3b",
            "name": "Tokyo",
            "createdAt": "2023-07-26T07:09:39.000Z",
            "updatedAt": "2023-07-26T07:09:39.000Z",
            "country": {
                "name": "Japan"
            }
        }
    ]
}
```

### POST

`host`/api/city<br/>

It creates a city.

**Parameters: JSON**

| Name         | Required | Type   | Description                        |
| ------------ | -------- | ------ | ---------------------------------- |
| `name`       | required | string | The name of the city               |
| `id_country` | required | string | The UUID associated to the country |

**Response**

```
{
    "ok": true,
    "status": 201,
    "message": "City created!"
}
```

---

## Plan

### GET

`host`/api/plan<br/>

Get a list of plans.

**Parameters**

None

**Response**

```
{
    "ok": true,
    "status": 200,
    "data": [
        {
            "id_plan": "41accd3d-4f56-48b2-aa2b-f5a250abe88c",
            "name": "Osaka trend",
            "score": 4.8,
            "price": 2463,
            "num_days": 10,
            "discount": 0,
            "img_url": "/assets/img/Image-6.png",
            "createdAt": "2023-07-26T02:49:18.000Z",
            "updatedAt": "2023-07-26T02:49:18.000Z"
        },
        {
            "id_plan": "48c1594d-0de2-4521-9a95-f9b9c72f05a2",
            "name": "Le' France",
            "score": 4.4,
            "price": 699,
            "num_days": 7,
            "discount": 0.1,
            "img_url": "/assets/img/Image-2.png",
            "createdAt": "2023-07-26T02:45:01.000Z",
            "updatedAt": "2023-07-26T02:45:01.000Z"
        },
        {
            "id_plan": "52914ff3-ebdd-4681-8073-bb58eac4e797",
            "name": "London full",
            "score": 4.7,
            "price": 1245,
            "num_days": 7,
            "discount": 0,
            "img_url": "/assets/img/Image-5.png",
            "createdAt": "2023-07-26T02:48:36.000Z",
            "updatedAt": "2023-07-26T02:48:36.000Z"
        },
        {
            "id_plan": "65b7b2a0-a5c9-42e8-9986-d5e31d1563c4",
            "name": "¡Olé!",
            "score": 4.8,
            "price": 950,
            "num_days": 10,
            "discount": 0.1,
            "img_url": "/assets/img/Image-1.png",
            "createdAt": "2023-07-26T02:37:38.000Z",
            "updatedAt": "2023-07-26T02:37:38.000Z"
        },
        {
            "id_plan": "6cc853d8-b144-45a2-970d-03f72a2b926e",
            "name": "Rome",
            "score": 4.8,
            "price": 542,
            "num_days": 10,
            "discount": 0,
            "img_url": "/assets/img/Image-4.png",
            "createdAt": "2023-07-26T02:47:54.000Z",
            "updatedAt": "2023-07-26T02:47:54.000Z"
        },
        {
            "id_plan": "879a9df3-7160-4af7-b68d-62ea092802d3",
            "name": "Firenze",
            "score": 4.5,
            "price": 850,
            "num_days": 6,
            "discount": 0.08,
            "img_url": "/assets/img/Hover-effect.png",
            "createdAt": "2023-07-26T02:43:07.000Z",
            "updatedAt": "2023-07-26T02:43:07.000Z"
        },
        {
            "id_plan": "9aa9c9cb-b217-4bea-bf98-b3c0230d5fc3",
            "name": "Japan World Tour",
            "score": 4.9,
            "price": 3250,
            "num_days": 15,
            "discount": 0,
            "img_url": "/assets/img/Image-6.png",
            "createdAt": "2023-07-26T07:08:42.000Z",
            "updatedAt": "2023-07-26T07:08:42.000Z"
        },
        {
            "id_plan": "ae5841e9-9e79-4c7d-a984-916a34eaaa6e",
            "name": "London Journey",
            "score": 4.8,
            "price": 850,
            "num_days": 7,
            "discount": 0.01,
            "img_url": "/assets/img/Image-3.png",
            "createdAt": "2023-07-26T02:46:10.000Z",
            "updatedAt": "2023-07-26T02:46:10.000Z"
        }
    ]
}
```

### POST

`host`/api/plan<br/>

It creates a plan.

**Parameters: JSON**

| Name       | Required | Type     | Description                                                        |
| ---------- | -------- | -------- | ------------------------------------------------------------------ |
| `name`     | required | string   | The name of the city                                               |
| `score`    | required | float    | The score of the plan                                              |
| `price`    | required | double   | The price of the plan.                                             |
| `num_days` | required | smallint | The number of days of the plan.                                    |
| `discount` | required | float    | The percentage of discount of the plan. It must be between 0 and 1 |
| `img_url`  | required | string   | The url of the image.                                              |

**Response**

```
{
    "ok": true,
    "status": 201,
    "message": "Plan created!"
}
```

---

## PlanHasCity

### GET (without discount)

`host`/api/plan-has-city<br/>

Get a list of plans with the cites and countries associated. without discount (discount = 0).

**Parameters**

None

**Response**

```
{
    "ok": true,
    "status": 200,
    "data": [
        {
            "id_plan_has_city": "3ef30812-5a27-41a8-9826-c7f968c39c2c",
            "city": {
                "name": "Osaka",
                "country": {
                    "name": "Japan"
                }
            },
            "plan": {
                "score": 4.8,
                "price": 2463,
                "num_days": 10,
                "discount": 0,
                "img_url": "/assets/img/Image-6.png"
            }
        },
        {
            "id_plan_has_city": "b673bffb-b940-4456-aa4f-1d7f5afe24b3",
            "city": {
                "name": "London",
                "country": {
                    "name": "UK"
                }
            },
            "plan": {
                "score": 4.7,
                "price": 1245,
                "num_days": 7,
                "discount": 0,
                "img_url": "/assets/img/Image-5.png"
            }
        },
        {
            "id_plan_has_city": "753a6d64-9801-4f35-b513-ac47e30cb4dd",
            "city": {
                "name": "Rome",
                "country": {
                    "name": "Italy"
                }
            },
            "plan": {
                "score": 4.8,
                "price": 542,
                "num_days": 10,
                "discount": 0,
                "img_url": "/assets/img/Image-4.png"
            }
        },
        {
            "id_plan_has_city": "7c5decbc-53bf-4aea-8880-e465476e47b8",
            "city": {
                "name": "Tokyo",
                "country": {
                    "name": "Japan"
                }
            },
            "plan": {
                "score": 4.9,
                "price": 3250,
                "num_days": 15,
                "discount": 0,
                "img_url": "/assets/img/Image-6.png"
            }
        }
    ]
}
```

### GET (with discount)

`host`/api/plan-has-city/discount<br/>

Get a list of plans with the cites and countries associated. with discount (discount > 0).

**Parameters**

None

**Response**

```
{
    "ok": true,
    "status": 200,
    "data": [
        {
            "id_plan_has_city": "b3abb411-04e1-40d9-af89-1f5ef2552e31",
            "city": {
                "name": "Paris",
                "country": {
                    "name": "France"
                }
            },
            "plan": {
                "score": 4.4,
                "price": 699,
                "num_days": 7,
                "discount": 0.1,
                "img_url": "/assets/img/Image-2.png"
            }
        },
        {
            "id_plan_has_city": "1cf3c667-3256-4d16-8620-cc9f1d2b0655",
            "city": {
                "name": "Madrid",
                "country": {
                    "name": "Spain"
                }
            },
            "plan": {
                "score": 4.8,
                "price": 950,
                "num_days": 10,
                "discount": 0.1,
                "img_url": "/assets/img/Image-1.png"
            }
        },
        {
            "id_plan_has_city": "90813f2d-d024-43cb-b710-7655e6ec30bb",
            "city": {
                "name": "Firenze",
                "country": {
                    "name": "Italy"
                }
            },
            "plan": {
                "score": 4.5,
                "price": 850,
                "num_days": 6,
                "discount": 0.08,
                "img_url": "/assets/img/Hover-effect.png"
            }
        },
        {
            "id_plan_has_city": "110a79ad-aa0e-47dd-b98f-fa865df35db4",
            "city": {
                "name": "London",
                "country": {
                    "name": "UK"
                }
            },
            "plan": {
                "score": 4.8,
                "price": 850,
                "num_days": 7,
                "discount": 0.01,
                "img_url": "/assets/img/Image-3.png"
            }
        }
    ]
}
```

### POST

`host`/api/plan-has-city<br/>

It creates a plan, associating a single plan with a city.

**Parameters: JSON**

| Name      | Required | Type   | Description          |
| --------- | -------- | ------ | -------------------- |
| `id_city` | required | string | The UUID of the city |
| `id_plan` | required | string | The UUID of the plan |

**Response**

```
{
    "ok": true,
    "status": 201,
    "message": "Plan Has City created!"
}
```

---

## Blog

### GET

`host`/api/blog<br/>

Get a list of blogs.

**Parameters**

None

**Response**

```
{
    "ok": true,
    "status": 200,
    "data": [
        {
            "id_blog": "0280be5a-ebb0-4265-82e4-d86403078c18",
            "title": "The Amazing Difference a Year of Traveling.",
            "date": "2021-07-20",
            "post_url": "#",
            "img_url": "/assets/img/paris.jpg",
            "createdAt": "2023-07-25T07:24:24.000Z",
            "updatedAt": "2023-07-25T07:24:24.000Z"
        },
        {
            "id_blog": "6e764184-aa60-4384-a32c-608148f73d82",
            "title": "Reflections on 5 Months of Travel: Time to Hang.",
            "date": "2021-07-20",
            "post_url": "#",
            "img_url": "/assets/img/morocco.jpg",
            "createdAt": "2023-07-25T07:33:13.000Z",
            "updatedAt": "2023-07-25T07:33:13.000Z"
        },
        {
            "id_blog": "77a265b5-1903-44fd-bdc3-75ca6b6013d6",
            "title": "Travel far enough, you meet yourself.",
            "date": "2021-07-20",
            "post_url": "#",
            "img_url": "/assets/img/castelmezzano.jpg",
            "createdAt": "2023-07-25T07:28:39.000Z",
            "updatedAt": "2023-07-25T07:28:39.000Z"
        },
        {
            "id_blog": "d7bf241b-3940-45e0-abe1-fdf8253791fc",
            "title": "How to Save Money While Visiting Africa.",
            "date": "2021-07-20",
            "post_url": "#",
            "img_url": "/assets/img/desert.jpg",
            "createdAt": "2023-07-25T07:32:49.000Z",
            "updatedAt": "2023-07-25T07:32:49.000Z"
        }
    ]
}
```

### POST

`host`/api/blog<br/>

It creates a plan.

**Parameters: JSON**

| Name       | Required | Type     | Description                      |
| ---------- | -------- | -------- | -------------------------------- |
| `title`    | required | string   | The title of the city            |
| `date`     | required | datetime | The date of the publication.     |
| `post_url` | required | double   | The url to redirect to the blog. |
| `img_url`  | required | string   | The url of the image.            |

**Response**

```
{
    "ok": true,
    "status": 201,
    "message": "Blog created!"
}
```
