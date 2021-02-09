/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the jupyterlab_templates library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson } from "../common";
import { Client } from "../client";

/**
 * This call returns an array of symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#sectors
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const symbols = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/symbols`,
    token,
    version,
    filter,
  });

Client.prototype.symbols = function (filter) {
  return symbols(this._token, this._version, filter);
};

/**
 * This call returns an array of symbols the Investors Exchange supports for trading.
 *
 * https://iexcloud.io/docs/api/#iex-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const iexSymbols = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/iex/symbols`,
    token,
    version,
    filter,
  });

Client.prototype.iexSymbols = function (filter) {
  return iexSymbols(this._token, this._version, filter);
};

/**
 * This call returns an array of mutual fund symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#mutual-fund-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const mutualFundSymbols = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/mutual-funds/symbols`,
    token,
    version,
    filter,
  });

Client.prototype.mutualFundSymbols = function (filter) {
  return mutualFundSymbols(this._token, this._version, filter);
};

/**
 * This call returns an array of OTC symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#otc-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const otcSymbols = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/otc/symbols`,
    token,
    version,
    filter,
  });

Client.prototype.otcSymbols = function (filter) {
  return otcSymbols(this._token, this._version, filter);
};

/**
 * This call returns an array of international symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#international-symbols
 *
 * @param {string} region 2 letter case insensitive string of country codes using ISO 3166-1 alpha-2
 * @param {string} exchange Case insensitive string of Exchange using IEX Supported Exchanges list
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const internationalSymbols = (
  region,
  exchange,
  token = "",
  version = "",
  filter = "",
) => {
  if (region) {
    return _getJson({
      url: `ref-data/region/${region}/symbols`,
      token,
      version,
      filter,
    });
  }
  if (exchange) {
    return _getJson({
      url: `ref-data/exchange/${exchange}/symbols`,
      token,
      version,
      filter,
    });
  }
  return _getJson({
    url: `ref-data/region/us/symbols`,
    token,
    version,
    filter,
  });
};

Client.prototype.internationalSymbols = function (region, exchange, filter) {
  return internationalSymbols(
    region,
    exchange,
    this._token,
    this._version,
    filter,
  );
};

/**
 * This call returns a list of supported currencies and currency pairs.
 *
 * https://iexcloud.io/docs/api/#fx-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const fxSymbols = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/fx/symbols`,
    token,
    version,
    filter,
  });

Client.prototype.fxSymbols = function (filter) {
  return fxSymbols(this._token, this._version, filter);
};

/**
 * This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates.
 *
 * https://iexcloud.io/docs/api/#options-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const optionsSymbols = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/options/symbols`,
    token,
    version,
    filter,
  });

Client.prototype.optionsSymbols = function (filter) {
  return optionsSymbols(this._token, this._version, filter);
};

/**
 * This provides a full list of supported cryptocurrencies by IEX Cloud.
 *
 * https://iexcloud.io/docs/api/#cryptocurrency-symbols
 *
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const cryptoSymbols = (token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/crypto/symbols`,
    token,
    version,
    filter,
  });

Client.prototype.cryptoSymbols = function (filter) {
  return cryptoSymbols(this._token, this._version, filter);
};

const convertToList = async (res) => (await res).map((record) => record.symbol);

export const symbolsList = (token, version) =>
  convertToList(symbols(token, version, "symbol"));

Client.prototype.symbolsList = function () {
  return convertToList(symbols(this._token, this._version, "symbol"));
};

export const iexSymbolsList = (token, version) =>
  convertToList(iexSymbols(token, version, "symbol"));

Client.prototype.iexSymbolsList = function () {
  return convertToList(iexSymbols(this._token, this._version, "symbol"));
};

export const mutualFundSymbolsList = (token, version) =>
  convertToList(mutualFundSymbols(token, version, "symbol"));

Client.prototype.mutualFundSymbolsList = function () {
  return convertToList(mutualFundSymbols(this._token, this._version, "symbol"));
};

export const otcSymbolsList = (token, version) =>
  convertToList(otcSymbols(token, version, "symbol"));

Client.prototype.otcSymbolsList = function () {
  return convertToList(otcSymbols(this._token, this._version, "symbol"));
};

export const internationalSymbolsList = (region, exchange, token, version) =>
  convertToList(
    internationalSymbols(region, exchange, token, version, "symbol"),
  );

Client.prototype.internationalSymbolsList = function (region, exchange) {
  return convertToList(
    internationalSymbols(
      region,
      exchange,
      this._token,
      this._version,
      "symbol",
    ),
  );
};

export const fxSymbolsList = async (token, version) => {
  const fx = await fxSymbols(token, version);
  const ret = [[], []];
  fx.currencies.forEach((record) => {
    ret[0].push(record.code);
  });
  fx.pairs.forEach((record) => {
    ret[1].push(record.fromCurrency + record.toCurrency);
  });
  return ret;
};

Client.prototype.fxSymbolsList = function () {
  return fxSymbolsList(this._token, this._version);
};

export const optionsSymbolsList = (token, version) =>
  convertToList(optionsSymbols(token, version, "symbol"));

Client.prototype.optionsSymbolsList = function () {
  return convertToList(optionsSymbols(this._token, this._version, "symbol"));
};

export const cryptoSymbolsList = (token, version) =>
  convertToList(cryptoSymbols(token, version, "symbol"));

Client.prototype.cryptoSymbolsList = function () {
  return convertToList(cryptoSymbols(this._token, this._version, "symbol"));
};

/**
 * This call returns an array of symbols that IEX Cloud supports for API calls.
 *
 * https://iexcloud.io/docs/api/#isin-mapping
 *
 * @param {string} isin isin
 * @param {string} token Access token
 * @param {string} version API version
 * @param {string} filter https://iexcloud.io/docs/api/#filter-results
 */
export const isinLookup = (isin, token = "", version = "", filter = "") =>
  _getJson({
    url: `ref-data/isin?isin=${isin}`,
    token,
    version,
    filter,
  });

Client.prototype.isinLookup = function (isin, filter) {
  return isinLookup(isin, this._token, this._version, filter);
};
