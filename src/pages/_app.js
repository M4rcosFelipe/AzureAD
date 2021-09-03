import "@styles/globals.css";
import { MainLayout } from "@layouts";
import { ThemeProvider } from "styled-components";
import DefaultTheme from "@styles/themes/default";
import { AuthProvider } from "@auth";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ThemeProvider theme={DefaultTheme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
