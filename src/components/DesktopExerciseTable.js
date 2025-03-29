export default function DesktopExerciseTable({ exercises }) {
    return (
        <>
            {/* Desktop Table View - Hidden on Mobile */}
            <div className="hidden sm:block overflow-y-auto border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Exercise
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Sets
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Reps
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Weight (KGs)
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {exercises.length > 0 ? (
                            exercises.map((exercise) => (
                                <tr key={exercise.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exercise.name}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{exercise.sets}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{exercise.reps}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                                        {exercise.weight > 0 ? exercise.weight : "Bodyweight"}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="px-6 py-24 text-sm text-center text-gray-500">
                                    No exercises found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}