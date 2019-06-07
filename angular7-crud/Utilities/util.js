//define error codes
let statusCode = {
  OK: 200,
  FOUR_ZERO_FOUR: 404,
  FOUR-ZERO-THREE: 403,
  FOUR_ZERO_ONE: 401,
  FIVE_ZERO_ZERO: 500,

};

//DEFINE ERROR MESSAGES
let statusMessage = {
  SERVER_BUSY: 'our server are busy. Please try again later.',
  DATA_UPDATED: 'Data updated successfully.',
  DELETE_DATA: 'deleted data successfully',
},

module.exports = {
  statusCode: statusCode,
  statusMessage: statusMessage
}
