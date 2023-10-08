import { useState } from 'react';

function LanguagesBubble() {
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const toggleLanguage = (language) => {
        if (selectedLanguages.includes(language)) {
            setSelectedLanguages(selectedLanguages.filter(l => l !== language));
        } else {
            setSelectedLanguages([...selectedLanguages, language]);
        }
    }

    const languages = [
        "Arabic",
        "Bengali",
        "English",
        "French",
        "German",
        "Gujarati",
        "Hindi",
        "Indonesian",
        "Japanese",
        "Korean",
        "Malay",
        "Marathi",
        "Portuguese",
        "Punjabi",
        "Russian",
        "Spanish",
        "Tamil",
        "Telugu",
        "Turkish",
        "Urdu",
        "Vietnamese",
    ];

    return (
        <>
            {languages.map((language, index) => (
                <div
                    key={index}
                    className={
                        selectedLanguages.includes(language)
                            ? 'cursor-pointer text-black border bg-white-strokes border-white-strokes w-fit px-2 py-1 mr-2 mb-2 rounded-[15px]'
                            : 'cursor-pointer text-white-text border border-white-text w-fit px-2 py-1 mr-2 mb-2 rounded-[15px]'
                    }
                    onClick={() => toggleLanguage(language)}
                >
                    {language}
                </div>
            ))}
        </>
    );
}

export default LanguagesBubble;
