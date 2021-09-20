import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateuser } from '../redux/auth/action';

export default function Home() {
  const dispatch = useDispatch();
  const authStatus = useSelector((store) => store.auth.user);
  const press = () => {
    dispatch(updateuser());
  };
  return (
    <>
      <h2>Home</h2>
      <p> {authStatus}</p>
      <button type="button" onClick={press}>
        press
      </button>
    </>
  );
}
