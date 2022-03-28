const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();
app.listen('3000', function(){
  console.log("the app is running on 3000");
})