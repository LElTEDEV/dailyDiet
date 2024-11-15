import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;
`;

export const ContainerArrowBack = styled(TouchableOpacity)``;

export const ContainerText = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.FONT_FAMILY.NUNITO};
    font-weight: ${theme.FONT_SIZE.BOLD};

    font-size: 18px;
  `}
`;
