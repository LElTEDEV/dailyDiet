import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  align-items: center;

  min-height: 49px;
  max-height: 49px;

  padding: 0 20px;

  border: 1px solid ${({ theme }) => theme.COLORS["gray-500"]};
  border-radius: 6px;

  margin-bottom: 10px;
`;

export const Hora = styled.Text`
  ${({ theme }) => css`
    font-weight: ${theme.FONT_SIZE.BOLD};
    font-family: ${theme.FONT_FAMILY.NUNITO};
    font-size: 12px;
  `}
`;

export const Separator = styled.View`
  width: 1px;
  height: 50%;
  background-color: ${({ theme }) => theme.COLORS["gray-400"]};

  border-radius: 10px;

  margin-left: 10px;
  margin-right: 10px;
`;

export const SnackName = styled.Text`
  ${({ theme }) => css`
    flex: 1;
    font-size: 16;

    color: ${theme.COLORS["gray-200"]};
    font-family: ${theme.FONT_FAMILY.NUNITO};
    font-weight: ${theme.FONT_SIZE.REGULAR};
  `}
`;

interface CircleProps {
  dieta: boolean;
}

export const Circle = styled.View<CircleProps>`
  ${({ theme, dieta }) => css`
    height: 14px;
    width: 14px;

    border-radius: 50%;
    background-color: ${dieta
      ? theme.COLORS["green-light"]
      : theme.COLORS["red-light"]};
  `}
`;
