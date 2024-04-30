import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Services = () => {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView style={styles.BColor}>
                <View style={{ padding: 20 }}>
                    <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600", marginVertical: 20, alignSelf: "center" }}>Services</Text>
                    <View style={styles.Wrap}>
                        <TouchableOpacity style={[styles.JACenter, styles.Block]}>
                            {/* <Ionicons name="bus-outline" size={26}/> */}
                            <Text style={{ color: "#fff", fontWeight: "600" }}>Transportation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.JACenter, styles.Block]}>
                            {/* <Ionicons name="bus-outline" size={26}/> */}
                            <Text style={{ color: "#fff", fontWeight: "600" }}>Travel & Tourism</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.JACenter, styles.Block]}>
                            {/* <Ionicons name="bus-outline" size={26}/> */}
                            <Text style={{ color: "#fff", fontWeight: "600" }}>Qibla Compa...</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.JACenter, styles.Block]}>
                            {/* <Ionicons name="bus-outline" size={26}/> */}
                            <Text style={{ color: "#fff", fontWeight: "600" }}>Help & Supp...</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "600", marginVertical: 30, marginLeft: 10 }}>Popular</Text>
                    <Image source={require('../res/5.png')} style={styles.imge} />
                    <Image source={require('../res/6.png')} style={styles.imge} />
                    <Image source={require('../res/7.png')} style={styles.imge} />
                    <Image source={require('../res/8.png')} style={styles.imge} />
                    <Image source={require('../res/madina.png')} style={styles.imge} />
                    <Image source={require('../res/4.png')} style={styles.imge} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Services

const styles = StyleSheet.create({
    BColor: { backgroundColor: "#23282d" },
    imge: { height: 250, width: "100%",borderRadius:12,borderColor:"#fff",borderWidth:1 },
    JACenter: { justifyContent: "center", alignItems: "center" },
    Wrap: { flexDirection: "row", flexWrap: "wrap", },
    Block: { backgroundColor: "#39424a", height: 50, width: 166, borderRadius: 12, marginVertical: 7, marginHorizontal: 4 },
})