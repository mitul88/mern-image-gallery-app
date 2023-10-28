import React from 'react'
import { useState } from 'react';
import ImageUploader from './ImageUploader';

const UploadImageForm = ({ categoryData, submitFn, isUploadLoading, isUploadError, uploadError, method, imageData}) => {

    const [title, setTitle] = useState(imageData ? imageData.image.title : "");
    const [description, setDescription] = useState(imageData ? imageData.image.desc : "");
    const [category, setCategory] = useState(imageData ? imageData.image.category._id : "");
    const [selectedFile, setSelectedFile] = useState(null);

    const [inputError, setInputError] = useState(false);

    const submitForm = e => {
      e.preventDefault()
      if (title === "" || category === "" || description === "" ) {
        if(method === "create") {
          if(selectedFile === null) {
            setInputError(true);
            return
          }
        }
        setInputError(true);
        return
      }
      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", description);
      formData.append("category", category);
      if(method === "create") {
        formData.append("image", selectedFile);
      }
      
      submitFn(formData)
    };

  return (
    <div className='m-5 p-5 w-96 shadow-md shadow-gray-200' style={{fontFamily: "Quicksand"}}>
      <h2 className="text-xl font-bold text-center">{method === "create" ? "Upload" : "Edit"} your image</h2>
      {isUploadLoading && (<p className='bg-green-200 mb-3 rounded text-center px-5'><span className='animate-pulsetacking-wider font-bold text-green-600 mb-3'>Photo Uploading ....</span></p>)}
      {isUploadError && (<p className='text-red-400 text-sm bg-red-100 px-3 py-1 rounded mb-3'>{uploadError?.info.message}</p>)}
      {inputError && (<p className='text-red-400 text-sm bg-red-100 px-3 py-1 rounded mb-3'>Fill up all fields</p>)}
      <form onSubmit={submitForm}>
        <div className='flex flex-col'>
          <label htmlFor="image-title">Title</label>
          <input
            className='border border-gray-300 rounded-md px-3 py-1 w-full mb-3' 
            type="text" 
            id="image-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
            <label htmlFor="image-category">Select Category</label>
            <select
              value={category}
              onChange={(e)=>setCategory(e.target.value)} 
              className='border border-gray-300 rounded-md px-3 py-2 w-full mb-3 bg-white' 
              name="category" 
              id="image-category"
            >
                <option value="">Select Category</option>
                {categoryData.map(category => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
            </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="image-desc">Description</label>
          <textarea
            className='border border-gray-300 rounded-md px-3 py-1 w-full mb-3'  
            type="text" 
            id="image-desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}  
          ></textarea>
        </div>
        {method === "create" && (
          <ImageUploader onFileSelect={(file)=> setSelectedFile(file)} />
        )}
        <button type='submit' className='bg-orange-500 text-white rounded-md px-3 py-1'>{method === "create" ? "Add Photo" : "Edit Photo"}</button>
      </form>
    </div>
  )
}

export default UploadImageForm