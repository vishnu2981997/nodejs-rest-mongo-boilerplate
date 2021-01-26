module.exports = function ({config, router, controllers, helpers}) {
    const authApi = router();

    const authControllers = controllers.authControllers;

    authApi.post('/register', authControllers.registerController);

    authApi.post('/login', authControllers.loginController);

    return authApi;
}