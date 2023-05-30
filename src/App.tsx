import React from 'react';
import { StatusBar } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Navigation from '@configs/navigation';
import ThemeProvider from '@themes/ThemeProvider';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  if (__DEV__) {
    import('react-query-native-devtools').then(({ addPlugin }) => {
      addPlugin({ queryClient });
    });
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
        <Navigation />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
