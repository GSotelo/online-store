import strings from "../../assets/json/strings/strings.json";
import ObjectManager from "../objects/ObjectManager";
import _ from "lodash";

class StringManager {
    static isString(value){
        return _.isString(value);
    }

    static getStampList(){
        return ObjectManager.GetObjectValues(strings.productDetails.stamps);
    }
}

export default StringManager;