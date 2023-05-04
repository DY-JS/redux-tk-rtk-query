import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const rootActions = {
  //все actions из проекта
  ...actions,
};

export const useAction = () => {
  const dispatch = useDispatch();

  return useMemo(() => {
    bindActionCreators(rootActions, dispatch), [dispatch];
  });
};
