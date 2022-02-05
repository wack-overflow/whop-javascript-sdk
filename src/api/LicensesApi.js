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


import ApiClient from "../ApiClient";
import BanLicenseByKeyRequest from '../model/BanLicenseByKeyRequest';
import BanLicenseByKeyResponse from '../model/BanLicenseByKeyResponse';
import ErrorResponse from '../model/ErrorResponse';
import GetLicenseByKeyResponse from '../model/GetLicenseByKeyResponse';
import GetLicensesResponse from '../model/GetLicensesResponse';
import ResetLicenseByKeyRequest from '../model/ResetLicenseByKeyRequest';
import ResetLicenseByKeyResponse from '../model/ResetLicenseByKeyResponse';
import UpdateLicenseByKeyRequest from '../model/UpdateLicenseByKeyRequest';
import UpdateLicenseByKeyResponse from '../model/UpdateLicenseByKeyResponse';
import ValidateLicenseByKeyRequest from '../model/ValidateLicenseByKeyRequest';
import ValidateLicenseByKeyResponse from '../model/ValidateLicenseByKeyResponse';

/**
* Licenses service.
* @module api/LicensesApi
* @version 1.0.10
*/
export default class LicensesApi {

    /**
    * Constructs a new LicensesApi. 
    * @alias module:api/LicensesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Ban License
     * @param {String} key Key of the license you wish to ban.
     * @param {Object} opts Optional parameters
     * @param {module:model/BanLicenseByKeyRequest} opts.banLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BanLicenseByKeyResponse} and HTTP response
     */
    banLicenseByKeyWithHttpInfo(key, opts) {
      opts = opts || {};
      let postBody = opts['banLicenseByKeyRequest'];
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling banLicenseByKey");
      }

      let pathParams = {
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BanLicenseByKeyResponse;
      return this.apiClient.callApi(
        '/v1/licenses/{key}/ban', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Ban License
     * @param {String} key Key of the license you wish to ban.
     * @param {Object} opts Optional parameters
     * @param {module:model/BanLicenseByKeyRequest} opts.banLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BanLicenseByKeyResponse}
     */
    banLicenseByKey(key, opts) {
      return this.banLicenseByKeyWithHttpInfo(key, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch License
     * @param {String} key Key of the license you wish to fetch.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLicenseByKeyResponse} and HTTP response
     */
    getLicenseByKeyWithHttpInfo(key) {
      let postBody = null;
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling getLicenseByKey");
      }

      let pathParams = {
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLicenseByKeyResponse;
      return this.apiClient.callApi(
        '/v1/licenses/{key}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch License
     * @param {String} key Key of the license you wish to fetch.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLicenseByKeyResponse}
     */
    getLicenseByKey(key) {
      return this.getLicenseByKeyWithHttpInfo(key)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch All Licenses
     * @param {Object} opts Optional parameters
     * @param {String} opts.discordAccountId ID of the Discord account for which you want to fetch licenses.
     * @param {Number} opts.page Page number of license data to fetch.
     * @param {String} opts.start Start date of license creation. Date should be in the format YYYY-MM-DD.
     * @param {String} opts.end End date of license creation. Date should be in the format YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetLicensesResponse} and HTTP response
     */
    getLicensesWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'discord_account_id': opts['discordAccountId'],
        'page': opts['page'],
        'start': opts['start'],
        'end': opts['end']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GetLicensesResponse;
      return this.apiClient.callApi(
        '/v1/licenses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch All Licenses
     * @param {Object} opts Optional parameters
     * @param {String} opts.discordAccountId ID of the Discord account for which you want to fetch licenses.
     * @param {Number} opts.page Page number of license data to fetch.
     * @param {String} opts.start Start date of license creation. Date should be in the format YYYY-MM-DD.
     * @param {String} opts.end End date of license creation. Date should be in the format YYYY-MM-DD.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetLicensesResponse}
     */
    getLicenses(opts) {
      return this.getLicensesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Reset License
     * @param {String} key Key of the license you wish to reset.
     * @param {Object} opts Optional parameters
     * @param {module:model/ResetLicenseByKeyRequest} opts.resetLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ResetLicenseByKeyResponse} and HTTP response
     */
    resetLicenseByKeyWithHttpInfo(key, opts) {
      opts = opts || {};
      let postBody = opts['resetLicenseByKeyRequest'];
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling resetLicenseByKey");
      }

      let pathParams = {
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ResetLicenseByKeyResponse;
      return this.apiClient.callApi(
        '/v1/licenses/{key}/reset', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Reset License
     * @param {String} key Key of the license you wish to reset.
     * @param {Object} opts Optional parameters
     * @param {module:model/ResetLicenseByKeyRequest} opts.resetLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ResetLicenseByKeyResponse}
     */
    resetLicenseByKey(key, opts) {
      return this.resetLicenseByKeyWithHttpInfo(key, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update License
     * @param {String} key Key of the license you wish to update.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLicenseByKeyRequest} opts.updateLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UpdateLicenseByKeyResponse} and HTTP response
     */
    updateLicenseByKeyWithHttpInfo(key, opts) {
      opts = opts || {};
      let postBody = opts['updateLicenseByKeyRequest'];
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling updateLicenseByKey");
      }

      let pathParams = {
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UpdateLicenseByKeyResponse;
      return this.apiClient.callApi(
        '/v1/licenses/{key}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update License
     * @param {String} key Key of the license you wish to update.
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateLicenseByKeyRequest} opts.updateLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UpdateLicenseByKeyResponse}
     */
    updateLicenseByKey(key, opts) {
      return this.updateLicenseByKeyWithHttpInfo(key, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validate Key
     * @param {String} key Key of the license you wish to validate.
     * @param {Object} opts Optional parameters
     * @param {module:model/ValidateLicenseByKeyRequest} opts.validateLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ValidateLicenseByKeyResponse} and HTTP response
     */
    validateLicenseByKeyWithHttpInfo(key, opts) {
      opts = opts || {};
      let postBody = opts['validateLicenseByKeyRequest'];
      // verify the required parameter 'key' is set
      if (key === undefined || key === null) {
        throw new Error("Missing the required parameter 'key' when calling validateLicenseByKey");
      }

      let pathParams = {
        'key': key
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ValidateLicenseByKeyResponse;
      return this.apiClient.callApi(
        '/v1/licenses/{key}/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Validate Key
     * @param {String} key Key of the license you wish to validate.
     * @param {Object} opts Optional parameters
     * @param {module:model/ValidateLicenseByKeyRequest} opts.validateLicenseByKeyRequest Details of license key metadata.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ValidateLicenseByKeyResponse}
     */
    validateLicenseByKey(key, opts) {
      return this.validateLicenseByKeyWithHttpInfo(key, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}