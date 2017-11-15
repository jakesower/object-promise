/**
 * Much like Promise.all, but over object values.
 *
 * @param {Object} obj
 *   an object with values that may be promises
 *
 * @return {Promise.<Object>}
 *   promise of the input object with all the promises resolved
 */
module.exports = obj => {
  const keys = Object.keys(obj);
  const vals = keys.map(k => obj[k]);
  const zipObj = function(xs, ys) {
    return xs.reduce((acc, elt, idx) =>
      Object.assign(acc, {[elt]: ys[idx]}), {});
  }

  return Promise.all(vals)
    .then(vals => zipObj(keys, vals));
}
