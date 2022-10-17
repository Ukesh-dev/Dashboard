// import { useContext, createContext } from 'react';
import {
  createContext,
  useContext,
  useContextSelector,
} from 'use-context-selector';
// export const contextFactotry = <A extends unknown | null>() => {
//   const context = createContext<A | undefined>(undefined);

//   const useCtx = () => {
//     const ctx = useContext(context);
//     if (ctx === undefined) {
//       throw new Error(
//         'useContext must be used inside of a Provider with a value.'
//       );
//     }
//     return ctx;
//   };
//   return [useCtx, context] as const;
// };

export const contextFactory = <CtxState,>() => {
  const context = createContext<CtxState | undefined>(undefined);

  const useCtx = () => {
    const ctx = useContext(context);
    if (ctx === undefined) {
      throw new Error('useContextSelector must be within a context provider');
    }
    return ctx;
  };

  // eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
  type ContextSelector<Selected, CellSelected> = (
    ctxState: CellSelected
  ) => Selected;

  const useCtxSelector = <Selected,>(
    contextSelector: ContextSelector<Selected, CtxState>
  ) => {
    const selector = (state: CtxState | undefined) => {
      if (state === undefined) {
        throw new Error('useContextSelector must be within a context provider');
      }
      return contextSelector(state);
    };
    return useContextSelector<
      CtxState | undefined,
      ReturnType<typeof selector>
    >(context, selector);
  };
  return [context, useCtx, useCtxSelector] as const;
};
