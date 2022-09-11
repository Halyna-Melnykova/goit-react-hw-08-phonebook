export const getState = state => ({
  loading: state.loading,
  error: state.error,
});

export const getFilteredContacts = state => {
  const {
    items: { items },
    filter,
  } = state;
  if (!filter) {
    return items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = items.filter(({ name }) => {
    const normalizedName = name.toLowerCase();

    return normalizedName.includes(normalizedFilter);
  });

  return result;
};
