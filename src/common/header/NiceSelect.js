import React from 'react';
import { useIconContext } from '../../context/Context';

const NiceSelect = () => {
    const { lang, setLang } = useIconContext();

    const handleLangChange = (selectedLang) => {
        setLang(selectedLang);
        // Seçilen dil bilgisini local storage'a kaydet
        localStorage.setItem('selectedLang', selectedLang);
    };

    return (
        <>
            <div className="location-box">
                <div className="select-box">
                    <select
                        className="selectmenu wide"
                        value={lang} // Set the value attribute to reflect the current language
                        onChange={(e) => handleLangChange(e.target.value)}
                    >
                        <option value="tr">Turkish</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        </>
    );
};

export default NiceSelect;
