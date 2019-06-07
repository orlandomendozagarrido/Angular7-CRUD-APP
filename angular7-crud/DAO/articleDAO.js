let dbConfig = require("../Utilities/mysqlConfig");

let getArticle = (criteria, callback) => {
  criteria.article_id ? conditions += `and article_id='${criteria.article_id}'`:true;
  dbConfig.getDB().query(`select * from article where 1`,criteria, callback);
}

let getArticleDetaill = (criteria, callback) => {
  let conditions= "";
  criteria.id ? conditions += `and id='${criteria.id}'`:true;
  dbConfig.getDB()query(`select * from article where 1 ${conditions}`,callback);
}

let createArticle = (dataToSet, callback) => {
  console.log("insert into article set?", dataToSet,'pankaj')
  dbConfig.getDB()query("insert into article set ?",dataToSet, callback );
}

let deleteArticle = (criteria, callback) => {
  let conditions = "";
  criteria.id ? conditions += `and id='${criteria.id}'`:true;
  console.log('delete from article where 1 ${conditions}');
  dbConfig.getDB().query(`deletefrom article where 1 ${conditions}`,callback);

}

let updateArticle =(criteria, dataToSet, callback) => {
  let conditions = "";
  let setData = "";
  criteria.id ? conditions += `and id = '${criteria.id}'`:true;
  dataToSet.category ? setData += `category = '${dataToSet.category}'`:true;
  dataToSet.title ? setData += `,title = '${dataToSet.title}'`:true;
  console.log(`UPDATE article SET ${setData} where 1 ${}`)
}
