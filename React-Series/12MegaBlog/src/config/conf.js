const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default conf


/*
Never access import.meta.env.VITE_... directly in your components 
or services — always go through conf.js for cleaner and safer code. 
Direct access to import.meta.env makes your code messy, harder to maintain,
and more error-prone.
*/