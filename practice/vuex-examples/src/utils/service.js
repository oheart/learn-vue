const digitsRE = /(\d{3})(?=\d)/g

let Service = {
  currency: function (value, currency, decimals) {
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : '$'
    decimals = decimals != null ? decimals : 2
    var stringified = Math.abs(value).toFixed(decimals)
    var _int = decimals
      ? stringified.slice(0, -1 - decimals)
      : stringified
    var i = _int.length % 3
    var head = i > 0
      ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
      : ''
    var _float = decimals
      ? stringified.slice(-1 - decimals)
      : ''
    var sign = value < 0 ? '-' : ''
    return sign + currency + head +
      _int.slice(i).replace(digitsRE, '$1,') +
      _float
  },
  handleTimeStamp: function (timestamp) {
    return new Date(timestamp).toLocaleTimeString()
  },
  /**
* Deep copy the given object considering circular structure.
* This function caches all nested objects and its copies.
* If it detects circular structure, use cached copy to avoid infinite loop.
*
* @param {*} obj
* @param {Array<Object>} cache
* @return {*}
*/
  deepCopy:function(obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj)
    if (hit) {
      return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
      original: obj,
      copy
    })

    Object.keys(obj).forEach(key => {
      copy[key] = Service.deepCopy(obj[key], cache)
    })

    return copy
  }
}

export default Service;


