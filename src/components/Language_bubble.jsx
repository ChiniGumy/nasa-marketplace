function Language_bubble() {
    const languages = [
        'JavaScript',
        'Python',
        'Java',
        'C#',
        'Go',
        'Rust',
        'TypeScript',
        'C++',
        'PHP',
        'Swift',
        'Kotlin',
        'Ruby',
        'Objective-C',
        'Scala',
        'R',
        'Perl',
        'Haskell',
        'Lua',
        'Dart',
        'Shell',
        'Matlab',
        'Groovy',
        'Clojure',
        'Julia',
        'Racket',
        'React',
    ];

    return (
        <>
            {languages.map((language, index) => (
                <div key={index} className="text-white-text border border-white-text w-fit px-2 py-1 mr-2 mb-2 rounded-[15px]">{language}</div>
            ))}
        </>

    );
}

export default Language_bubble;
