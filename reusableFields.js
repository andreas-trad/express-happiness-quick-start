/*
 helper variable. It holds some commonly used required fields definitions to avoid redundancy on the requiredFields
 definition.
 The supported types are:
 - int (must be an integer)
 - date (must be a date in the format of the validationString
 - oneof (must be a one of the strings contained on the acceptedValues array)
 - boolean (must be boolean)
 - string (must be a string)
 - numeric (must be a number)
 - email (must be an email)
 */
module.exports = {
    id:{
        key:'id',
        type:'int',
        humanReadable: 'sample id field',
        description:'This is just a sample for creating an int type reusable param',
        mandatory:true,
        validationFailureTexts:{
            mandatory: 'id is mandatory'
        }
    },
    testobj:{
        key:'testObj',
        type:'object',
        humanReadable:'my test obj',
        description:'This is just a sample for defining an object type reusable param',
        mandatory:true,
        keys:{
            alpha:{
                type:'array',
                mandatory:true,
                validationFailureTexts:{
                    mandatory: 'the alpha type is mandatory'
                }
            },
            beta:{
                type:'oneof',
                acceptedValues:['day', 'week', 'month', 'year'],
                validationFailureTexts:{
                    acceptedValues: 'Please pick from one of the allowed values'
                }
            },
            gamma:{
                type:'object',
                keys:{
                    gammaOne:{
                        mandatory:true,
                        type:'numeric'
                    },
                    gammaTwo:{
                        mandatory:false,
                        type:'numeric'
                    }
                }
            }
        }
    }
};