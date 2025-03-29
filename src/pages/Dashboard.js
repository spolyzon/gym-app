import { UserButton, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import ExerciseTracker from '../components/ExerciseTracker';
export default function Dashboard() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  if (!isSignedIn) {
    navigate('/');
  }

  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex w-full h-20 justify-between items-center border border-green-800 p-2">
        <h1 className="text-2xl font-bold text-green-800">Body & Mind Harmony</h1>
        {/* <h1 className="text-2xl font-bold mr-4 mt-2"> */}
          <UserButton
            appearance={{
              elements: {
                // avatarBox: {
                //     // width: '52px',
                //     // height: '52px',
                // },
                avatarBox: 'w-12 h-12'
              },
            }} />
        {/* </h1> */}
      </div>
      <div className="w-full h-full">
        <ExerciseTracker />
      </div>
    </div>
  );
}