import React from 'react'
import SingleInputForm from '../shared/SingleInputForm'
import { AiOutlinePlus, AiOutlineEdit, AiFillDelete, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';

const ProfileAside = ({data, user, setShowBioForm , showBioForm, setShowInterestForm, showInterestForm, singleEdit, handleDeleteBio, handleDeleteInterest, isInterestLoading }) => {

  const [interest, setInterest] = useState("")

  const submitDeleteBio = (e) => {
    e.preventDefault();
    handleDeleteBio();
  }

  const deleteInterest = (item) => {
    handleDeleteInterest(item)    
  }

  return (
    <div className='lg:w-[340px]'>
        <div className=' mt-5'>
            <span className="text-gray-400">BIO</span> 
            <hr className="border-[1px] mb-1 text-gray-400 w-full" />
            {showBioForm && (
              <SingleInputForm 
                defaultValue={data.bio}
                name="bio"  
                onClose={setShowBioForm} 
                elemType="textarea"
                singleEdit={singleEdit}
              />
            )}
            
            {!data.bio ?
                user?._id === data._id ?
                  (!showBioForm && <button
                    onClick={()=>setShowBioForm(true)} 
                    className='flex flex-row items-center justify-center bg-gray-100 rounded px-2 py-1 text-xs text-gray-500 tracking-wide'
                    style={{fontFamily: "Quicksand"}}
                  > <AiOutlinePlus className="mr-1 " />Add Bio
                  </button>)
                  : null
              : null
            }

            {data.bio && (
              <p className="text-sm text-gray-600 tracking-wider py-3 italic text-center lg:text-justify">
                  {data.bio}
              </p>
            )}
            {data.bio && 
            user?._id === data._id ? 
            (
              <div className='flex'>
                <button
                    onClick={()=>setShowBioForm(true)} 
                    className='flex flex-row items-center justify-center bg-gray-100 rounded-full p-1 text-gray-400 mr-2'
                    style={{fontFamily: "Quicksand"}}
                    > <AiOutlineEdit />
                </button>
                <form onSubmit={submitDeleteBio}>
                  <button
                      type='submit' 
                      className='flex flex-row items-center justify-center bg-gray-100 rounded-full p-1 text-gray-400'
                      style={{fontFamily: "Quicksand"}}
                      > <AiFillDelete />
                  </button>
                </form>
              </div>
            ) : null}
        </div>
        <div className=' mt-5'>
            <span className="text-gray-400">INTERESTS</span> <hr className="border-[1px] text-gray-400 w-full" />
            <div className="py-3 my-5 mx-auto md:my-0 flex flex-col justify-between" style={{fontFamily: "Quicksand"}}>
              {showInterestForm && (
                <SingleInputForm 
                  name="interest"  
                  onClose={setShowInterestForm} 
                  singleEdit={singleEdit}
                />
              )}

              {data.interest && data.interest.map((item, index)=> (
                <div className="flex" key={index}>
                  <h4 className="text-sm mx-auto md:mx-0 font-semibold text-gray-600 mb-1"> {item} </h4>
                  {isInterestLoading && <p className='animate-pules'>Removing...</p>}
                  {user?._id === data._id && (
                    <button
                        onClick={()=>deleteInterest(item)}
                        className='flex flex-row items-center justify-center bg-gray-100 rounded-full p-1 text-gray-400 ml-5 text-sm'
                    ><AiOutlineClose />
                    </button>
                  )}
                </div>
              ))}

              <div>
                {/* This code needs refactoring */}
                {!data.interest || data.interest.length === 0 ? 
                  user?._id === data._id ? 
                    (<button 
                      onClick={()=>setShowInterestForm(true)}
                      className='flex flex-row items-center justify-center bg-gray-100 rounded px-2 py-1 text-xs text-gray-500 tracking-wide'
                    ><AiOutlinePlus className="mr-1 " /> Add interest
                    </button>)
                    : null
                  : data.interest.length !== 0 && data.interest.length < 3 ?
                    user?._id === data._id ? 
                      (<button 
                        onClick={()=>setShowInterestForm(true)}
                        className='flex flex-row items-center justify-center bg-gray-100 rounded px-1 py-1 text-xs text-gray-500 tracking-wide'
                      ><AiOutlinePlus className="mr-1" /> more
                      </button>)
                    : null
                :null
                }
                {/* above code needs refactoring */}
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileAside