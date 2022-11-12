# StackOverflow
## Demo
`/demo/demo_part1.mov`  
`/demo/demo_part2.mov`  
`/demo/logging_demo.png`  
## Backend
Django + Django Rest Framework + MySQL
### Auth 
User info is pre-inserted into DB.
#### Sign In  
POST /api/token/
```json
{
  "username_or_email": "example@example.com",
  "password": 123456
}
```
Response
```json
{
  "token": "bcde0b73dc027ccaf25187e23ce1ba121457e27d"
}
```
#### Sign Out
DELETE /api/token/
```
(empty)
```
Response
```
(empty)
```

### Question
```python
class Question(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    author = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)
    updated_at = models.DateTimeField(auto_now=True)
```
#### Create question  
sign in required  
POST /api/question/
```json
{
  "title": "Test Question",
  "content": "testing"
}
```

GET /api/question/
Response
```json
[
    {
        "id": 14,
        "title": "How many roads must a man walk down before we can call him a man?",
        "content": "The answer my friend is blowing in the wind.",
        "author": {
            "id": 2,
            "first_name": "Bitcoin Maxi",
            "answer_amount": 2,
            "question_amount": 2,
            "up_amount": 21,
            "avatar": "/moonbird.png"
        },
        "created_at": "2022-11-12T01:41:32.062069Z"
    },
    {
        "id": 12,
        "title": "MongoDB how to search by using regex but avoiding case sensitive?",
        "content": "It allows users anywhere in the world to trade crypto without an intermediary. UNI, the governance token that allows users to vote on key protocol changes, is one of the largest cryptocurrencies by market cap.",
        "author": {
            "id": 1,
            "first_name": "Pseudo Near Expert",
            "answer_amount": 2,
            "question_amount": 3,
            "up_amount": 21,
            "avatar": "/moonbird.png"
        },
        "created_at": "2022-11-12T01:39:10.552641Z"
    }
]
```

## Frontend
React.js + React-router-dom + axios + antd (UI framework)
```text
src
├── App.css 
├── App.js 
├── App.test.js
├── api.js  // axios request api
├── component  // Presentational Component
│   ├── About.js
│   ├── QuestionCard.js 
│   ├── TopExperts.js  
│   ├── UserBrief.js
│   └── styles
│       ├── About.css
│       ├── QuestionCard.css
│       ├── TopExperts.css
│       └── UserBrief.css
├── container  // Container Component
│   ├── NewQuestion.js
│   ├── QuestionList.js
│   ├── SignIn.js
│   └── styles
│       ├── NewQuestion.css
│       ├── QuestionList.css
│       └── SignIn.css
├── index.css
├── index.js
├── layout   // Layout Component
│   ├── CenterPage.js
│   ├── HomeLayout.js
│   ├── Router.js  // Router (signin, post, home)
│   └── styles
│       ├── CenterPage.css
│       └── HomeLayout.css
├── logo.svg
├── provider.js  // axios interceptors for adding auth token
├── reportWebVitals.js
└── setupTests.js
```