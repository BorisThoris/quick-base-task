exports.generateText = (name, age) => {
  return true;
};

exports.addTag = (tag, passedTags) => {
  if (tag === "") return false;
  else if (passedTags.includes(tag)) {
    return false;
  } else if (passedTags.length > 4) {
    return false;
  } else {
    return true;
  }
};
