import { Text } from "react-native";
import { Container, Circle, Hora, SnackName, Separator } from "./styles";

interface Props {
  hora: string;
  name: string;
  dieta: boolean;
}

export function CardSnack({ hora, name, dieta }: Props) {
  return (
    <Container>
      <Hora>{hora}</Hora>
      <Separator></Separator>
      <SnackName>{name}</SnackName>
      <Circle dieta={dieta} />
    </Container>
  );
}
