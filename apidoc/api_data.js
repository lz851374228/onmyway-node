define({ "api": [
  {
    "type": "POST",
    "url": "/common/user/register",
    "title": "注册接口",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "confirmPassword",
            "description": "<p>确认密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "11",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>手机号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "{\n \"account\":\"lz123456\",\n \"password\":\"lz123456\",\n \"confirmPassword\":\"lz123456\",\n \"phoneNumber\":\"13312940980\",\n \"nickname\":\"风紧不扯呼\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n    \"msg\": \"ok\",\n    \"code\": 20000,\n    \"request\": \"POST /common/user/register\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/api/common/user.js",
    "groupTitle": "User",
    "name": "PostCommonUserRegister"
  }
] });
