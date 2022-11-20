import { useEffect, useState } from "react";
import { isIOS, deviceDetect } from "react-device-detect";

const mobileSafariIos = () => {
    const [device, setDevice] = useState<any>({});
    
    useEffect(() => {
        function checkDevice() {
            if (device.osVersion >= "15.4" && isIOS ) {
                return true
            }
            return null
            
        }
        checkDevice();
    }, []); // Empty array ensures that effect is only run on mount
};

export default mobileSafariIos;