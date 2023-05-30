import React from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, Text } from "./styles";

const ProfileTabScreen: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Text>ProfileTabScreen</Text>
    </Container>
  );
};

export default ProfileTabScreen;
