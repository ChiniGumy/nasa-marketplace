function Frameworks_bubble() {
    const frameworks = [
        'React', 'Angular', 'Vue',
        'Django', 'Flask',
        'Spring', 'Hibernate',
        '.NET Core', 'Entity Framework',
        'NestJS', 'Next.js', 'Angular',
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
                    className="text-white-text border border-white-text w-fit px-2 py-1 mr-2 mb-2 rounded-[15px]"
                >
                    {framework}
                </div>
            ))}
        </>
    );
}

export default Frameworks_bubble;
