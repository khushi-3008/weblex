"use strict"
var AWS = require ("aws-sdk");
AWS.config.update({region:"us-east-1"});

// var dynamodb = new AWS.DynamoDB();


exports.handler = async () => {
  const docClient = new AWS.DynamoDB.DocumentClient({region:"us-east-1"});
  var params = {
  TableName: "dogpictures",
  Key: {
    pictureid: 0
    
  }
};

var dogPictureToDisplay = "picture not set";


    try {
    // var payload = JSON.stringify(data,null,2);
    // var obj = JSON.parse(payload);
    const dogPictureToDisplay = await docClient.get(params).promise();
    
    return(dogPictureToDisplay);
  }
  catch(err){
    console.log(err);
  }
    // return {status:200,body:"k"};
};
 
