import React from "react";

const DailyCalorieIntake = ({result}) => {
    return (
        <>
            <h2>Ваша рекомендуемая суточная норма калорий составляет</h2>
            <p>{result.dailyRate}Ккал</p>
            <ul>
                {result.notAllowedProducts?.slice(0, 8).map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
};

export default DailyCalorieIntake;
