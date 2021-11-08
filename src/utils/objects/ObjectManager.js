import _ from "lodash";

class ObjectManager {

    static GetObjectEntries(obj) {
        /*
        * Example:
        * { foo: "bar", baz: 42 } =>  [ ["foo", "bar"], ["baz", 42] ].
        */
        if (!_.isObject) {
            return [];
        }

        return Object.entries(obj);
    }

    static GetObjectValues(obj) {
        /*
        * Example:
        * { foo: "Foo", baz: "Baz" } =>  [ "Foo", "Baz" ].
        */
        const objectEntries = this.GetObjectEntries(obj);
        const values = objectEntries.map(([key, value]) => value);
        return values;
    }
}

export default ObjectManager;