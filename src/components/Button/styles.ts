import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  ${({ theme }) => css`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 10px;
    padding: 20px;
    border-radius: 6px;

    background-color: ${theme.COLORS["gray-200"]};
    margin-top: 10px;
  `}
`;
