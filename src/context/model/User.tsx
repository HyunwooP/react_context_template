export class User {
    expireAt: string;
    email: string;
    userName: string;
    userPhone: string;
    userAddress: string;

    constructor(expireAt: string, email: string, userName: string, userPhone: string, userAddress: string) {
        this.expireAt = expireAt;
        this.email = email;
        this.userName = userName;
        this.userPhone = userPhone;
        this.userAddress = userAddress;
    }

    static createDefault(expireAt: string, email: string, userName: string, userPhone: string, userAddress: string): User {
        return new User(expireAt, email, userName, userPhone, userAddress);
    }
}