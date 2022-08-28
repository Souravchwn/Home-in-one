import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CalendarPicker from 'react-native-calendar-picker';
import { Entypo } from '@expo/vector-icons';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date) {
        this.setState({
            selectedStartDate: date,
        });
    }
    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={styles.container}>
                <CalendarPicker
                    onDateChange={this.onDateChange}
                    monthTitleStyle={{ color: '#FC8010' }}
                    yearTitleStyle={{ color: '#FC8010' }}
                    height={370}
                    width={370}
                    previousTitle='Prev'
                    nextTitle='Next'
                    selectedDayStyle={{ backgroundColor: '#FEE590' }}
                    scrollable
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});