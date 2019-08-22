const express = require('express');

const router = express.Router();
const mainController = require('../controllers/mainController');
const emailController = require('../controllers/emailController');

router.get('/', mainController.home);
router.get('/year7&8', mainController.year7);
router.get('/year9', mainController.year9);
router.get('/year10', mainController.year10);
router.get('/year11', mainController.year11);
router.get('/sixth-form', mainController.sixthform);

router.get('/testimonials', mainController.testimonials);
router.get('/blog', mainController.blog);
router.get('/about', mainController.about);

// blogs
router.get('/blog/how-to-live-the-focused-life', mainController.blog1);
router.get('/blog/how-to-nail-your-personal-statement', mainController.blog2);
router.get('/blog/stress-is-your-best-friend', mainController.blog3);
router.get('/blog/read-the-exam-specification', mainController.blog4);

router.post('/api/subscribe', emailController.subscribe);

module.exports = router;
