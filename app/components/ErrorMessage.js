//rsf keyboard shortcut for import react
import React from 'react';
//imrn keyboard shortcut for import react-native
import { StyleSheet } from 'react-native';

import AppText from './AppText';

function ErrorMessage({ error, visible }) {
    if (!visible || !error) return null;

    return <AppText style={styles.error}>{error}</AppText>;
    
}

//rnss for stylesheet shortcut
const styles = StyleSheet.create({
    error: { color: "red"},
});

export default ErrorMessage;