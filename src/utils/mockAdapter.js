/**
 * Adaptor for axios
 */

import AxiosMockAdapter from 'axios-mock-adapter';
import axios from './axios';

const services = new AxiosMockAdapter(axios, { delayResponse: 500 });
export default services;
