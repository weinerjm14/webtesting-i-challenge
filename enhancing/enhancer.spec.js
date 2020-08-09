const enhancer = require('./enhancer.js');
// test away!
test('repair to full durability', () => {
  item = {
    name: 'killer broadsword',
    durability: 19,
    enhancement: 5,
  };
  const repairedItem = enhancer.repair(item);
  expect(repairedItem.durability).toBe(100);
});

test('enhances item correctly', () => {
  item = {
    name: 'fancy pants',
    durability: 85,
    enhancement: 3,
  };

  item2 = {
    name: 'hammer pants',
    durability: 2,
    enhancement: 20,
  };
  const enhancedItem = enhancer.succeed(item);
  const enhancedItem2 = enhancer.succeed(item2);

  expect(enhancedItem.enhancement).toBe(4);
  expect(enhancedItem2.enhancement).toBe(20);
});

test('fails enhancement correctly', () => {
  item1 = {
    name: 'fancy pants',
    durability: 85,
    enhancement: 3,
  };

  item2 = {
    name: 'hammer pants',
    durability: 88,
    enhancement: 20,
  };
  item3 = {
    name: 'killer broadsword',
    durability: 89,
    enhancement: 16,
  };
  let failedItem1 = enhancer.fail(item1);
  let failedItem2 = enhancer.fail(item2);
  let failedItem3 = enhancer.fail(item3);

  expect(failedItem1.durability).toBe(80);
  expect(failedItem1.enhancement).toBe(3);
  expect(failedItem2.durability).toBe(78);
  expect(failedItem2.enhancement).toBe(19);
  expect(failedItem3.durability).toBe(79);
  expect(failedItem3.enhancement).toBe(16);
});
