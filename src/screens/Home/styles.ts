import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import ArrowUpRight from "phosphor-react-native/src/icons/ArrowUpRight";

import styled, { css } from "styled-components/native";
import { IconProps } from "phosphor-react-native/src/lib";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.white};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 33px;
`;

export const ContainerAvatar = styled.View`
  width: 45px;
  height: 45px;
  background-color: ${({ theme }) => theme.COLORS["gray-200"]};
  border-radius: 99%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = TouchableOpacityProps & {
  dentroDaDieta: boolean;
};

export const TouchableInfo = styled(TouchableOpacity)<Props>`
  width: 100%;

  padding: 10px 10px 20px;
  background-color: ${({ theme, dentroDaDieta }) =>
    dentroDaDieta ? theme.COLORS["green-light"] : theme.COLORS["red-light"]};

  border-radius: 8px;

  margin-bottom: 40px;
`;

export const TitlePrimaryInfo = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.NUNITO};
    font-weight: ${theme.FONT_SIZE.BOLD};
    color: ${theme.COLORS["gray-100"]};
    font-size: 32px;

    text-align: center;
    margin-top: -10px;
  `}
`;

export const TitleSecondaryInfo = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.NUNITO};
    font-weight: ${theme.FONT_SIZE.REGULAR};
    color: ${theme.COLORS["gray-100"]};

    text-align: center;
  `}
`;

type ArrowProps = IconProps & {
  dentroDaDieta: boolean;
};

export const Arrow = styled(ArrowUpRight).attrs<ArrowProps>(
  ({ theme, dentroDaDieta }) => ({
    color: dentroDaDieta
      ? theme.COLORS["green-dark"]
      : theme.COLORS["red-dark"],

    size: 24,
  })
)`
  align-self: flex-end;
`;

export const ContainerAddSnack = styled.View`
  margin-bottom: 10px;
`;

export const Avatar = styled.Image.attrs(({}) => ({
  borderRadius: 99,
}))`
  width: 40px;
  height: 40px;
`;
