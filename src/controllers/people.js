const list = ({ data }) => ({
  data: data.map(person => ({
    id: person.id,
    name: person.display_name,
    email: person.email_address,
    title: person.title
  }))
});

const getCount = email => {
  const charsMap = {};
  for (idx in email) {
    const char = email[idx];
    charsMap.hasOwnProperty(char) ? charsMap[char]++ : (charsMap[char] = 1);
  }

  const charsArray = [];
  for (key in charsMap) {
    charsArray.push({ key, count: charsMap[key] });
  }

  charsArray.sort((charOne, charTwo) => charTwo.count - charOne.count);

  return { data: charsArray };
};

module.exports = {
  list,
  getCount
};
