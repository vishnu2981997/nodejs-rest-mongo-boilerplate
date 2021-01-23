module.exports = function ({config, router, controllers, helpers}) {
    const infoApi = router();

    const infoControllers = controllers.infoControllers;

    infoApi.get('/', infoControllers.infoController)

    return infoApi;
}