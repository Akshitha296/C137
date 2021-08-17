import axios from "axios";
import React from "react";
import { FlatList } from "react-native";
import { View, TouchableOpacity, Text } from "react-native";
import { ListItem } from "react-native-elements/dist/list/ListItem";

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list_data: [],
            url: "http://127.0.0.1:5000",
        }
    }
    
    componentDidMount(){
        this.getPlanets()
    }

    getPlanets = () => {
        const {url} = this.state;
        axios.get(url).then(response => {
            return this.setState({
                list_data: response.data.data
            })
        }).catch(error => {
            console.log(error.message)
        })
    }

    keyExtractor = (item, index) => index.toString()
    renderItem = ({item, index}) => {
        return(
            <ListItem
                key = {index}
                title = {item.name}
                subtitle = {item.distance_from_earth}
                bottomDivider
                onPress = {() => {this.props.navigation.navigate("Details", {planet_name: item.name})}}
            />
        )
    }

    render(){
        const{list_data} = this.state
        if(list_data.length === 0){
            return(
                <View>
                    <Text>
                        Data Loading
                    </Text>
                </View>
            )
        }
        return(
            <View>
                <Text>
                    Exo Planets World
                </Text>
                <View>
                    <FlatList
                        keyExtractor = {this.keyExtractor}
                        data  = {this.state.list_data}
                        renderItem = {this.renderItem()}
                    />
                </View>
            </View>
        )
    }
}