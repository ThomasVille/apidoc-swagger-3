/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

/**
 * @api {get} /user/:id/avatar Request User avatar
 * @apiName GetUserAvatar
 * @apiGroup User
 *
 * @apiParam id Users unique ID. Default type should be String.
 *
 * @apiSuccess avatar Avatar of the User. Default type should be String.
 */

/**
 * @api {put} /user/:id Update User information
 * @apiName UpdateUser
 * @apiGroup User
 *
 * @apiParam id Users unique ID. Default type should be String.
 * 
 * @apiParam {Object} [credentials] User credentials.
 * @apiParam {String} [credentials.username] User's username.
 * @apiParam {String} [credentials.password] User's password.
 *
 * @apiSuccess {Boolean} success True when the update is successful.
 */
