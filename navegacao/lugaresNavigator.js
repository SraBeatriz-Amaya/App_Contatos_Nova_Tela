import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import BotaoCabecalho from "../components/BotaoCabecalho";
import Cores from "../constants/Cores";
import DetalhesDoLugarTela from "../telas/DetalhesDoLugarTela";
import ListaDeLugaresTela from "../telas/ListaDeLugaresTela";
import MapaTela from "../telas/MapaTela";
import NovoLugarTela from "../telas/NovoLugarTela";

const Stack = createNativeStackNavigator();

const Container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="NovoLugar"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Cores.primary
                },
                headerTintColor: 'white'
            }}>
            <Stack.Screen name="DetalhesDoLugar" component={DetalhesDoLugarTela}></Stack.Screen>
            <Stack.Screen 
                name="ListaDeLugares" 
                component={ListaDeLugaresTela}
                options={(props) => ({
                    headerRight: () => <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                        <Item 
                            title="adicionar"
                            iconName="md-add"
                            onPress={() => {
                                console.log("chamou")
                                props.navigation.navigate('NovoLugar')
                            }}
                        />
                    </HeaderButtons>
                })}
            ></Stack.Screen>
            <Stack.Screen name="Mapa" component={MapaTela}></Stack.Screen>
            <Stack.Screen name="NovoLugar" component={NovoLugarTela}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default Container;



