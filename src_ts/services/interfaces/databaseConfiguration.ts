export default interface IDB2Configuration {

    readonly database: string;

    readonly hostname: string;

    readonly port: number;

    readonly protocol: string;

    readonly uid: string;

    readonly password: string;

    readonly poolInitialSize: number;

    readonly poolMaxSize: number;

    cn(): string;
}