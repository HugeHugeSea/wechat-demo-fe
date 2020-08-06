import {LoggerLevel} from '@s-enums/logger-level.enum';

const _environment = {
  PRODUCTION: false,
  DEBUG_MODE: true,
  LOGGER_LEVEL: LoggerLevel.All,
  REPORT_SEARCH_DATE_RANGER: 30,
  API_URL_MGMT_PORTAL_BFF: 'http://localhost:3000',
  PRE_AUTH: '{"username":"test","authToken":"Basic dGVzdDp0ZXN0","appNames":["CXBOT_ROUTER","OLCI","FLIGHT_SEARCH","WORKSHOP_CHATBOT_FAQ","Flight_Search","Disruption"]}',
  HISTORY_RSA_PRIVATE_KEY: '-----BEGIN PRIVATE KEY-----\nMIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAKoz6X1lbLUWu3p9\n6UUUuZ9k2WxVtTV0qkXxHHzcW0oKzO07mT+JXk30Ft8cVSD1jjRv8QraP8E9zXGU\ntgAcxefrnrdcLBngi4LG987DP2pP2CQoHGQjlvSueKSRJZMaUkSTY91ns+VzvcVr\n5vHc++4q8x1wpa93zT6+335v/uGvAgMBAAECgYArxUnou6qnL39rUvIol9ncyfy4\nRZpicuxPLGCdI7Y+ZmSpJciVdGhSN9Gh8xFZdozpo1gj6Fi5A4HQEeR0RvIF9Rgh\nERblj1rRWqxPcsIddOO9VaknQPICWKqEW9+E1bEcyNUblCHA4LGyQwmuEFUb/Tkj\nxAghIHuEBCe0GFiVwQJBAN5i5QSoOIpdFHA0c981E4VhHc/muXwjx1HfE1pcuuFb\nTy3OwEoZdFp3LIjBnBkPRneLTNjo5WTIwrmfsy6VDF8CQQDD7c6d/nKiJwIESlr+\n/idqXAPNR/iS1YX3Nqtk9jgrgf5zULHr2nbk7MDas5S9Z9XPdUmxtnP44dhoGvDk\nzyyxAkB7XBxyQuZqSkvGGjKUhJq5iC/DXddSd35fegEARSQdUktPu7qK4Cfc7vKz\nQcLXW9PZCFqukDJ/f6YU1fPNSTy9AkADQ78hms/GK+g4shR6EzoM56OYlA5sQ+qL\nh/mrIP8mmm/m8/1C9MzuW5OLEVr1HPnPDyE/OM8N4pV8hpZk+Z7BAkEAzaFstazA\nxLzZOBWhvOzzo722glZ7HVezhMocLu7Y3EOXP/nbx09JpU3U7Egp5UVp0aiknh/Q\nez4Cc4ksMedxdA==\n-----END PRIVATE KEY-----\n',
  IS_SAML_ENABLED: false,
  API_URL_CF_SAML_LOGIN: 'https://cf-saml-chat-d0.osc1.ct3.cathaypacific.com/cf-saml',
  TEMPLATE_LANGUAGES:  '[{"language":"English","detail":[{"label":"en_hk","value":"en_hk"},{"label":"en_jp","value":"en_jp"},{"label":"en_kr","value":"en_kr"},{"label":"en(default)","value":"en"}]},{"language":"Japanese","detail":[{"label":"ja_jp","value":"ja_jp"},{"label":"ja(default)","value":"ja"}]},{"language":"Korean","detail":[{"label":"ko_kr","value":"ko_kr"},{"label":"ko(default)","value":"ko"}]},{"language":"SimplifiedChinese","detail":[{"label":"sc_cn","value":"sc_cn"},{"label":"sc(default)","value":"sc"}]},{"language":"TraditionalChinese","detail":[{"label":"zh_hk","value":"zh_hk"},{"label":"zh(default)","value":"zh"}]}]',
  DEFAULT_LANGUAGE: 'en'
};

export const environment = _environment;
