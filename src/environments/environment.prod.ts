export const environment = {
    production: true,
    apiUrl: 'https://lareira-api.herokuapp.com',

    tokenWhitelistedDomains: [ new RegExp('lareira-api.herokuapp.com') ],
    tokenBlacklistedRoutes: [ new RegExp('\/oauth\/token') ]
};
