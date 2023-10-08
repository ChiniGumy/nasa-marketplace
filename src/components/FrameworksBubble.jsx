import { useState } from 'react';

function FrameworksBubble() {
    const [selectedFrameworks, setSelectedFrameworks] = useState([]);

    const toggleFramework = (framework) => {
        if (selectedFrameworks.includes(framework)) {
            setSelectedFrameworks(selectedFrameworks.filter(f => f !== framework));
        } else {
            setSelectedFrameworks([...selectedFrameworks, framework]);
        }
    }

    const frameworks = [
        'React', 'Angular', 'Vue',
        'Django', 'Flask',
        'Spring', 'Hibernate',
        '.NET Core', 'Entity Framework',
        'NestJS', 'Next.js',
        'Laravel', 'Symfony',
        'Ruby on Rails',
        'Gin', 'Echo',
        'Rocket', 'Actix',
        'Ktor', 'Spring Boot',
        'SwiftUI', 'Vapor',
        'Play Framework', 'Akka',
        'Shiny', 'Plumber'
    ];

    return (
        <>
            {frameworks.map((framework, index) => (
                <div
                    key={index}
                    className={
                        selectedFrameworks.includes(framework)
                            ? 'cursor-pointer text-black border bg-white-strokes border-white-strokes w-fit px-2 py-1 mr-2 mb-2 rounded-[15px]'
                            : 'cursor-pointer text-white-text border border-white-text w-fit px-2 py-1 mr-2 mb-2 rounded-[15px]'
                    }
                    onClick={() => toggleFramework(framework)}
                >
                    {framework}
                </div>
            ))}
        </>
    );
}

export default FrameworksBubble;
