import React, { useState } from "react";
import { Link } from "react-router-dom";
import cameraIcon from "@/assets/camera.svg";

export function Predict() {
    const [image, setImage] = useState<string | null>(null);
    const [prediction, setPrediction] = useState("");
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handlePredict = async () => {
        if (!image) return;

        setLoading(true);
        setPrediction("");

        try {
            const formData = new FormData();
            const fileInput = document.getElementById('image-upload') as HTMLInputElement;
            if (fileInput.files?.[0]) {
                formData.append("file", fileInput.files[0]);
            } else {
                console.error("No file selected.");
                setLoading(false);
                return;
            }

            const response = await fetch("https://african-food-predictor-1.onrender.com/predict", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                },
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Server responded with ${response.status}: ${errorText}`);
            }

            const data = await response.json();
            setPrediction(data.prediction);
        } catch (error) {
            console.error("Error during prediction:", error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="p-6 max-w-md w-full bg-white rounded-lg shadow-md">
                <h1 className="text-xl font-bold text-green-900 mb-4">Nigerian Food Classifier</h1>

                <div className="flex flex-col gap-4">
                    {/* Image Upload */}
                    <div className="mb-8">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                            id="image-upload"
                        />
                        <label
                            htmlFor="image-upload"
                            className="border border-gray-300 rounded-lg w-full h-60 flex flex-col items-center justify-center bg-gray-100 cursor-pointer"
                        >
                            {image ? (
                                <img
                                    src={image}
                                    alt="Uploaded"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            ) : (
                                <>
                                    <img src={cameraIcon} alt="Camera Icon" className="w-8 h-8" />
                                    <p className="text-sm text-gray-500 mt-2">Upload Image</p>
                                </>
                            )}
                        </label>
                    </div>

                    <button
                        onClick={handlePredict}
                        disabled={!image || loading}
                        className={`${loading
                            ? "bg-green-400"
                            : "bg-green-600 hover:bg-green-700"
                            } text-white rounded-lg px-4 py-2`}
                    >
                        {loading ? (
                            <svg
                                className="animate-spin w-5 h-5 mx-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                ></path>
                            </svg>
                        ) : (
                            "Predict"
                        )}
                    </button>

                    {prediction && (
                        <div className="mt-4 text-lg font-bold text-green-800">
                            Result: {prediction}
                        </div>
                    )}
                </div>

                <Link to="/">
                    <button className="mt-6 bg-gray-500 hover:bg-gray-600 text-white rounded-lg px-4 py-2">
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};
