import * as React from "react";

const useUpdateEffect = (
  callback: React.EffectCallback,
  deps: React.DependencyList
): void => {
  const mountedRef = React.useRef(false);

  React.useEffect(() => {
    if (mountedRef.current) {
      return callback();
    }
    mountedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdateEffect;
