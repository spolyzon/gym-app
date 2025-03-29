import { SignInButton, SignUpButton, UserButton, SignedOut, SignedIn, useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate();
    const { isSignedIn } = useUser();

    if (isSignedIn) {
        navigate('/dashboard');
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen gap-2">
            <h1 className="text-2xl md:text-4xl text-center font-bold text-green-800">
                Body and Mind Harmony
            </h1>

            <SignedOut>
                <div className='flex gap-2'>
                    <div className='border-2 border-green-800 rounded-md p-4 hover:bg-green-800 hover:text-white transition-all duration-300'>
                        <SignInButton forceRedirectUrl={process.env.REACT_APP_CLERK_SIGN_IN_FORCE_REDIRECT_URL} />
                    </div>
                    <div className='border-2 border-green-800 rounded-md p-4 hover:bg-green-800 hover:text-white transition-all duration-300'>
                        <SignUpButton forceRedirectUrl={process.env.REACT_APP_CLERK_SIGN_UP_FORCE_REDIRECT_URL} />
                    </div>
                </div>
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </div>
    );
}