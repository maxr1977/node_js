export namespace UserManagement {
    export namespace Admin {
        export class AdminUser {
            constructor(public username: string, public email: string, public isSuperAdmin: boolean = false) {}

            promoteToSuperAdmin() {
                this.isSuperAdmin = true;
            }

            revokeSuperAdmin() {
                this.isSuperAdmin = false;
            }
        }
    }
}