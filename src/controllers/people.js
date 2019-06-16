const getCharMap = email => {
  const charsMap = {};
  for (idx in email) {
    const char = email[idx];
    charsMap.hasOwnProperty(char) ? charsMap[char]++ : (charsMap[char] = 1);
  }
  return charsMap;
};

const getUser = email => email.split("@")[0];

const list = ({ data }) => ({
  data: data.map(person => ({
    id: person.id,
    name: person.display_name,
    email: person.email_address,
    title: person.title
  }))
});

const getCount = email => {
  const charsMap = getCharMap(email);
  const charsArray = [];

  for (key in charsMap) {
    charsArray.push({ key, count: charsMap[key] });
  }

  charsArray.sort((charOne, charTwo) => charTwo.count - charOne.count);
  return { data: charsArray };
};

const getSuggested = (people, email) => {
  const emails = people.data.map(({ email_address }) => email_address);
  const matching = [];

  emails.forEach(user => {
    if (user === email) return false;
    const userKeys = Object.keys(getCharMap(getUser(user))).sort();
    const emailKeys = Object.keys(getCharMap(getUser(email))).sort();
    if (JSON.stringify(userKeys) === JSON.stringify(emailKeys)) {
      matching.push({ suggested: user });
    }
  });

  if (matching.length === 0) {
    matching.push({ suggested: "No suggestions found" });
  }

  return { data: matching };
};

module.exports = {
  list,
  getCount,
  getSuggested
};
