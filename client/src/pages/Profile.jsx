import { Outlet, useLoaderData, useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import ProfilePhoto from '../components/profile/ProfilePhoto';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTab from '../components/profile/ProfileTab';
import ProfileAside from '../components/profile/ProfileAside';
import { useMutation, useQuery } from '@tanstack/react-query';
import { bioChange, deleteBio, deleteInterest, editSingleInput, fetchCategories, fetchUser, postImage, postProfilePhoto, queryClient } from '../utils/http';
import _ from 'lodash';

import { BiArrowBack } from "react-icons/bi";

import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import UploadImageForm from '../components/shared/UploadImageForm';
import Modal from '../ui/Modal';

const ProfilePage = () => {
  const params = useParams('userId');
  const token = useRouteLoaderData('root');
  const navigate = useNavigate();

  const [profilePhotoUploadModal, setProfilePhotoUploadModal] = useState(false);
  const [uploadImageModal, setUploadImageModal] = useState(false);
  const [showProfessionForm, setShowProfessionForm] = useState(false);
  const [showBioForm, setShowBioForm] = useState(false);
  const [showInterestForm, setShowInterestForm] = useState(false);

  let decoded;
  if (token){
    if(token !== "EXPIRED") {
      decoded = jwtDecode(token)
    }
  };

  const goBack = () => {
    navigate(-1);
  }

  const {data: categoryData, isError: isCategoryError, error: categoryError} = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories()
  })

  const {data, isError, error} = useQuery({
    queryKey: ['user', params.userId],
    queryFn: ({signal}) => fetchUser({signal, id: params.userId})
  })

  const {mutate: uploadImageMutate, isLoading: isUploadLoading, isError: isUploadError, error: uploadError } = useMutation({
    mutationFn: postImage,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['images']});
      setUploadImageModal(false);
    }
  });

  
  const handleUploadImage = (formData) => {
    uploadImageMutate({formData, token})
  }

  const {mutate: mutateProfilePhoto, isLoading: isProfilePhotoPending, isError: isProfilePhotoError, error: profilePhotoError } = useMutation({
    mutationFn: postProfilePhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']});
      setProfilePhotoUploadModal(false);
    }
  });

  
  const uploadProfilePhoto = (formData) => {
    const userId = params.userId
    mutateProfilePhoto({formData, userId, token});
  }

  const {mutate: singleEditInput, isLoading: isSingleEditLoading, isError: isSingleEditError, error: singleEditError} = useMutation({
    mutationFn: editSingleInput,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']});
      setShowProfessionForm(false);
      setShowBioForm(false);
      setShowInterestForm(false);
    }
  })

  const singleEdit = (formData) => {
    const userId = params.userId
    singleEditInput({formData, userId, token})
  }

  const {mutate: mutateBio} = useMutation({
    mutationFn: deleteBio,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']});
    }
  })
 
  const handleDeleteBio = () => {
    const userId = params.userId;
    mutateBio({token, userId})
  }

  const {mutate: mutateInterest, isLoading: isInterestLoading} = useMutation({
    mutationFn: deleteInterest,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']});
    }
  })

  const handleDeleteInterest = (interest) => {
    const userId = params.userId;
    mutateInterest({interest, token, userId})
  }


  return (
    <section className='bg-slate-200 pt-5 min-h-screen px-0 md:px-5 lg:px-[250px]'>
      
      <div className='container mx-auto min-h-[800px] bg-white rounded-md flex flex-col relative'>
      <div className="relative">
        <button onClick={goBack} className="absolute top-5 right-10 bg-gray-100 hover:bg-gray-200 text-gray-500 p-4 rounded-full flex flex-row items-center"><BiArrowBack /></button>
      </div>
      {isSingleEditLoading && (
        <div className="absolute -left-4 -top-4 w-[200px] px-5 py-2 bg-yellow-400 ">
          <p className='text-gray-600 animate-pulse'>Updating...</p>
        </div>
      )}
        {/* top section */}
        <div className='w-full p-5 flex flex-col md:flex-row '>
          <ProfilePhoto 
            imgUrl={data.profile_photo} 
            user={decoded} 
            userId={params.userId} 
            uploadProfilePhoto={uploadProfilePhoto}
            setProfilePhotoUploadModal={setProfilePhotoUploadModal}
            profilePhotoUploadModal={profilePhotoUploadModal}  
          />
          <ProfileHeader 
            data={data} 
            authUser={decoded} 
            setShowProfessionForm = {setShowProfessionForm}
            showProfessionForm={showProfessionForm}
            setUploadImageModal={setUploadImageModal}
            singleEdit={singleEdit}
          /> 
        </div>

        {/* bottom section */}
        <div className="w-full px-5 flex flex-col lg:flex-row ">
          <ProfileAside 
            data={data} 
            user={decoded} 
            setShowBioForm={setShowBioForm} 
            showBioForm={showBioForm} 
            setShowInterestForm={setShowInterestForm}  
            showInterestForm={showInterestForm}
            singleEdit={singleEdit}
            handleDeleteBio={handleDeleteBio}
            handleDeleteInterest={handleDeleteInterest}
            isInterestLoading={isInterestLoading}
          />
          {/* bottom right */}
          <div className='mx-auto w-full lg:ml-20'>
            <ProfileTab userId={params.userId} authUser={decoded} />
            <main >
              <Outlet />
            </main>
          </div>
        </div>
      </div>
      <Modal isVisible={uploadImageModal} onClose={()=>setUploadImageModal(false)}>
          <UploadImageForm 
            submitFn={handleUploadImage} 
            isUploadLoading={isUploadLoading}
            isUploadError={isUploadError}
            uploadError={uploadError}
            categoryData={categoryData}
            method="create"
          />
      </Modal> 
    </section>
  )
}

export default ProfilePage

export const loader = ({params}) => {
  return queryClient.fetchQuery({
    queryKey: ['user', params.userId],
    queryFn: ({signal}) => fetchUser({signal, id: params.userId})
  });
}