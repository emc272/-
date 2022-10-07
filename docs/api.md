##                                                                                                                    说明

---

1. 项目的请求根路径为 `http://127.0.0.1:3007`
2. 以 `/punlish` 开头的请求路径，与主页内容有关
3. 以 `/my` 开头的请求路径，与用户信息有关
4. 数据库用的mysql



  ###                                                                       主页

---

**简要描述：**

- 页面内容请求

**请求URL：**

- `/publish/userInfo`

**请求方式：**

- GET

**请求体：**

无

**返回示例**

```
{
    "status": 0,
    "message": "获取用户基本信息成功！",
    "data": [
        {
            "id": 1,
            "userAvatar": "./assets/uploads/avatar.png",
            "userName": "emc272",
            "msgInfo": "一个随笔录、、",
            "picInfo": [
                "./assets/uploads/1.jpg",
                "./assets/uploads/2.jpg",
                "./assets/uploads/3.jpg"
            ],
            "otherInfo": [
                "122",
                "223",
                "l84"
            ]
        },
        {
            "id": 5,
            "userAvatar": "./assets/uploads/h.png",
            "userName": "网安实践",
            "msgInfo": "第一次桌面实践",
            "picInfo": [
                "./assets/uploads/h1.png",
                "./assets/uploads/h2.png",
                "./assets/uploads/h3.png"
            ],
            "otherInfo": [
                "999",
                "88",
                "63"
            ]
        },
        {
            "id": 3,
            "userAvatar": "./assets/uploads/S.png",
            "userName": "点灯",
            "msgInfo": "很像动漫啊",
            "picInfo": [
                "./assets/uploads/name1.png",
                "./assets/uploads/name2.png",
                "./assets/uploads/name3.png"
            ],
            "otherInfo": [
                "191",
                "31",
                "10"
            ]
        },
        {
            "id": 6,
            "userAvatar": "./assets/uploads/右.png",
            "userName": "新经典",
            "msgInfo": "社会实践捏",
            "picInfo": [
                "./assets/uploads/s1.jpg",
                "./assets/uploads/s2.jpg",
                "./assets/uploads/s3.jpg"
            ],
            "otherInfo": [
                "654",
                "234",
                "99"
            ]
        },
        {
            "id": 2,
            "userAvatar": "./assets/uploads/cloudAvatar.png",
            "userName": "云的赏味期限",
            "msgInfo": "调了个色",
            "picInfo": [
                "./assets/uploads/cloud1.png",
                "./assets/uploads/cloud2.png",
                "./assets/uploads/cloud3.png"
            ],
            "otherInfo": [
                "391",
                "23",
                "5"
            ]
        }
    ]
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |
| data    | array  | 请求具体结果                   |



###                             上拉懒加载

---

**简要描述：**

- 懒加载获取内容

**请求URL：**

- /publish/addindexinfo

**请求方式：**

- POST

**请求体：**

无

**返回示例**

```
{
    "status": 0,
    "message": "获取用户基本信息成功！",
    "data": [
        {
            "id": 3,
            "userAvatar": "./assets/uploads/S.png",
            "userName": "点灯",
            "msgInfo": "很像动漫啊",
            "picInfo": [
                "./assets/uploads/name1.png",
                "./assets/uploads/name2.png",
                "./assets/uploads/name3.png"
            ],
            "otherInfo": [
                "191",
                "31",
                "10"
            ]
        },
        {
            "id": 1,
            "userAvatar": "./assets/uploads/avatar.png",
            "userName": "emc272",
            "msgInfo": "一个随笔录、、",
            "picInfo": [
                "./assets/uploads/1.jpg",
                "./assets/uploads/2.jpg",
                "./assets/uploads/3.jpg"
            ],
            "otherInfo": [
                "122",
                "223",
                "l84"
            ]
        }
    ]
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |
| data    | array  | 请求具体结果                   |



###                                    用户信息

---

**简要描述：**

- 获取用户信息

**请求URL：**

- /my/addindexinfo

**请求方式：**

- GET

**请求体：**

无

**返回示例**

```
{
    "status": 0,
    "message": "获取用户基本信息成功！",
    "data": {
        "id": 1,
        "reshui": "1663",
        "user_name": "豆瓣读书",
        "user_avatar": "./assets/uploads/36180475.jpg"
    }
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |
| data    | array  | 请求具体结果                   |



###                                 更新热水数

---

**简要描述：**

- 修改数据库热水数目

**请求URL：**

- /my/updateReshui

**请求方式：**

- POST

**请求体：**

无

**返回示例**

```
{
    "status": 0,
    "message": "修改用户基本信息成功！"
}
```

**返回参数说明**

| 参数名  | 类型   | 说明                           |
| :------ | :----- | ------------------------------ |
| status  | int    | 请求是否成功，0：成功；1：失败 |
| message | string | 请求结果的描述消息             |

