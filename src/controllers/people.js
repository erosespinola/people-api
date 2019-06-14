const list = ({ data }) => ({
  data: data.map(person => ({
    id: person.id,
    name: person.display_name,
    email: person.email_address,
    title: person.title
  }))
});

module.exports = {
  list
};
