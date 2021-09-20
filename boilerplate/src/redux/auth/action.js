export const updateuser = () => ({
  type: 'UPDATE_USER',
  payload: Math.floor(Math.random() * 1000),
});

export const something = () => ({
  type: 'UPDATE_USER',
  payload: {
    user: 'ok',
  },
});
