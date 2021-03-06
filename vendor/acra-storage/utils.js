var utils = {

    digestReport: function(doc) {
        if (doc.USER_CRASH_DATE) {
            var value = {
                user_crash_date: doc.USER_CRASH_DATE,
                application_version: doc.APP_VERSION,
                application_name: doc.APP_NAME,
                application_package: doc.APPLICATION_PACKAGE,
                level: doc.LEVEL
            };
            if(doc.SIGNATURE){
                value.signature = doc.SIGNATURE;
            } else {
                value.stack_trace = doc.STACK_TRACE;
            }
            if (doc.INSTALLATION_ID) {
                value.installation_id = doc.INSTALLATION_ID;
            }

            value.device = utils.getDevice(doc);

            return value;
        }
    },

    getDevice: function(doc) {
        if(doc.BUILD) {
            if(doc.BUILD.MANUFACTURER) {
                return doc.BUILD.MANUFACTURER + " " + doc.BUILD.BRAND + " " + doc.BUILD.MODEL;
            } else {
                return doc.BUILD.BRAND + " " + doc.BUILD.MODEL;
            }
        } else {
            var value = "";
            if(doc.BRAND) {
                value = doc.BRAND;
            }
            if(doc.PRODUCT) {
                value += " " + doc.PRODUCT;
            }
            if(doc.PHONE_MODEL) {
                value += " " + doc.MODEL;
            }

            return value;
        }
    }
};

// CommonJS bindings
if( typeof(exports) === 'object' ) {
    exports.digestReport = utils.digestReport;
};