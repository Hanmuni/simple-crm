export class User {
    firstname: string;
    lastname: string;
    birthday: number;
    address: string;
    houseNumber: number;
    zipCode: number;
    city: string;

    constructor(obj?: any) {
        this.firstname = obj ? obj.firstname : '';
        this.lastname = obj ? obj.lastname : '';
        this.birthday = obj ? obj.birthday : '';
        this.address = obj ? obj.address : '';
        this.houseNumber = obj ? obj.houseNumber : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
    }

    public toJSON() {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            birthday: this.birthday,
            address: this.address,
            houseNumber: this.houseNumber,
            zipCode: this.zipCode,
            city: this.city
        }
    }
}
