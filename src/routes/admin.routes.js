const adminController = require('../controllers/admin.controller');
const loginController = require('../controllers/login.controller');

module.exports = app => {
        
    app
        .route('/admin/users/list')
        .get(loginController.requireToken, adminController.list)

    app
        .route('/admin/users/new')
        .post(loginController.requireToken, adminController.add)

    app
        .route('/admin/users/:id')
        .get(loginController.requireToken, adminController.listById)
        .put(loginController.requireToken, adminController.update)
        .delete(loginController.requireToken, adminController.remove)
};