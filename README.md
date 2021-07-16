# 🎨Colfume🔎
<img src="https://user-images.githubusercontent.com/68318945/124396500-ee45d280-dd44-11eb-9795-27ae3256684e.png">

## Find Your Colfume, 컬퓸에서 당신의 색을 찾아보세요!
> SOPT 28기 18TH APPJAM - TEAM Colfume💨  
2021.06.26 ~ 2021.07.17

<br>

## ❤️ Colfume Server
######  어? 예퓸다. 퓸며들준비, R U Ready? 🔫
|               [최다인](https://github.com/Chedda98)         |        [한수아](https://github.com/sssua-0928)       |        [김정재](https://github.com/Jeongggjae)              |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | 
| <img src="https://user-images.githubusercontent.com/68318945/124396405-49c39080-dd44-11eb-92ef-49d598444107.png" height="250" /> | <img src="https://user-images.githubusercontent.com/68318945/124396445-8becd200-dd44-11eb-9e6f-b030def1bd3a.png" height="250" /> |  <img src="https://user-images.githubusercontent.com/68318945/124483014-dc1b7100-dde4-11eb-87f5-1921991bb0d1.png" height="250" /> |

<br>

## 🧡 Convention

- [코드 컨벤션](https://www.notion.so/coding-convention-9d6b5b7df3994b8696b7107bb35f2e2a)
- [커밋 전략](https://www.notion.so/commit-convention-565150c24bb1422384cdabed32a5634e)
- [브랜치 전략](https://www.notion.so/Git-branch-3c71ed286e9d47ab8a3c89bbc39b52d3)


<br>



## 💛 API 명세서
### 🔖 [Colfume Wiki](https://www.notion.so/Colfume-Wiki-8e5ca79fcc674f3b811d521f5c6a0ba2)


<br>


## 💚 핵심 기능
|       기능       |          상세 기능          | 역할 | 진척도 |
| :--------------: | :-----------------------: | :---: | :----: |
|     Home Page     |       상황에 어울리는 향수 추천 (이미지)        | 정재 |    ☑️       |
|     Home Page     |       추천 향수에 맞는 Mood 보여주기        | 정재 |    ☑️       |
|     Product Page     |        컬퓸 DB에 들어간 모든 향수 보여주기      |  다인 |    ☑️       |
|          |     각 컬러에 해당하는 향수 보여주기 (이미지, Mood 키워드)        | 다인 |    ☑️       |
|      Detail Page    |        각 향수의 기본 정보 보여주기        |  다인 |    ☑️       |
|          |        해당 향수의 대표 컬퓸색, 관련 컬러 보여주기        |  다인 |    ☑️       |
|          |        해당 향수의 Mood 키워드 나타내기        |  다인 |    ☑️       |
|          |        해당 향수의 Style 키워드 나타내기        |  다인 |    ☑️       |
|     Color Test Page     |        7가지의 심리 테스트 결과 계산         | 수아 |    ☑️       |
|        |        유저의 컬퓸색 결과 (이미지, 설명)         | 수아 |    ☑️       |
|        |        유저의 결과와 궁합이 맞는 컬러         | 수아 |    ☑️       |
|        |        유저의 결과에 맞는 키워드 제공         | 수아 |    ☑️       |
|     Search Page     |      Mood 키워드로 향수 찾기        | 정재 |    ☑️       |
|          |      Style 키워드로 향수 찾기        | 정재 |    ☑️       |
|          |      검색어 입력으로 향수 찾기        | 정재 |    ☑️       |
|          |      Search한 향수 보여주기 (이미지, Mood 키워드)        | 정재 |    ☑️       |


<br>

## 💙 Architecture
![colfume 서버 아키텍쳐](https://user-images.githubusercontent.com/68318945/124633433-3ccbac00-dec0-11eb-9f97-7677635cf792.png)

<br>


## 💜 Dependencies
```json
{
  "name": "back-2the-fumeture",
  "version": "1.0.0",
  "main": "src/index.js",
  "scripts": {
    "dev": "ts-node src",
    "build": "tsc && node dist",
    "test": "nodemon"
  },
  "dependencies": {
    "@types/multer": "^1.4.6",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-validator": "^6.10.0",
    "gravatar": "^1.8.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "5.12.10",
    "multer": "^1.4.2",
    "request": "^2.88.2"
  },
  "devDependencies": {
    "@types/bcryptjs": "^2.4.2",
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.11",
    "@types/mongoose": "^5.10.4",
    "@types/node": "^14.17.0",
    "nodemon": "^2.0.7",
    "ts-node": "^9.1.1",
    "typescript": "^4.2.3"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```

