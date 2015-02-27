var assert = require('assert');
var countBy = require('../index.js');

describe('count-by.js', function() {
  it('should count simple list', function() {
    var users = [
      { name: 'Joe' }
    , { name: 'Jill' }
    , { name: 'Jake' }
    , { name: 'Jake' }
    , { name: 'Jill' }
    ];
    var names = countBy(users, 'name');
    assert(names.Joe === 1);
    assert(names.Jill === 2);
    assert(names.Jake === 2);
  });
  
  it('should count nested object', function() {
    var orders = [
      { id: 1, user: { name: 'Sam' } }
    , { id: 2, user: { name: 'Dan' } }
    , { id: 3, user: { name: 'John' } }
    , { id: 4, user: { name: 'Gillian' } }
    , { id: 5, user: { name: 'John' } }
    , { id: 6, user: { name: 'Sam' } }
    ];
    var names = countBy(orders, 'user.name');
    assert(names.Sam === 2);
    assert(names.Dan === 1);
    assert(names.John === 2);
    assert(names.Gillian === 1);
  });

  it('should count nested object but skip missing prop', function() {
    var orders = [
      { id: 1, user: { name: 'Sam' } }
    , { id: 2, user: { name: 'Dan' } }
    , { id: 3, user: { name: 'John' } }
    , { id: 4, user: { name: 'Gillian' } }
    , { id: 5, user: { name: 'John' } }
    , { id: 6 }
    ];
    var names = countBy(orders, 'user.name');
    assert(names.Sam === 1);
    assert(names.Dan === 1);
    assert(names.John === 2);
    assert(names.Gillian === 1);
  });
});
