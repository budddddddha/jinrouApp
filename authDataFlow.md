# Jinrou Authentication Data Flow

loginPage(name, pass)  
ServerDB(name, pass): id, user_data  
JWT(id): token  
Client(token, user_data)

## ServerDB(Dynamo)
↓ node aws-sdk dynamoのリンク
https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html

### Tables

#### JinrouUser
Id(Str): k0408n  
Name(Str): budddddddha   
Pass(Str): buddha0408
Email(Str): budddddddha@gmail.com

#### JinrouRoom
Id(Str): RoomTest
Users(StrSet):[
  k0408n
]

## JWT(Auth0)

#### User
user_id:
email:  
token:

## Client(React Redux)

### Reducer

#### auth
name: budddddddha  
token:

tokenはLocalStrageに保存
