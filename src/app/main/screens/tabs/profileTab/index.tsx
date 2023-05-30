import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Text } from "./styles";

const WealthTabScreen: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Text>WealthTab Screen</Text>
    </Container>
  );
};

export default WealthTabScreen;
