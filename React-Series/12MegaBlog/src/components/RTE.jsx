import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = "" }) {
// it is a component , props initialValue,onInit, init,apiKey
    return (
        <div className="w-full">
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
            
            <Controller
                name={name || "Content"}
                control={control}
                // inform if some changes happen
                render={({ field: { onChange } }) => (
                    // the render element
                    <Editor
                        apiKey='h5xqc026uf16nfsdnf9gtk3mly3s34xb9tf7hbd7jyhl1v93'
                        initialValue={defaultValue}
                        init={{
                            initialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "image",
                                "advlist",
                                "autolink",
                                "lists",
                                "link",
                                "image",
                                "charmap",
                                "preview",
                                "anchor",
                                "searchreplace",
                                "visualblocks",
                                "code",
                                "fullscreen",
                                "insertdatetime",
                                "media",
                                "table",
                                "code",
                                "help",
                                "wordcount",
                                "anchor",
                            ],
                            toolbar:
                                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                        }}
                        onEditorChange={onChange}
                    />
                )}
            />
            {/* <input type="submit" /> */}
        </div>

    )
}

