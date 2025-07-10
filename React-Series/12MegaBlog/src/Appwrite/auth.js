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
    async createAccount({email,password,name}){
        try {
            const userAccount=await this.account.create(ID.unique(),email,password,name);
            if(userAccount){
                //call another method
                return userAccount;
            } 
            else{
                //call another method or do something else
            }
        } catch (error) {
            console.log(`Create Account Error:${error}`);
            throw error
        }
    }

    async login({email,password}) {
        try {
            await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            console.log(`Login Error :${error}`);
            
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
            // this is for the gettting current account details
        } catch (error) {
            console.log(`Appwrite Service:: getCurrentUser :: error ${error}`);
                
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSession();

        } catch (error) {
            console.log(`Appwrite Service ::Logout:: error ${error}`);
        }
    }
}

const authService=new AuthService();

export default authService
