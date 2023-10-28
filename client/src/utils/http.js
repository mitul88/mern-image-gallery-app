import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true }}
});

export const fetchCategories = async () => {
  const response = await fetch(`http://localhost:4000/api/category`);

  if (!response.ok) {
    const error = new Error('An error occurred while fetching categories');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {data}  = await response.json();
  return data;
}

export const fetchImages = async ({pageParam=1, limit, category, user}) => {
 
  let url = `http://localhost:4000/api/image/?page=${pageParam}`;
  
  if(category && user && limit) {
    url += '&limit=' + limit + '&category=' +  category + '&user=' + user;
  } else if(category && limit) {
    url += '&limit=' + limit + '&category=' +  category;
  } else if (category) {
    url += '&category=' + category;
  } else if (user) {
    url += '&user=' + user;
  } else if (limit) {
    url += '&limit=' + limit;
  }
  
  const response = await fetch( url )
   return response.json()
}

export const editImageInformation = async (imageData) => {
  const formData = imageData.formData;
  const imageId = imageData.imageId
  const token = imageData.token;

  let postData = {
    "title": formData.get('title'),
    "desc": formData.get('desc'),
    "category": formData.get('category')
  }

  const response = await fetch(`http://localhost:4000/api/image/${imageId}`, {
    method: "put",
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while posting the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
} 
export const fetchImage = async ({id, signal}) => {
  const response = await fetch(`http://localhost:4000/api/image/${id}`, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the image');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {data}  = await response.json();

  return data;
}

export const fetchUser = async ({ id, signal }) => {
    const response = await fetch(`http://localhost:4000/api/user/${id}`, { signal });
    if (!response.ok) {
      const error = new Error('An error occurred while fetching the user');
      error.code = response.status;
      error.info = await response.json();
      throw error;
    }
    
    const { data } = await response.json();
  
    return data;
}

export const postComment = async (commentData) => {
  const formData = commentData.formData;
  const token = commentData.token;
  const method = commentData.method

  let postData = {}
  if (method === "POST") {
    postData = {
      "user_comment": formData.get('user_comment'),
      "image_id": formData.get('image_id')
    }
  } else if (method === "PUT") {
    postData = {
      "user_comment": formData.get('user_comment'),
      "comment_id": formData.get('comment_id')
    }
  } else if (method === "DELETE") {
    postData = {
      "comment_id": formData.get('comment_id'),
    }
  } 

  const response = await fetch(`http://localhost:4000/api/comment/`, {
    method: method,
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while posting the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const fetchComments = async ({id, signal}) => {
  const response = await fetch(`http://localhost:4000/api/comment/image-comments/${id}`, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the comments');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {data}  = await response.json();
  return data;
}

export const postLike = async (likeData) => {
  const formData = likeData.formData;
  const token = likeData.token;
  const method = likeData.method;
  
  const postData = {
    "image_id": formData.get('image_id')
  }

  const response = await fetch(`http://localhost:4000/api/like/`, {
    method: method,
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while posting like');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const fetchLikes = async ({id, token, signal}) => {
  let response;
  if (token !== null) {
    response = await fetch(`http://localhost:4000/api/like/counts/${id}`,{
    method: "GET",
    headers: {
      'authorization': `Bearer ${token}`
    }
  }, { signal });
  } else {
    response = await fetch(`http://localhost:4000/api/like/counts/${id}`, { signal });
  }
  
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the event');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const {data}  = await response.json();
  return data;
}

export const postProfilePhoto = async (photoData) => {

  const formData = photoData.formData;
  const token = photoData.token;
  const userId = photoData.userId;

  const response = await fetch(`http://localhost:4000/api/user/upload-profile-photo/${userId}`, {
    method: "POST",
    body: formData,
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while uploading profile photo');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const editSingleInput = async (inputData) => {
  const formData = inputData.formData;
  const token = inputData.token;
  const userId = inputData.userId;

  let postData = {
    "bio" : formData.get('bio'),
    "interest" : formData.get('interest'),
    "profession" : formData.get('profession'),
  }

  const response = await fetch(`http://localhost:4000/api/user/single-update/${userId}`, {
    method: "PATCH",
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while updating');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const userUpdate = async (updateData) => {
  const formData = updateData.formData;
  const token = updateData.token;
  const userId = updateData.userId;

  let postData = {
    "name" : formData.get('name'),
    "bio" : formData.get('bio'),
    "phone" : formData.get('phoneNumber'),
    "dob" : formData.get('dob'),
    "profession" : formData.get('profession'),
  }

  const response = await fetch(`http://localhost:4000/api/user/update/${userId}`, {
    method: "PUT",
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while updating');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const deleteProfilePhoto = async (deletePhotoData) => {
  const token = deletePhotoData.token;
  const userId = deletePhotoData.userId;

  const response = await fetch(`http://localhost:4000/api/user/profile-photo-delete/${userId}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while deleting photo');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const changePassword = async (changePasswordData) => {

  const formData = changePasswordData.formData;
  const token = changePasswordData.token;
  const userId = changePasswordData.userId;

  const changePasswordPost = {
    currentPass: formData.get('currentPass'),
    newPass: formData.get('newPass'),
    confirmNewPass: formData.get('confirmNewPass')
  }

  const response = await fetch(`http://localhost:4000/api/user/change-password/${userId}`, {
    method: 'POST',
    body: JSON.stringify(changePasswordPost),
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`,
    }
  })

  if (!response.ok) {
    const error = new Error('An error occurred while updating');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const changeProfilePhoto = async (photoData) => {

  const formData = photoData.formData;
  const token = photoData.token;
  const userId = photoData.userId;

  const response = await fetch(`http://localhost:4000/api/user/change-profile-photo/${userId}`, {
    method: "PUT",
    body: formData,
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while changing photo');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const postImage = async (imageData) => {

  const formData = imageData.formData;
  const token = imageData.token;

  const response = await fetch(`http://localhost:4000/api/image/upload/`, {
    method: "POST",
    body: formData,
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while posting image');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const deleteImage = async (imageData) => {
  const token = imageData.token;
  const imageId = imageData.imageId

  const response = await fetch(`http://localhost:4000/api/image/delete-image/${imageId}`, {
    method: "DELETE",
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while deleting image');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const deleteBio = async (bioData) => {
  const token = bioData.token;
  const userId = bioData.userId

  const response = await fetch(`http://localhost:4000/api/user/delete-bio/${userId}`, {
    method: "DELETE",
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while deleting image');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}

export const deleteInterest = async (interestData) => {
  const interest = interestData.interest;
  const token = interestData.token;
  const userId = interestData.userId

  const response = await fetch(`http://localhost:4000/api/user/delete-interest/${userId}/${interest}`, {
    method: "DELETE",
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const error = new Error('An error occurred while deleting image');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { data } = await response.json();

  return data;
}