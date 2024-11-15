import { Text } from "react-native";
import { TouchableOpacityProps } from "react-native";

import { Container } from "./styles";
import Plus from "phosphor-react-native/src/icons/Plus";

type Props = TouchableOpacityProps & {
  title: string;
  icon: boolean;
};
export function Button({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      {icon && <Plus size={18} color="white" />}
      <Text style={{ color: "white", fontSize: 14 }}>{title}</Text>
    </Container>
  );
}
