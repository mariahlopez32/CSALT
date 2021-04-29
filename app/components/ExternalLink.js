import React from 'react';
import { Text,Touchable,TouchableOpacity } from 'react-native';

export default class ExternalLink extends components {

    _openLink = async () => {
        const { link } = this.props;

        if (await Linking.canOpenURL(link)) {
            Linking.openURL(link);
        }
    }

    render() {
        const { children } = this.props;

        return (
            <TouchableOpacity accessibilityRole='link' onPress={this._openLink}>
                {children}
            </TouchableOpacity>
        );
    }
}