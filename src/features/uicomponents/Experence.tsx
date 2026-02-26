import { ExperienceCard } from '../components/(experence)/ExperienceCard'
import { dataExperence } from '../components/(experence)/Dataexpernce'

export const ExperienceSection = () => {
    return (
        <section className="space-y-6">
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