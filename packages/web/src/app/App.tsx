import * as React from "react";

const App: React.FC = ({ children }) => (
  <React.Suspense fallback={null}>{children}</React.Suspense>
);

export default App;
