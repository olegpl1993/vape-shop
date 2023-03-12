import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
// eslint-disable-next-line import/extensions
import { RootState, AppDispatch } from './store/store';

export const useAppDispatch = useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
