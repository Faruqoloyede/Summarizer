import { getDoc, doc } from 'firebase/firestore';
import {auth, db} from '../config/firebase'
import { useEffect, useState } from 'react';

type userProfile = {
    name: string;
    email: string;
    uid: string;
}
const UserProfile = () => {
    const [userDate, setUserData] = useState<userProfile | undefined>()

    useEffect(()=>{
        const fetchUser = async ()=>{
            const currentUser = auth.currentUser;
            if(!currentUser) return;

            const docRef = doc(db, 'users', currentUser.uid);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                setUserData({
                    uid: currentUser.uid,
                    ...(docSnap.data() as Omit<userProfile, "uid">),
                });
            }
        };
        fetchUser();
    })

    const firstLetter = userDate?.name.charAt(0).toUpperCase();
  return (
   <div className='p-4 flex items-start'>
            <div className='h-10 w-10 rounded-full bg-[#44E5E7]/20 flex items-center justify-center text-white font-bold text-xl'>{firstLetter}</div>
            <div className="flex flex-col items-center">
              <h2 className='text-xl font-medium capitalize text-gray-300'>{userDate?.name}</h2>
              <p className='text-base text-gray-300'>{userDate?.email}</p>
            </div>
          </div>
  )
}

export default UserProfile