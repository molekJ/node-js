const users = [
  { id: 1, name: "Adam" },
  { id: 2, name: "Kuba" },
  { id: 3, name: "Jagienka" },
];

module.exports = {
  showUsers() {
    const names = users.map((user) => user.name);
    console.log("\nNasi uzytkownicy to:");
    names.forEach((user) => console.log(user));
  },

  showUserObj(id) {
    console.log("Szukany uzytkownik to:");
    const userFind = users.find((user) => user.id === id);
    console.log(userFind);
  },
  serListLength: users.length,
};
