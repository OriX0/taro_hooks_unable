import type { Dispatch, SetStateAction } from 'react';
import { useState, useRef, useCallback } from 'react';

type GetState<S> = () => S;

export const useGetState = <S>(
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>, GetState<S>] => {
  const [state, setState] = useState<S>(initialState);
  /* useRef 用于保存实时状态 */
  const stateRef = useRef<S>(state);
  stateRef.current = state;

  console.log('useGetState内获取到的state',state);
  const getState = useCallback<GetState<S>>(() => stateRef.current, []);

  return [state, setState, getState];
};

