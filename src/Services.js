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
                    <Text style={styles.WhiteF20}>Popular</Text>
                    <Image source={require('../res/Image7.jpg')} style={styles.imge} />
                    <View style={styles.FJRow}>
                        <View style={{ width: "60%" }}>
                            <Text style={styles.WhiteF17}>Schedule of Imams and Muezzins for Tarawih and Qiyam Prayers</Text>
                            <Text style={styles.GreyF16}>View the schedule of imams and muezzins</Text>
                        </View>
                        <TouchableOpacity style={[styles.JACenter, styles.WhiteH40]}>
                            <Text style={styles.WhiteF17}>View</Text>
                        </TouchableOpacity>
                    </View>

                    <Image source={require('../res/Image6.jpg')} style={styles.imge} />
                    <View style={styles.FJRow}>
                        <View style={{ width: "60%" }}>
                            <Text style={styles.WhiteF17}>Live From Sermon</Text>
                            <Text style={styles.GreyF16}>Watch the live brodcast of Friday sermon</Text>
                        </View>
                        <TouchableOpacity style={[styles.JACenter, styles.WhiteH40]}>
                            <Text style={styles.WhiteF17}>View</Text>
                        </TouchableOpacity>
                    </View>

                    <Image source={require('../res/Image5.jpg')} style={styles.imge} />
                    <View style={styles.FJRow}>
                        <View style={{ width: "60%" }}>
                            <Text style={styles.WhiteF17}>Prayer halls in the Prophet's Mosque</Text>
                            <Text style={styles.GreyF16}>To check the prayer hall occupancy status</Text>
                        </View>
                        <TouchableOpacity style={[styles.JACenter, styles.WhiteH40]}>
                            <Text style={styles.WhiteF17}>View</Text>
                        </TouchableOpacity>
                    </View>

                    <Image source={require('../res/Image4.jpg')} style={styles.imge} />
                    <View style={styles.FJRow}>
                        <View style={{ width: "60%" }}>
                            <Text style={styles.WhiteF17}>Purchase communication and internet packages</Text>
                            <Text style={styles.GreyF16}>Proceed to Purchase your package.</Text>
                        </View>
                        <TouchableOpacity style={[styles.JACenter, styles.WhiteH40]}>
                            <Text style={styles.WhiteF17}>View</Text>
                        </TouchableOpacity>
                    </View>

                    <Image source={require('../res/Image3.jpg')} style={styles.imge} />
                    <View style={styles.FJRow}>
                        <View style={{ width: "60%" }}>
                            <Text style={styles.WhiteF17}>Schedule of imams and muezzins</Text>
                            <Text style={styles.GreyF16}>View the schedule of imams and muezzins.</Text>
                        </View>
                        <TouchableOpacity style={[styles.JACenter, styles.WhiteH40]}>
                            <Text style={styles.WhiteF17}>View</Text>
                        </TouchableOpacity>
                    </View>

                    <Image source={require('../res/Image2.jpg')} style={styles.imge} />
                    <View style={styles.FJRow}>
                        <View style={{ width: "60%" }}>
                            <Text style={styles.WhiteF17}>Electric Carts</Text>
                            <Text style={styles.GreyF16}>Reserve your electric cart.</Text>
                        </View>
                        <TouchableOpacity style={[styles.JACenter, styles.WhiteH40]}>
                            <Text style={styles.WhiteF17}>View</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Services

const styles = StyleSheet.create({
    WhiteF17:{ color: "#fff", fontSize: 17 },
    WhiteF20: { color: "#fff", fontSize: 20, fontWeight: "600", marginVertical: 30, marginLeft: 10 },
    WhiteH40: { borderWidth: 1, borderRadius: 20, borderColor: '#fff', width: 70, height: 40,marginVertical:20 },
    GreyF16:{ color: "#646464", fontSize: 16 },
    BColor: { backgroundColor: "#23282d" },
    imge: { height: 200, width: "100%", borderRadius: 12, marginVertical: 20 },
    FJRow: { flexDirection: "row", justifyContent: "space-between" },
    JACenter: { justifyContent: "center", alignItems: "center" },
    Wrap: { flexDirection: "row", flexWrap: "wrap", },
    Block: { backgroundColor: "#39424a", height: 50, width: 166, borderRadius: 12, marginVertical: 7, marginHorizontal: 4 },
})