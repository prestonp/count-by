var getProperty = function( obj, prop ) {
  if (prop.indexOf('.') < 0) return obj[prop];
  var parts = prop.split('.')
    , last = parts.pop()
    , len = parts.length
    , idx = 1
    , current = parts[0];
 
  while( (obj = obj[current]) && idx < len ) {
    current = parts[idx++];
  }
  if ( obj )
    return obj[last];
  return obj;
}
 
  
var countBy = function(list, prop) {
  return list.reduce(function(histogram, obj) {
    var key = getProperty(obj, prop);
    if ( key ) histogram[key] = histogram[key] ? histogram[key]+1 : 1;
    return histogram;
  }, {});
}

module.exports = countBy;
