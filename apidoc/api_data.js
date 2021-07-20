define({ "api": [
  {
    "type": "Get",
    "url": "/user/get",
    "title": "getUserInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>文章名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"userName\": \"Eve\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n  \"userName\": \"Eve\",\n  \"createTime\": \"1568901681\"\n  \"updateTime\": \"1568901681\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/common/user.js",
    "groupTitle": "User",
    "name": "GetUserGet"
  }
] });
