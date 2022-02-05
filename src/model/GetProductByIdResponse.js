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
import Product from './Product';

/**
 * The GetProductByIdResponse model module.
 * @module model/GetProductByIdResponse
 * @version 1.0.10
 */
class GetProductByIdResponse {
    /**
     * Constructs a new <code>GetProductByIdResponse</code>.
     * @alias module:model/GetProductByIdResponse
     * @implements module:model/Product
     */
    constructor() { 
        Product.initialize(this);
        GetProductByIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProductByIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProductByIdResponse} obj Optional instance to populate.
     * @return {module:model/GetProductByIdResponse} The populated <code>GetProductByIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProductByIdResponse();
            Product.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('license_type')) {
                obj['license_type'] = ApiClient.convertToType(data['license_type'], 'String');
            }
            if (data.hasOwnProperty('initial_price')) {
                obj['initial_price'] = ApiClient.convertToType(data['initial_price'], 'Number');
            }
            if (data.hasOwnProperty('recurring_price')) {
                obj['recurring_price'] = ApiClient.convertToType(data['recurring_price'], 'Number');
            }
            if (data.hasOwnProperty('billing_period')) {
                obj['billing_period'] = ApiClient.convertToType(data['billing_period'], 'Number');
            }
            if (data.hasOwnProperty('discord_role')) {
                obj['discord_role'] = ApiClient.convertToType(data['discord_role'], 'String');
            }
            if (data.hasOwnProperty('stock')) {
                obj['stock'] = ApiClient.convertToType(data['stock'], 'Number');
            }
            if (data.hasOwnProperty('test')) {
                obj['test'] = ApiClient.convertToType(data['test'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetProductByIdResponse.prototype['id'] = undefined;

/**
 * @member {String} title
 */
GetProductByIdResponse.prototype['title'] = undefined;

/**
 * @member {module:model/GetProductByIdResponse.LicenseTypeEnum} license_type
 */
GetProductByIdResponse.prototype['license_type'] = undefined;

/**
 * @member {Number} initial_price
 */
GetProductByIdResponse.prototype['initial_price'] = undefined;

/**
 * @member {Number} recurring_price
 */
GetProductByIdResponse.prototype['recurring_price'] = undefined;

/**
 * @member {Number} billing_period
 */
GetProductByIdResponse.prototype['billing_period'] = undefined;

/**
 * @member {String} discord_role
 */
GetProductByIdResponse.prototype['discord_role'] = undefined;

/**
 * @member {Number} stock
 */
GetProductByIdResponse.prototype['stock'] = undefined;

/**
 * @member {Boolean} test
 */
GetProductByIdResponse.prototype['test'] = undefined;


// Implement Product interface:
/**
 * @member {Number} id
 */
Product.prototype['id'] = undefined;
/**
 * @member {String} title
 */
Product.prototype['title'] = undefined;
/**
 * @member {module:model/Product.LicenseTypeEnum} license_type
 */
Product.prototype['license_type'] = undefined;
/**
 * @member {Number} initial_price
 */
Product.prototype['initial_price'] = undefined;
/**
 * @member {Number} recurring_price
 */
Product.prototype['recurring_price'] = undefined;
/**
 * @member {Number} billing_period
 */
Product.prototype['billing_period'] = undefined;
/**
 * @member {String} discord_role
 */
Product.prototype['discord_role'] = undefined;
/**
 * @member {Number} stock
 */
Product.prototype['stock'] = undefined;
/**
 * @member {Boolean} test
 */
Product.prototype['test'] = undefined;



/**
 * Allowed values for the <code>license_type</code> property.
 * @enum {String}
 * @readonly
 */
GetProductByIdResponse['LicenseTypeEnum'] = {

    /**
     * value: "one_time"
     * @const
     */
    "one_time": "one_time",

    /**
     * value: "renewal"
     * @const
     */
    "renewal": "renewal"
};



export default GetProductByIdResponse;
