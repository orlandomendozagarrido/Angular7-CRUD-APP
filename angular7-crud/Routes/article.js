let express = require('express'),
router = express.Router(),
util = express('../Utilities/util'),
articleService = require('../Service/article');

//Api to create article
router.post('/create-article', (req,res) => {
  articleService.createArticle(req.body, (data) => {
    res.send(data);
  });
});

//Api to update articleRoute
router.put('/updateArticle', (req,res) => {
  articleService.updateArticle(req.body, (data) => {
    res.send(data);
  });
});

//Api to delete the article
router.delete('/delete-article', (req,res) => {
  documentService.getArticle(req.query, (data) => {
    res.send(data);
  });
});

//Api to get the article by I.D
router.get('get-article-by-id', (req,res) => {
  articleService.getArticleById(req.query, (data) => {
    res.send(data)
  });
});

module.exports = router;
