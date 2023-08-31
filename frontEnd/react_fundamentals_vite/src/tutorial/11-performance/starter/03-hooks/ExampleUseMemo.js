import { useMemo } from "react";
import slowFunction from "./../../final/03-hooks/slowFunction";
// useMemo makes so that if a function returns the same value, it doesn't run on rerender
function ExampleUseMemo() {
  const value = useMemo(() => slowFunction(), []);
  console.log(value);
}

export default ExampleUseMemo;
