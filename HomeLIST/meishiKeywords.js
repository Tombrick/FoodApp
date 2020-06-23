/**
 * Created by 狗谭 on 2020/6/21.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
} from 'react-native';

export default class SearchKeywordsChangeColor extends Component {

    static defaultProps = {//默认样式
        style: {
            alignItems: 'flex-end'
        },
    };

    render() {
        const { value, delimiter, style, frontStyle, delimiterStyle} = this.props;
        let frontValue = '';
        let behindValue = '';
        const splits = value && delimiter && value.split(delimiter);
        if (splits && splits.length) {
            frontValue = splits[0];
            behindValue = splits[1];
        }

        if (!delimiter) {
            return (
                <View style={[{ flexDirection: 'row' }, style]}>
                    <Text style={frontStyle}>{value}</Text>
                </View>
            );
        }
    }
}