import React, { useState, useEffect } from "react";
import Navigator from "./src/navigation/AppNavigator";
// import { AppLoading } from "expo";

// import loadCustomFonts from "./src/utils/useCustomFonts";

export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
  // useEffect(() => {
  //   return loadCustomFonts() ? setFontLoaded(true) : null;
  // }, []);
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={loadCustomFonts}
  //       onFinish={() => setFontLoaded(true)}
  //     />
  //   );
  // }
  return <Navigator />;
}
