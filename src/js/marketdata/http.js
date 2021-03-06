/* ***************************************************************************
 *
 * Copyright (c) 2021, the iexjs authors.
 *
 * This file is part of the iexjs library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */

import { _getJson, _raiseIfNotStr, _strOrDate, _strToList } from "../common";
import { Client } from "../client";

/**
 * TOPS provides IEX’s aggregated best quoted bid and offer position in near real time for all securities on IEX’s displayed limit order book.
 * TOPS is ideal for developers needing both quote and trade data.
 * https://iexcloud.io/docs/api/#tops
 * @param {string} symbols
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const tops = (symbols, token, version, filter) => {
  if (symbols) {
    return _getJson(
      {
        url: `tops?symbols=${_strToList(symbols).join(",")}%2b`,
      },
      token,
      version,
    );
  }
  return _getJson(
    {
      url: `tops`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.tops = function (symbols, filter) {
  return tops(symbols, this._token, this._version, filter);
};

/**
 * Last provides trade data for executions on IEX. It is a near real time, intraday API that provides IEX last sale price, size and time.
 * Last is ideal for developers that need a lightweight stock quote.
 * https://iexcloud.io/docs/api/#last
 * @param {string} symbols
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const last = (symbols, token, version, filter) => {
  if (symbols) {
    return _getJson(
      {
        url: `last?symbols=${_strToList(symbols).join(",")}%2b`,
      },
      token,
      version,
    );
  }
  return _getJson(
    {
      url: `last`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.last = function (symbols, filter) {
  return last(symbols, this._token, this._version, filter);
};

/**
 * DEEP is used to receive real-time depth of book quotations direct from IEX.
 * The depth of book quotations received via DEEP provide an aggregated size of resting displayed orders at a price and side,
 * and do not indicate the size or number of individual orders at any price level.
 * Non-displayed orders and non-displayed portions of reserve orders are not represented in DEEP.
 *
 * DEEP also provides last trade price and size information. Trades resulting from either displayed or non-displayed orders matching on IEX will be reported. Routed executions will not be reported.
 *
 * https://iexcloud.io/docs/api/#deep
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const deep = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep?symbols=${symbol}`,
      },
      token,
      version,
    );
  }
  return _getJson(
    {
      url: `deep`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.deep = function (symbol, filter) {
  return deep(symbol, this._token, this._version, filter);
};

/**
 * DEEP broadcasts an Auction Information Message every one second between the Lock-in Time and the auction match for Opening and Closing Auctions,
 * and during the Display Only Period for IPO, Halt, and Volatility Auctions. Only IEX listed securities are eligible for IEX Auctions.
 * https://iexcloud.io/docs/api/#deep-auction
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const auction = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep/auction?symbols=${symbol}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `deep/auction`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.auction = function (symbol, filter) {
  return auction(symbol, this._token, this._version, filter);
};

/**
 * Book shows IEX’s bids and asks for given symbols.
 * https://iexcloud.io/docs/api/#deep-book
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const book = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep/book?symbols=${symbol}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `deep/book`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.book = function (symbol, filter) {
  return book(symbol, this._token, this._version, filter);
};

/**
 * The Exchange may suspend trading of one or more securities on IEX for operational reasons and indicates such operational halt using the Operational halt status message.
 *
 * IEX disseminates a full pre-market spin of Operational halt status messages indicating the operational halt status of all securities.
 * In the spin, IEX will send out an Operational Halt Message with “N” (Not operationally halted on IEX) for all securities that are eligible for trading at the start of the Pre-Market Session.
 * If a security is absent from the dissemination, firms should assume that the security is being treated as operationally halted in the IEX Trading System at the start of the Pre-Market Session.
 *
 * After the pre-market spin, IEX will use the Operational halt status message to relay changes in operational halt status for an individual security.
 *
 * https://iexcloud.io/docs/api/#deep-operational-halt-status
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const opHaltStatus = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep/op-halt-status?symbols=${symbol}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `deep/op-halt-status`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.opHaltStatus = function (symbol, filter) {
  return opHaltStatus(symbol, this._token, this._version, filter);
};

/**
 * The Official Price message is used to disseminate the IEX Official Opening and Closing Prices.
 *
 * These messages will be provided only for IEX Listed Securities.
 *
 * https://iexcloud.io/docs/api/#deep-official-price
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const officialPrice = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep/official-price?symbols=${symbol}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `deep/official-price`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.officialPrice = function (symbol, filter) {
  return officialPrice(symbol, this._token, this._version, filter);
};

/**
 * The Security event message is used to indicate events that apply to a security. A Security event message will be sent whenever such event occurs
 * https://iexcloud.io/docs/api/#deep-security-event
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const securityEvent = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep/security-event?symbols=${symbol}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `deep/security-event`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.securityEvent = function (symbol, filter) {
  return securityEvent(symbol, this._token, this._version, filter);
};

/**
 * In association with Rule 201 of Regulation SHO, the Short Sale Price Test Message is used to indicate when a short sale price test restriction is in effect for a security.
 *
 * IEX disseminates a full pre-market spin of Short sale price test status messages indicating the Rule 201 status of all securities.
 * After the pre-market spin, IEX will use the Short sale price test status message in the event of an intraday status change.
 *
 * The IEX Trading System will process orders based on the latest short sale price test restriction status.
 *
 * https://iexcloud.io/docs/api/#deep-short-sale-price-test-status
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const ssrStatus = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep/ssr-status?symbols=${symbol}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `deep/ssr-status`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.ssrStatus = function (symbol, filter) {
  return ssrStatus(symbol, this._token, this._version, filter);
};

/**
 * The System event message is used to indicate events that apply to the market or the data feed.
 *
 * There will be a single message disseminated per channel for each System Event type within a given trading session.
 *
 * https://iexcloud.io/docs/api/#deep-system-event
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const systemEvent = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep/system-event?symbols=${symbol}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `deep/system-event`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.systemEvent = function (symbol, filter) {
  return systemEvent(symbol, this._token, this._version, filter);
};

/**
 * Trade report messages are sent when an order on the IEX Order Book is executed in whole or in part. DEEP sends a Trade report message for every individual fill.
 * https://iexcloud.io/docs/api/#deep-trades
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const trades = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep/trades?symbols=${symbol}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `deep/trades`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.trades = function (symbol, filter) {
  return trades(symbol, this._token, this._version, filter);
};

/**
 * Trade break messages are sent when an execution on IEX is broken on that same trading day. Trade breaks are rare and only affect applications that rely upon IEX execution based data.
 * https://iexcloud.io/docs/api/#deep-trade-break
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const tradeBreak = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep/trade-breaks?symbols=${symbol}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `deep/trade-breaks`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.tradeBreak = function (symbol, filter) {
  return tradeBreak(symbol, this._token, this._version, filter);
};

/**
 * The Trading status message is used to indicate the current trading status of a security.
 * For IEX-listed securities, IEX acts as the primary market and has the authority to institute a trading halt or trading pause in a security due to news dissemination or regulatory reasons.
 * For non-IEX-listed securities, IEX abides by any regulatory trading halts and trading pauses instituted by the primary or listing market, as applicable.
 *
 * IEX disseminates a full pre-market spin of Trading status messages indicating the trading status of all securities.
 * In the spin, IEX will send out a Trading status message with “T” (Trading) for all securities that are eligible for trading at the start of the Pre-Market Session.
 * If a security is absent from the dissemination, firms should assume that the security is being treated as operationally halted in the IEX Trading System.
 *
 *
 * After the pre-market spin, IEX will use the Trading status message to relay changes in trading status for an individual security. Messages will be sent when a security is:
 *
 * Halted
 * Paused*
 * Released into an Order Acceptance Period*
 * Released for trading
 * *The paused and released into an Order Acceptance Period status will be disseminated for IEX-listed securities only. Trading pauses on non-IEX-listed securities will be treated simply as a halt.
 * https://iexcloud.io/docs/api/#deep-trading-status
 * @param {string} symbol
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const tradingStatus = (symbol, token, version, filter) => {
  _raiseIfNotStr(symbol);
  if (symbol) {
    return _getJson(
      {
        url: `deep/trading-status?symbols=${symbol}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `deep/trading-status`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.tradingStatus = function (symbol, filter) {
  return tradingStatus(symbol, this._token, this._version, filter);
};

/**
 * @param {string} date
 * @param {string} token
 * @param {string} version
 * @param {string} filter
 */
export const hist = (date, token, version, filter) => {
  if (date) {
    return _getJson(
      {
        url: `hist?date=${_strOrDate(date)}`,
      },
      token,
      version,
      filter,
    );
  }
  return _getJson(
    {
      url: `hist`,
    },
    token,
    version,
    filter,
  );
};

Client.prototype.hist = function (date, filter) {
  return hist(date, this._token, this._version, filter);
};
