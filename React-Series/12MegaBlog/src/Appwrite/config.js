import conf from '../config/conf'

import {Client,ID,Databases,Storage,Query} from 'appwrite'

export class Service{
    client=new Client()
    datbases;
    storage;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId); 
        this.datbases=new Databases(this.client);
        this.storage=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.datbases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log(`Appwrite Service :: createPost :: error ${error}`);
            
        }
    }

    async updatePost(slug,{title,content,feturedImage,status}){
        try {
            return await this.datbases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    feturedImage,
                    status
                }
            )
        } catch (error) {
            console.log(`Appwrite Service :: updatePost :: error ${error}`);
        }
    }

    async deletePost(slug){
        try {
            return await this.datbases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(`Appwrite Service :: deletePost :: error ${error}`);
            return false;
        }
    }
    
    async getPost(slug){
        try {
            return await this.datbases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log(`Appwrite Service :: getPost :: error ${error}`);
            return false
        }
    }

    async getAllPost(queries=[Query.equal("status","active")]){
        try {
            return await this.datbases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                // [
                //     Query.equal("")
                // ]
                queries
            )
        } catch (error) {
            console.log(`Appwrite Service :: getAllPost :: error ${error}`);
            return false;
        }
    }

    // File Upload service
    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(`Appwrite Service :: uploadFile :: error ${error}`);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log(`Appwrite Service :: deleteFile :: error ${error}`);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId
        ).href;
    }
    
}

const service =new Service()
export default service
