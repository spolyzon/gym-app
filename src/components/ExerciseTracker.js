import { useState } from "react";
import Search from "./Search";
import AddExerciseButton from "./AddExerciseButton";
import ExercisesTable from "./ExercisesTable";

export default function ExerciseTracker() {

    const [exercises, setExercises] = useState([
        {
            id: 1,
            name: "Bench Press",
            sets: 3,
            reps: 10,
            weight: 100,
        },
        {
            id: 2,
            name: "Deadlift",
            sets: 3,
            reps: 10,
            weight: 100,
        },
        {
            id: 3,
            name: "Squat",
            sets: 3,
            reps: 10,
            weight: 100,
        },
        {
            id: 4,
            name: "Pull-ups",
            sets: 3,
            reps: 10,
            weight: 0,
        },
    ]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleAddExercise = (newExercise) => {
        setExercises([...exercises, newExercise]);
    }

    const handleEditExercise = (editedExercise) => {
        const updatedExercises = exercises.map(exercise => exercise.id === editedExercise.id ? editedExercise : exercise);
        setExercises(updatedExercises);
    }

    const handleDeleteExercise = (exerciseId) => {
        const updatedExercises = exercises.filter(exercise => exercise.id !== exerciseId);
        setExercises(updatedExercises);
    }

    return (
        <div className="px-6 space-y-4 pb-10">
            <h1 className="text-2xl font-bold mt-2">Exercise Tracker</h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <Search
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />
                <AddExerciseButton
                    onAddExercise={handleAddExercise}
                />
            </div>

            <div>
                <ExercisesTable
                    exercises={exercises}
                    onEditExercise={handleEditExercise}
                    onDeleteExercise={handleDeleteExercise}
                />
            </div>
        </div>
    );
}