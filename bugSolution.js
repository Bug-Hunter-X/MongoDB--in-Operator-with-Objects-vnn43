```javascript
// Correct usage of $in with a field containing a scalar value within the object
db.collection.find({ 'field.a': { $in: [1,2] } });

//Alternative approach using $elemMatch (for querying objects directly) 
db.collection.find({ field: { $elemMatch: { a: 1 } } });
// or multiple $elemMatch statements to check against multiple conditions
db.collection.find({ field: { $elemMatch: { a: 1 } }, field: { $elemMatch: { b: "test" } } });
```