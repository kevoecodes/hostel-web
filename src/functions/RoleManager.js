import { PERMISSIONS } from './pemissions';
import user from './User';

class RoleManager {
    static PERMISSIONS = PERMISSIONS;
    constructor() {
        this.user = null;
        this.is_superuser = false;
        this.getUser();
    }

    getUser() {
        this.user = user.getUser();
        if (this.user !== null) {
            this.is_superuser = this.user.is_superuser;
        }
    }

    has_permission(permission) {
        if (this.is_superuser) return true;
        // console.log(permission, this.user.role.permissions);
        // console.log(this.user.role.permissions.includes(permission));
        if (this.user !== null) {
            return this.user.role.permissions.includes(permission);
        }
        return false;
    }
    user_full_name() {
        if (this.user !== null) {
            return `${this.user.first_name} ${this.user.last_name}`;
        }
    }
}

export default new RoleManager();
