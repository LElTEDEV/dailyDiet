import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${theme.COLORS.white};
  `}
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: 40,
  color: theme.COLORS["green-dark"],
}))``;
