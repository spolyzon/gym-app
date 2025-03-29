import { useState } from 'react';
import { X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

export default function AddExerciseButton({ onAddExercise }) {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    // Form state
    const [newExercise, setNewExercise] = useState({
        name: "",
        category: "",
        sets: "",
        reps: "",
        weight: "",
    })

    // Available exercise categories
    const categories = ["Arms", "Back", "Chest", "Core", "Legs", "Shoulders", "Cardio", "Full Body"];

    const handleSubmit = (e) => {
        e.preventDefault()

        const newExerciseItem = {
            id: uuidv4(),
            name: newExercise.name.trim(),
            category: newExercise.category,
            sets: Number(newExercise.sets),
            reps: Number(newExercise.reps),
            weight: Number(newExercise.weight),
        }
        console.log(newExerciseItem)

        onAddExercise(newExerciseItem)

        // Reset form and close modal
        setNewExercise({
            name: "",
            category: "",
            sets: "",
            reps: "",
            weight: "",
        })
        setIsAddModalOpen(false)
    }

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewExercise({
            ...newExercise,
            [name]: value,
        })
    }

    // Open modal and reset form
    const openAddModal = () => {
        setNewExercise({
            name: "",
            category: "",
            sets: "",
            reps: "",
            weight: "",
        })
        setIsAddModalOpen(true)
    }

    return (
        <>
            <button
                className="px-4 py-2 bg-green-800 text-white rounded-md border border-green-800 hover:bg-white hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
                onClick={openAddModal}
            >
                Add Exercise
            </button>
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-lg font-medium">Add New Exercise</h3>
                            <button
                                onClick={() => setIsAddModalOpen(false)}
                                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-4 space-y-4">
                            {/* Exercise Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Exercise Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={newExercise.name}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 border-gray-300`}
                                    placeholder="e.g., Bench Press"
                                />
                                {/* {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>} */}
                            </div>

                            {/* Category */}
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                                </label>
                                <select
                                    id="category"
                                    name="category"
                                    value={newExercise.category}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 border-gray-300`}
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                                {/* {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>} */}
                            </div>

                            {/* Sets, Reps, and Weight in a row */}
                            <div className="grid grid-cols-3 gap-3">
                                {/* Sets */}
                                <div>
                                    <label htmlFor="sets" className="block text-sm font-medium text-gray-700 mb-1">
                                        Sets
                                    </label>
                                    <input
                                        type="number"
                                        id="sets"
                                        name="sets"
                                        value={newExercise.sets}
                                        onChange={handleInputChange}
                                        min="1"
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 border-gray-300`}
                                    />
                                    {/* {errors.sets && <p className="mt-1 text-sm text-red-600">{errors.sets}</p>} */}
                                </div>

                                {/* Reps */}
                                <div>
                                    <label htmlFor="reps" className="block text-sm font-medium text-gray-700 mb-1">
                                        Reps
                                    </label>
                                    <input
                                        type="number"
                                        id="reps"
                                        name="reps"
                                        value={newExercise.reps}
                                        onChange={handleInputChange}
                                        min="1"
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 border-gray-300`}
                                    />
                                    {/* {errors.reps && <p className="mt-1 text-sm text-red-600">{errors.reps}</p>} */}
                                </div>

                                {/* Weight */}
                                <div>
                                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                                        Weight (lbs)
                                    </label>
                                    <input
                                        type="number"
                                        id="weight"
                                        name="weight"
                                        value={newExercise.weight}
                                        onChange={handleInputChange}
                                        min="0"
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 border-gray-300`}
                                        placeholder="0 for bodyweight"
                                    />
                                    {/* {errors.weight && <p className="mt-1 text-sm text-red-600">{errors.weight}</p>} */}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
                                >
                                    Add Exercise
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}