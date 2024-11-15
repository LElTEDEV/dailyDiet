import { Container, ContainerArrowBack, ContainerText, Title } from "./styles";

import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft";

interface Props {
  title?: string;
  color?: string;
}

export function ButtonBack({ title, color = "black" }: Props) {
  return (
    <Container>
      <ContainerArrowBack>
        <ArrowLeft size={32} color={color} />
      </ContainerArrowBack>
      {title && (
        <ContainerText>
          <Title>{title}</Title>
        </ContainerText>
      )}
    </Container>
  );
}
