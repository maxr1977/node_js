export var UserManagement;
(function (UserManagement) {
    let Admin;
    (function (Admin) {
        class AdminUser {
            username;
            email;
            isSuperAdmin;
            constructor(username, email, isSuperAdmin = false) {
                this.username = username;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }
            promoteToSuperAdmin() {
                this.isSuperAdmin = true;
            }
            revokeSuperAdmin() {
                this.isSuperAdmin = false;
            }
        }
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (UserManagement = {}));
//# sourceMappingURL=userManagement.js.map