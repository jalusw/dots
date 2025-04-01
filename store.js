export const store = {
  state: {
    notes: [],
  },
};

const proxy = new Proxy(store, {
  set(target, key, value) {
    target[key] = value;
    renderPage();
    return true;
  },
});

export default proxy;
