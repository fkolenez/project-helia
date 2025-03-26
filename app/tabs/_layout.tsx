import { Tabs } from "expo-router";
import { Bookmark, House, MagnifyingGlass, Notebook, UserSquare } from "phosphor-react-native";
import { Text, View } from "react-native";

export default function TabsLayout() {
  return(
    <Tabs screenOptions={{
        // mostra em qual pagina estamos
        headerShown: false,
        // Estilo da TabBar
        tabBarStyle: {
          backgroundColor: "#181a20",
          height: 90,
          paddingTop: 20,
        },
        // Texto do nome da pagina, false para nao mostrar
        tabBarShowLabel: false,
        // Quando estiver ativo fica nessa cor, é tipo um hovber
        tabBarActiveTintColor: "#1ab65c",
      }}
    >
      
      {/* Essa montueira de codigo é só pra colocar um icon */}
      <Tabs.Screen name="index" options={{
        tabBarIcon: ({color}) => (
          <View style={{
            width: 50,
            alignItems: "center",
            justifyContent: "center",
          }}>
            <House size={32} color={color} weight="thin"/>
            <Text style={{ color: color, fontSize: 10}}>Home</Text>
          </View>
        )
      }}/>

      <Tabs.Screen name="search" options={{
        tabBarIcon: ({color}) => (
        <View style={{
          width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <MagnifyingGlass size={32} color={color} weight="thin"/>
          <Text style={{ color: color, fontSize: 10}}>Pesquisar</Text>
        </View>
        )
      }}/>

      <Tabs.Screen name="booking" options={{
        tabBarIcon: ({color}) => (
        <View style={{
          width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <Notebook size={32} color={color} weight="thin"/>
          <Text style={{ color: color, fontSize: 10}}>Reservas</Text>
        </View>
        )
      }}/>

      <Tabs.Screen name="profile" options={{
        tabBarIcon: ({color}) => (
        <View style={{
          width: 50,
          alignItems: "center",
          justifyContent: "center",
        }}>
          <UserSquare size={32} color={color} weight="thin"/>
          <Text style={{ color: color, fontSize: 10}}>Perfil</Text>
        </View>
        )
      }}/>

    </Tabs>
  ); 
}
