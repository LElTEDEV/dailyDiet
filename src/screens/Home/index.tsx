import { Image, View, Text, SectionList } from "react-native";
import {
  Avatar,
  Container,
  ContainerAvatar,
  Header,
  TouchableInfo,
  TitlePrimaryInfo,
  TitleSecondaryInfo,
  Arrow,
  ContainerAddSnack,
} from "./styles";
import { Button } from "@/src/components/Button";
import { useTheme } from "styled-components/native";
import { CardSnack } from "@/src/components/CardSnack";
import { Empty } from "@/src/components/Empty";

export function Home() {
  const THEME = useTheme();

  const sections = [
    {
      title: "15.11.2024",
      data: [
        { id: "1", name: "Pizza", dieta: false, hora: "20:00" },
        { id: "2", name: "Hamburguer", dieta: false, hora: "20:00" },
        { id: "3", name: "Sorvete", dieta: false, hora: "20:00" },
      ],
    },
    {
      title: "13.11.2024",
      data: [
        { id: "4", name: "Pão Integral", dieta: true, hora: "20:00" },
        { id: "5", name: "Iogurte", dieta: true, hora: "20:00" },
        { id: "6", name: "Água", dieta: true, hora: "20:00" },
      ],
    },
  ];

  return (
    <>
      <Container>
        <Header>
          <Image source={require("@/src/assets/logo.png")} />
          <ContainerAvatar>
            <Avatar source={{ uri: "https://github.com/igor.png" }} />
          </ContainerAvatar>
        </Header>

        <TouchableInfo dentroDaDieta={true}>
          <Arrow dentroDaDieta={true} />
          <View>
            <TitlePrimaryInfo>90,86%</TitlePrimaryInfo>
            <TitleSecondaryInfo>
              das refeições dentro da dieta
            </TitleSecondaryInfo>
          </View>
        </TouchableInfo>

        <ContainerAddSnack>
          <Text
            style={{
              color: THEME.COLORS["gray-100"],
              fontSize: 16,
              fontFamily: THEME.FONT_FAMILY.NUNITO,
            }}
          >
            Refeições
          </Text>
          <Button icon title="Nova refeição" />
        </ContainerAddSnack>

        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <CardSnack name={item.name} dieta={item.dieta} hora={item.hora} />
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text
              style={{
                fontSize: 20,
                fontFamily: THEME.FONT_FAMILY.NUNITO,
                fontWeight: "bold",
                color: THEME.COLORS["gray-100"],
                marginBottom: 5,
                marginTop: 30,
              }}
            >
              {title}
            </Text>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Empty title="Você ainda não possui nenhuma refeição ;(" />
          }
          contentContainerStyle={sections.length === 0 && { flex: 1 }}
        />
      </Container>
    </>
  );
}
