import React from 'react';
import { StatusBar } from 'react-native';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Navigation from '@configs/navigation';
import ThemeProvider from '@themes/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
        <SafeAreaProvider
          initialMetrics={{
            frame: { x: 0, y: 0, width: 0, height: 0 },
            insets: { top: 0, left: 0, right: 0, bottom: 0 },
          }}>
          <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent />
          <Navigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
