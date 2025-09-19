"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { showErrorToast, showSuccessToast } from "@/lib/toast";
import Spinner from "@/components/Spinner";
import AuthGuard from "@/components/AuthGuard";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AddService = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [serviceTitle, setServiceTitle] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [servicePrice, setServicePrice] = useState("");
    const [serviceImages, setServiceImages] = useState([]);
    const [previewImages, setPreviewImages] = useState([]);
    const [categoryId, setCategoryId] = useState("");
    const [adminId, setAdminId] = useState(null);
    const [token, setToken] = useState(null);

    const router = useRouter();

    // Load user + token
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || (!user?.id && !user?._id) || !storedToken) {
            router.push("/auth/signin");
        } else {
            setAdminId(user?.id || user?._id);
            setToken(storedToken);
        }
    }, [router]);

    // Fetch categories
    useEffect(() => {
        if (adminId) {
            setLoading(true);
            fetchCategories();
        }
    }, [adminId]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/superAdmin/getAllCategories`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setCategories(response?.data?.date || []); // API gives "date" not "data"
        } catch (error) {
            console.error("Error fetching categories:", error);
            showErrorToast("Failed to load categories");
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setServiceImages(files);

        const previewUrls = files.map((file) => URL.createObjectURL(file));
        setPreviewImages(previewUrls);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!serviceTitle || !serviceDescription || !servicePrice || !categoryId) {
            alert("Please fill all fields.");
            return;
        }

        const formData = new FormData();
        formData.append("adminId", adminId);
        formData.append("categoryId", categoryId);
        formData.append("title", serviceTitle);
        formData.append("text", serviceDescription);
        formData.append("price", servicePrice);

        serviceImages.forEach((file) => {
            formData.append("ServiceImage", file);
        });

        setLoading2(true);
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/admin/addService`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response?.data?.success) {
                showSuccessToast(response?.data?.msg || "Service added!");
                // // Reset form
                // setServiceTitle("");
                // setServiceDescription("");
                // setServicePrice("");
                // setServiceImages([]);
                // setPreviewImages([]);
                // setCategoryId("");
                router.push("/dashboard");
            }
        } catch (error) {
            console.error("Service creation failed", error);
            showErrorToast(
                error.response?.data?.message || "Error adding Service!"
            );
        } finally {
            setLoading2(false);
        }
    };

    if (loading) return <Spinner />;

    return (
        <div className="content w-100">
            <div className="auth_container bussiness">
                <div className="auth_head">
                    <h2>Add Service</h2>
                    <p>Enter your business info to customize your Fraime experience</p>
                </div>
                <div className="w-100">
                    <form onSubmit={handleSubmit}>
                        <div className="row align-items-end">
                            <div className="col-7">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="auth_upload_bussiness_logo">
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                            {previewImages.length === 0 ? (
                                                <label>
                                                    <div className="aubl_img_container">
                                                        <span className="aic_icon">
                                                            <Image
                                                                src="/images/upload-icon.png"
                                                                width={16}
                                                                height={18}
                                                                className="pb-icon"
                                                                alt="Upload"
                                                            />
                                                        </span>
                                                    </div>
                                                    <h5>Upload Service Pictures</h5>
                                                </label>
                                            ) : (
                                                <div className="d-flex align-items-center gap-2 flex-wrap">
                                                    {previewImages.map((src, index) => (
                                                        <Image
                                                            key={index}
                                                            src={src}
                                                            width={100}
                                                            height={100}
                                                            alt={`Preview ${index + 1}`}
                                                            className="preview-thumbnail"
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row as_form gy-4">
                            <div className="col-12">
                                <div className="bd_fields">
                                    <input
                                        type="text"
                                        placeholder="Service Title *"
                                        required
                                        value={serviceTitle}
                                        onChange={(e) => setServiceTitle(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="bd_fields">
                                    <select
                                        value={categoryId}
                                        required
                                        onChange={(e) => setCategoryId(e.target.value)}
                                    >
                                        <option value="">Select Category *</option>
                                        {categories.map((cat) => (
                                            <option key={cat._id} value={cat._id}>
                                                {cat.categoryName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="bd_fields">
                                    <textarea
                                        rows="5"
                                        className="h-100"
                                        placeholder="Description"
                                        value={serviceDescription}
                                        onChange={(e) => setServiceDescription(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="bd_fields d-flex align-items-center gap-3">
                                    <label>Service Price</label>
                                    <div className="dollar_input d-flex align-items-center gap-3">
                                        <span>$</span>
                                        <input
                                            type="number"
                                            value={servicePrice}
                                            required
                                            onChange={(e) => setServicePrice(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 pt-4 d-flex align-items-center justify-content-between">
                                <button
                                    type="submit"
                                    disabled={loading2}
                                    className="theme-btn2"
                                >
                                    {loading2 ? <Spinner /> : "Submit"}
                                </button>
                                <Link
                                    href="/dashboard/services"
                                    className="btn theme-btn3"
                                    style={{ width: "240px" }}
                                >
                                    Go back
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const ProtectedAddServiceDashboard = () => (
    <AuthGuard>
        <AddService />
    </AuthGuard>
);

export default ProtectedAddServiceDashboard;
