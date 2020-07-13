/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo /*, useCallback*/ } from 'react';
import bem, { Modifiers } from '../helpers/bem';

/**
 * Outputs a string with className construction based on BEM terminology
 * it recalculates always the modifiers changes
 */
function useBem(blockClass: string, modifiers: Modifiers, mergeClass?: string) {
  // Memoizes bem output because it`s compute an expensive calculations
  const className = useMemo(
    () => bem(blockClass, modifiers, mergeClass),
    Object.values(modifiers)
  );

  return className;

  // const element = useCallback(
  //   (elementClass: string) => `${blockClass}__${elementClass}`,
  //   []
  // );

  // return {
  //   className,
  //   element,
  // };
}

export default useBem;
