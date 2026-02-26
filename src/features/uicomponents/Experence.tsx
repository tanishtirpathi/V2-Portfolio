import { ExperienceCard } from '../components/(experence)/ExperienceCard'
import { dataExperence } from '../components/(experence)/Dataexpernce'

export const ExperienceSection = () => {
    return (
        <section className="space-y-6">
            <div className="my-10">
                <h2 className="text-3xl font-sans text-black/90 dark:text-gray-300 font-bold">Experience</h2>
                <p className="text-xs text-gray-700 dark:text-gray-400 font-mono mb-6">My work of Proof</p>
            </div>
            {dataExperence.map((exp) => (
                <ExperienceCard
                    image={exp.image}
                    key={exp.id}
                    title={exp.title}
                    company={exp.company}
                    startDate={exp.startDate}
                    description={exp.description}
                    Technologies={exp.Technologies}
                />
            ))}
        </section>
    )
}