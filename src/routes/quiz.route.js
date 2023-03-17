const express = require('express');
const router = express.Router();
const quizController=require('../controllers/quiz.controller'); 

router.get('/',quizController.test_google_sheet)
module.exports = router;