const { generateText, addTag } = require("./util");

// test("Test Name Generator", () => {
//   const generateTextTest = generateText();
//   expect(generateTextTest).toBe(true);
// });

test("Adding unique tag to tags shorter than 5", () => {
  const tag = "10";
  const tags = ["1", "2"];

  const combinedTags = addTag(tag, tags);

  expect(combinedTags).toBe(true);
});

test("Adding nonUnique tag to tags shorter than 5", () => {
  const tag = "1";
  const tags = ["1", "2", "3", "4", "5"];

  const combinedTags = addTag(tag, tags);

  expect(combinedTags).toBe(false);
});

test("Adding unique tag to tags longer than 5", () => {
  const tag = "10";
  const tags = ["1", "2", "3", "4", "5"];

  const combinedTags = addTag(tag, tags);

  expect(combinedTags).toBe(false);
});

test("Adding nonUnique tag to tags longer than 5", () => {
  const tag = "1";
  const tags = ["1", "2", "3", "4", "5"];

  const combinedTags = addTag(tag, tags);

  expect(combinedTags).toBe(false);
});
