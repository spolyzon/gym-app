import { Edit, Trash2, X, AlertTriangle } from "lucide-react";
import { useState } from "react";

export default function MobileExerciseTable({ exercises, onEditExercise, onDeleteExercise }) {

    const [currentExercise, setCurrentExercise] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setCurrentExercise({
            ...currentExercise,
            [name]: value,
        })
    };

    const resetFormAndCloseModals = () => {
        setIsEditModalOpen(false);
        setIsDeleteModalOpen(false);
        setCurrentExercise(null);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onEditExercise(currentExercise);
        resetFormAndCloseModals();
    };

    const openEditModal = (exercise) => {
        setCurrentExercise(exercise);
        setIsEditModalOpen(true);
    };

    const openDeleteModal = (exercise) => {
        setCurrentExercise(exercise);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteConfirm = () => {
        onDeleteExercise(currentExercise.id);
        resetFormAndCloseModals();
    };

    return (
        <>
            {/* Mobile Card View - Hidden on Desktop */}
            <div className="sm:hidden space-y-3">
                {exercises.length > 0 ? (
                    exercises.map((exercise) => (
                        <div key={exercise.id} className="bg-white border rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium text-gray-900">{exercise.name}</h3>
                                </div>
                                <div className="flex justify-end mt-1 gap-2">
                                    <button
                                        className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                        onClick={() => openEditModal(exercise)}
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                                        onClick={() => openDeleteModal(exercise)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex mt-3 pt-3 border-t border-gray-100 text-sm">
                                <div className="flex-1 text-center">
                                    <p className="text-gray-500">Sets</p>
                                    <p className="font-medium">{exercise.sets}</p>
                                </div>
                                <div className="flex-1 text-center border-l border-gray-100">
                                    <p className="text-gray-500">Reps</p>
                                    <p className="font-medium">{exercise.reps}</p>
                                </div>
                                <div className="flex-1 text-center border-l border-gray-100">
                                    <p className="text-gray-500">Weight</p>
                                    <p className="font-medium">
                                        {exercise.weight > 0 ? `${exercise.weight} KG` : "Bodyweight"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10 text-gray-500">No exercises found.</div>
                )}
            </div>

            {/* Edit Exercise Modal */}
            {isEditModalOpen && currentExercise && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-lg font-medium">Edit Exercise</h3>
                            <button
                                onClick={() => setIsEditModalOpen(false)}
                                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <form
                            onSubmit={handleEditSubmit}
                            className="p-4 space-y-3"
                        >
                            {/* Exercise Name */}
                            <div>
                                <label htmlFor="edit-name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Exercise Name
                                </label>
                                <input
                                    type="text"
                                    id="edit-name"
                                    name="name"
                                    value={currentExercise.name}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label htmlFor="edit-category" className="block text-sm font-medium text-gray-700 mb-1">
                                    Category
                                </label>
                                <select
                                    id="edit-category"
                                    name="category"
                                    disabled={true}
                                    value={currentExercise.category}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-md bg-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                >
                                    <option disabled value={currentExercise.category}>{currentExercise.category}</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                {/* Sets */}
                                <div>
                                    <label htmlFor="edit-sets" className="block text-sm font-medium text-gray-700 mb-1">
                                        Sets
                                    </label>
                                    <input
                                        type="number"
                                        id="edit-sets"
                                        name="sets"
                                        value={currentExercise.sets}
                                        onChange={handleInputChange}
                                        min="1"
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                </div>

                                {/* Reps */}
                                <div>
                                    <label htmlFor="edit-reps" className="block text-sm font-medium text-gray-700 mb-1">
                                        Reps
                                    </label>
                                    <input
                                        type="number"
                                        id="edit-reps"
                                        name="reps"
                                        value={currentExercise.reps}
                                        onChange={handleInputChange}
                                        min="1"
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                </div>

                                {/* Weight */}
                                <div>
                                    <label htmlFor="edit-weight" className="block text-sm font-medium text-gray-700 mb-1">
                                        Weight
                                    </label>
                                    <input
                                        type="number"
                                        id="edit-weight"
                                        name="weight"
                                        value={currentExercise.weight}
                                        onChange={handleInputChange}
                                        min="0"
                                        step="0.5"
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    />
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={resetFormAndCloseModals}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-yellow-600 text-white rounded-md border border-yellow-600 hover:bg-white hover:text-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                                >
                                    Update Exercise
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Modal */}
            {isDeleteModalOpen && currentExercise && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto overflow-hidden">
                        <div className="p-4 text-center">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                                <AlertTriangle className="h-6 w-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Delete Exercise</h3>
                            <p className="text-sm text-gray-500 mb-4">
                                Are you sure you want to delete <span className="text-black font-bold">{currentExercise.name}</span>? This action
                                cannot be undone.
                            </p>
                            <div className="flex justify-center gap-2 mt-5">
                                <button
                                    type="button"
                                    onClick={resetFormAndCloseModals}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleDeleteConfirm}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}