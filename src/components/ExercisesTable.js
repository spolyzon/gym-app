import DesktopExerciseTable from "./DesktopExerciseTable";
import MobileExerciseTable from "./MobileExerciseTable";

export default function ExercisesTable({ exercises, onEditExercise, onDeleteExercise }) {
    return (
        <>
            {/* Desktop Table View - Hidden on Mobile */}
            <DesktopExerciseTable exercises={exercises} onEditExercise={onEditExercise} onDeleteExercise={onDeleteExercise} />
            
            {/* Mobile Card View - Hidden on Desktop */}
            <MobileExerciseTable exercises={exercises} onEditExercise={onEditExercise} onDeleteExercise={onDeleteExercise} />
        </>
    )
}