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
 * The CreateLinkRequest model module.
 * @module model/CreateLinkRequest
 * @version 1.0.10
 */
class CreateLinkRequest {
    /**
     * Constructs a new <code>CreateLinkRequest</code>.
     * @alias module:model/CreateLinkRequest
     */
    constructor() { 
        
        CreateLinkRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateLinkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLinkRequest} obj Optional instance to populate.
     * @return {module:model/CreateLinkRequest} The populated <code>CreateLinkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLinkRequest();

            if (data.hasOwnProperty('product_id')) {
                obj['product_id'] = ApiClient.convertToType(data['product_id'], 'Number');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('stock')) {
                obj['stock'] = ApiClient.convertToType(data['stock'], 'Number');
            }
            if (data.hasOwnProperty('discord_ids')) {
                obj['discord_ids'] = ApiClient.convertToType(data['discord_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * Product ID to associate this link with.
 * @member {Number} product_id
 */
CreateLinkRequest.prototype['product_id'] = undefined;

/**
 * Password to protect the link with.
 * @member {String} password
 */
CreateLinkRequest.prototype['password'] = undefined;

/**
 * Amount of stock to make available via. the link.
 * @member {Number} stock
 */
CreateLinkRequest.prototype['stock'] = undefined;

/**
 * Array of discord acconut IDs.
 * @member {Array.<String>} discord_ids
 */
CreateLinkRequest.prototype['discord_ids'] = undefined;






export default CreateLinkRequest;

