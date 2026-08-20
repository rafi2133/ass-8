'use client'
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaUser, FaEnvelope, FaCamera, FaSave, FaTimes } from "react-icons/fa";

const ProfilePage = () => {
    const router = useRouter();
    const { data: session, refetch } = authClient.useSession();
    const user = session?.user;
    
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        image: '',
    });
    const [imgError, setImgError] = useState(false);

    // Populate form when user data is available
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                image: user.image || '',
            });
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Reset image error when user types new URL
        if (e.target.name === 'image') {
            setImgError(false);
        }
    };

    const isValidUrl = (url) => {
        if (!url) return true;
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    };

    const handleUpdate = async () => {
        // Validate name
        if (!formData.name.trim()) {
            toast.warning('Name cannot be empty');
            return;
        }

        // Validate image URL if provided
        if (formData.image && !isValidUrl(formData.image)) {
            toast.error('Please enter a valid image URL (include https://)');
            return;
        }

        setLoading(true);

        try {
            // Update user profile
            const { data, error } = await authClient.updateUser({
                name: formData.name,
                image: formData.image || null,
            });

            if (error) {
                toast.error(error.message || 'Update failed');
                return;
            }

            if (data) {
                toast.success('Profile updated successfully!');
                setIsEditing(false);
                // Refresh session data
                await refetch();
                router.refresh();
            }
        } catch (error) {
            console.error('Update error:', error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const cancelEdit = () => {
        setFormData({
            name: user?.name || '',
            image: user?.image || '',
        });
        setIsEditing(false);
        setImgError(false);
    };

    const getImageSrc = () => {
        if (imgError) return '/default-avatar.png';
        if (formData.image && isValidUrl(formData.image)) return formData.image;
        return '/default-avatar.png';
    };

    // Show loading state
    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#d81b99] to-[#b8167a] px-6 py-8">
                        <h1 className="text-2xl font-bold text-white">Profile Settings</h1>
                        <p className="text-white/80 text-sm mt-1">Manage your personal information</p>
                    </div>

                    {/* Profile Content */}
                    <div className="p-6">
                        {/* Avatar Section */}
                        <div className="flex flex-col items-center mb-8">
                            <div className="relative group">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#d81b99] bg-gray-100">
                                    <img
                                        src={getImageSrc()}
                                        alt={formData.name || 'User'}
                                        className="w-full h-full object-cover"
                                        onError={() => setImgError(true)}
                                    />
                                </div>
                                {isEditing && (
                                    <div className="absolute bottom-0 right-0 bg-[#d81b99] p-2 rounded-full text-white">
                                        <FaCamera size={16} />
                                    </div>
                                )}
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mt-3">
                                {formData.name || 'User'}
                            </h2>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>

                        {/* View Mode */}
                        {!isEditing ? (
                            <div className="space-y-4">
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <label className="text-sm text-gray-500">Full Name</label>
                                    <p className="text-gray-800 font-medium">{user.name}</p>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <label className="text-sm text-gray-500">Email Address</label>
                                    <p className="text-gray-800 font-medium">{user.email}</p>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <label className="text-sm text-gray-500 ">Profile Photo URL</label>
                                    {user.image ? (
                                        <p className="text-gray-800 font-medium text-sm break-all line-clamp-3">
                                            {user.image}
                                        </p>
                                    ) : (
                                        <p className="text-gray-400 text-sm">No photo set</p>
                                    )}
                                </div>

                                <button
                                    onClick={() => setIsEditing(true)}
                                    className="w-full bg-[#d81b99] hover:bg-[#b8167a] text-white py-3 rounded-lg font-semibold transition-colors"
                                >
                                    Edit Profile
                                </button>
                            </div>
                        ) : (
                            /* Edit Mode */
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d81b99] focus:border-transparent"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Profile Photo URL
                                    </label>
                                    <input
                                        type="text"
                                        name="image"
                                        value={formData.image}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d81b99] focus:border-transparent"
                                        placeholder="https://example.com/photo.jpg"
                                    />
                                    <p className="text-xs text-gray-400 mt-1">
                                        Enter a valid image URL (optional)
                                    </p>
                                    {formData.image && !isValidUrl(formData.image) && (
                                        <p className="text-xs text-red-500 mt-1">
                                            Please enter a valid URL (include https://)
                                        </p>
                                    )}
                                </div>

                                {/* Preview */}
                                <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                                        <img
                                            src={getImageSrc()}
                                            alt="Preview"
                                            className="w-full h-full object-cover"
                                            onError={() => setImgError(true)}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700">Preview</p>
                                        <p className="text-xs text-gray-500">Your profile photo will appear here</p>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <button
                                        onClick={handleUpdate}
                                        disabled={loading}
                                        className="flex-1 bg-[#d81b99] hover:bg-[#b8167a] text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                                    >
                                        {loading ? (
                                            <span className="loading loading-spinner loading-sm"></span>
                                        ) : (
                                            <>
                                                <FaSave size={16} />
                                                Save Changes
                                            </>
                                        )}
                                    </button>
                                    <button
                                        onClick={cancelEdit}
                                        disabled={loading}
                                        className="px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-semibold transition-colors flex items-center gap-2"
                                    >
                                        <FaTimes size={16} />
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;