class User {
    constructor() {
        this.user = null;
        this.is_superuser = false;
        this.getUser();
    }

    getUser() {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user !== null) {
            this.is_superuser = this.user.is_superuser;
        }
        return this.user;
    }
    user_full_name() {
        if (this.user !== null) {
            return `${this.user.first_name} ${this.user.last_name}`;
        }
        return '';
    }

    user_role() {
        if (this.user !== null) {
            return this.is_superuser ? 'Super Admin' : this.user.role !== null ? `${this.user.role.title}` : '';
        }
        return '';
    }
}

export default new User();
