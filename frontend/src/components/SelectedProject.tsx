
export default function SelectedProject({ patient }:any) {
    return <div className="w-[35rem] mt-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-300">
            <div className="flex items-center justify-between">
                <h1 className="text-3-xl font-bold text-stone-600 mb-2">{patient.name}</h1>
                <button className="text-stone-600 hover:text-stone-950">Delete</button>
            </div>
            <p className="mb-4 text-stone-400 whitespace-pre-wrap">{patient.health}</p>
            <p className="text-stone-600 whitespace-pre-wrap">BLA BLA</p>
        </header>
        TASKS
    </div>
}