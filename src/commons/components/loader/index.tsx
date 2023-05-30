import React from 'react';
import { ActivityIndicator } from 'react-native';

type Props = {
  isLoading: boolean;
};

const Loader: React.FC<Props> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }

  return <ActivityIndicator />;
};

export default Loader;
