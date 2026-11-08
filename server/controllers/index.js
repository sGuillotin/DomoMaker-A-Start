/**
 * Remember that this file gets automatically imported when the folder is imported.
 * Since we know this, we will make this file pull in other files we want in public scope.
 * We will pull in Account and Domo.
*/

module.exports.Account = require('./Account.js');
module.exports.Domo = require('./Domo.js');