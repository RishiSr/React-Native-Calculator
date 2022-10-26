import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Clickbutton from './Clickbutton'
import ClearButton from './ClearButton'
import SignButton from './Signbutton'

const Buttonpad = () => {


    const [displayData, setdisplayData] = useState("");
    const [num, setnum] = useState([])
    const [sign, setsign] = useState([""])

    const showdata = async () => {
        let ans = 0;
        let sign = "+";
        let curr1 = "0";



        let finddata = displayData + "+0+0";
        console.log(finddata)
        let prev = "";
        let prevsign = "+";
        for (let i = 0; i < finddata.length; i++) {
            if (isNaN(finddata[i])) {
                let curr = parseInt(curr1);

                if (prevsign == '+') {
                    ans += curr;
                }
                else if (prevsign == '-') {
                    ans -= curr;
                }
                else if (prevsign == '*') {
                    ans *= curr;
                } else {
                    ans /= curr;
                }
                console.log(ans);

                curr1 = prev;
                prevsign = sign;
                sign = finddata[i];
                prev = "";

            } else {
                prev += finddata[i];
            }
            setdisplayData(ans)

        }

    }
    return (<>
        <View style={styles.display} >
            <Text style={styles.displayText} >{displayData}</Text>
        </View>
        <View style={styles.container} >
            <View style={styles.buttonlay} >
                <Clickbutton sign="9" func={() => { }} />
                <Clickbutton sign="8" func={() => { setdisplayData(displayData + '8') }} />
                <Clickbutton sign="7" func={() => { setdisplayData(displayData + '7') }} />
                <Clickbutton sign="6" func={() => { setdisplayData(displayData + '6') }} />
                <Clickbutton sign="5" func={() => { setdisplayData(displayData + '5') }} />
                <Clickbutton sign="4" func={() => { setdisplayData(displayData + '4') }} />
                <Clickbutton sign="3" func={() => { setdisplayData(displayData + '3') }} />
                <Clickbutton sign="2" func={() => { setdisplayData(displayData + '2') }} />
                <Clickbutton sign="1" func={() => { setdisplayData(displayData + '1') }} />
                <Clickbutton sign="0" func={() => { setdisplayData(displayData + '0') }} />
                <Clickbutton sign="." func={() => { setdisplayData(displayData + '.') }} />
                <Clickbutton sign="DEL" func={() => {
                    setdisplayData(displayData.substring(0, displayData.length - 1))
                }} />
                <ClearButton sign="CLR" func={() => { setdisplayData("") }} />
                <ClearButton sign="=" func={showdata} />

            </View>
            <View style={styles.signlay} >
                <SignButton sign="+" func={() => setdisplayData(displayData + '+')} />
                <SignButton sign="-" func={() => setdisplayData(displayData + '-')} />

                <SignButton sign="*" func={() => setdisplayData(displayData + '*')} />

                <SignButton sign="/" func={() => setdisplayData(displayData + '/')} />

                <SignButton sign="+/-" func={() => { setdisplayData() }} />


            </View>
        </View>
    </>
    )
}

export default Buttonpad

const styles = StyleSheet.create({
    display: {
        flex: 1.5,

        width: "100%",
        flexDirection: "column-reverse",
        alignItems: 'flex-end',
        borderWidth: 2,
        borderColor: "#3D8361",
        borderRadius: 15,
        backgroundColor: "#EEF2E6",


    },
    container: {
        zIndex: 3,
        flex: 2,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "white",
        paddingTop: 10


    },
    signlay: {
        flex: 1,
        width: "100%",
        flexWrap: "wrap",

    },
    buttonlay: {
        flex: 3.5,
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    displayText: {
        fontSize: 90,

    }
})