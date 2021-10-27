import React from "react";

const DailyCalorieIntake = ({result}) => {

    return (
        <>
            <h2>Ваша рекомендуемая суточная норма калорий составляет</h2>
            <p>2800 Ккал</p>
            <ul>
                {result.slice(0, 8).map(item => (<li key={item}>{item}</li>))}
            </ul>
        </>

    );
}

export default DailyCalorieIntake;