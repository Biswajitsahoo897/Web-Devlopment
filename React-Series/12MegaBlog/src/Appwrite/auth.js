import conf from '../config/conf'
import { Client, Account ,ID} from "appwrite";

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId); 
        this.account=new Account(this.client);
    }
    async createAccount({email, password, name}) {
    try {
        const userAccount = await this.account.create(ID.unique(), email, password, name);
        if (userAccount) {
            // If account creation is successful, immediately log the user in
            return this.login({email, password});
        } else {
            return userAccount;
        }
    } catch (error) {
        console.log(`Create Account Error: ${error}`);
        throw error;
    }
}

    async login({email,password}) {
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log(`Login Error :${error}`);
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            const user= await this.account.get()
            return user
            // this is for the gettting current account details
        } catch (error) {
            console.log(`Appwrite Service:: getCurrentUser :: error ${error}`);
            return null;
        }
    }

    async logout(){
        try {
            await this.account.deleteSessions();

        } catch (error) {
            console.log(`Appwrite Service ::Logout:: error ${error}`);
        }
    }
}

const authService=new AuthService();

export default authService
