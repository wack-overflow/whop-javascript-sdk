/**
 * Whop API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.10
 * Contact: support@whop.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ResetLicenseByKeyResponse model module.
 * @module model/ResetLicenseByKeyResponse
 * @version 1.0.10
 */
class ResetLicenseByKeyResponse {
    /**
     * Constructs a new <code>ResetLicenseByKeyResponse</code>.
     * @alias module:model/ResetLicenseByKeyResponse
     */
    constructor() { 
        
        ResetLicenseByKeyResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResetLicenseByKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResetLicenseByKeyResponse} obj Optional instance to populate.
     * @return {module:model/ResetLicenseByKeyResponse} The populated <code>ResetLicenseByKeyResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResetLicenseByKeyResponse();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} success
 */
ResetLicenseByKeyResponse.prototype['success'] = undefined;






export default ResetLicenseByKeyResponse;

