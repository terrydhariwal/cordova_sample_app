cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.couchbase.lite.phonegap/www/cblite.js",
        "id": "com.couchbase.lite.phonegap.CouchbaseLite",
        "pluginId": "com.couchbase.lite.phonegap",
        "clobbers": [
            "window.cblite"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "com.couchbase.lite.phonegap": "1.3.1"
}
// BOTTOM OF METADATA
});