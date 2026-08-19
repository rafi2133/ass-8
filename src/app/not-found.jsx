import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      <div className="card bg-base-100 shadow-xl max-w-md w-full">
        <div className="card-body text-center">
          
          {/* 404 Icon */}
          <div className="text-8xl font-bold  mb-2">404</div>
          
          <h2 className="text-2xl font-bold">Page Not Found</h2>
          
         
          
          {/* Buttons */}
          <div className="flex flex-col gap-2 mt-4">
            <Link href="/" className="btn text-white bg-[#860c76] gap-2">
              <FaHome /> Go Home
            </Link>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}