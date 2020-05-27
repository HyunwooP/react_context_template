import React, { useReducer, useEffect } from "react";
import { StateContext, DispatchContext } from '../context';
import reducer from '../context/reducer';
import { initState } from "../context";
import { User } from "../context/model/User";

export default ({ children }: { children: React.ReactNode }) => {
  const [user, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    init();
  }, []);

  /**
   * 임시 데이터 넣어둠.
   */
  const init = async () => {
      dispatch({
        type: 'SET_USER',
        user: new User('2020-05-28', '1flowdown@gmail.com', 'HyunwooPark', '01074008232', 'Seoul')
      });
  };

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={user}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}