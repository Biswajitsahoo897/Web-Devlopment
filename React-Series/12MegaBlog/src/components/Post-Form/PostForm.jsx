import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index.js'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import service  from '../../Appwrite/config.js'


function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)
    // used to read the data coming from the form 

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await service.uploadFile(data.image[0]) : null
            if (file) {
                service.deleteFile(post.featuredImage)
            }
            const dbPost = await service.updatePost(post.$id,
                {
                    ...data,
                    featuredImage: file ? file.$id : undefined,
                })
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`)
            }
        }else{
            const file=await service.uploadFile(data.image[0]);
            if(file){
                const fileId=file.$id
                data.featuredImage=fileId
                const dbPost=await service.createPost({
                    ...data,
                    userId:userData.$id
                })
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }
    // useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
    const slugTransform=useCallback((value)=>{
        if(value && typeof value==='string'){
        return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g,'-')
            .replace(/\s/g,'-')
        }
        return ''
    },[])


    // Most Important 
    useEffect(()=>{
        const subscription=watch((value,{name})=>{
            if(name==='title'){
                setValue('slug',slugTransform(value.title,{shouldValidate:true}))
            }
        })
        // whenever somethings changes(dependencies like watch..) 
        // it re-runs before that it clean-up the old subscription using subscription.unsubscribe()
        //Prevents Memory Leak 
        return ()=>{
            subscription.unsubscribe()
        }
    },[watch,slugTransform,setValue])


    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm
