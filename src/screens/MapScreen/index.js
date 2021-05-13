import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { Loader } from '../../components/Loader';
import styles from './MapScreenStyles';

export default MapScreen = ({ }) => {

    const [isLoading, setIsLoading] = useState(true);
    const iframeString = '<iframe src="https://snazzymaps.com/embed/305242" style="border: none; position: absolute; left: 0; top: 0; width: 100%; height: 100%;"></iframe>';

    return (
        <View style={styles.wrapper}>
            <Loader isLoading={isLoading} />
            <WebView
                scalesPageToFit={false}
                bounces={false}
                javaScriptEnabled
                style={styles.center}
                onLoadEnd={() => setIsLoading(false)}
                source={{
                    html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head>
                    <body>
                      <div id="baseDiv">${iframeString}</div>
                    </body>
                  </html>
            `,
                }}
                automaticallyAdjustContentInsets={false}
            />
        </View>
    )
}
