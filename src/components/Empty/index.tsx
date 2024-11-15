import { Text } from "react-native";
import { Container } from "./styles";

interface Props {
  title: string;
}

export function Empty({ title }: Props) {
  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
}
