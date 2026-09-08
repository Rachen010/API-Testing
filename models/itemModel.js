let items = [];

module.exports = {
  getAll: () => items,
  getById: (id) => items.find(i => i.id === id),
  create: (data) => {
    const item = { id: Date.now(), ...data };
    items.push(item);
    return item;
  },
  update: (id, data) => {
    const index = items.findIndex(i => i.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...data };
    return items[index];
  },
  remove: (id) => {
    const before = items.length;
    items = items.filter(i => i.id !== id);
    return items.length < before;
  }
};
