import style from "./MainPage.module.scss";
import React, {useState} from "react";
import DailyCaloriesForm from "../../components/dailyCaloriesForm/DailyCaloriesForm";
import DailyCalorieIntake from "../../components/dailyCalorieIntake/DailyCalorieIntake";
import Modal from "../../components/modal/Modal";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";
import {useHistory} from "react-router";
import Close from "../../components/closeIcon/Close";
import {useMediaQuery} from "react-responsive";
import GoBack from "../../components/goBack/GoBack";

export default function MainPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [result, setResult] = useState([]);
    const history = useHistory();

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };
    const setValue = (value) => {
        setResult(value);
    };
    const submit = () => {
        history.push("/register");
        toggle();
    };
    const orMobile = useMediaQuery({query: "(max-width: 320px)"});

    return (
        <>
            <main className={style.main}>
                <Container>
                    <DailyCaloriesForm toggle={toggle} setValue={setValue}/>
                    {isOpen && (
                        <Modal toggle={toggle} isRedirect={true}>
                            {orMobile ? (
                                <GoBack onClick={toggle}/>
                            ) : (
                                <Close toggle={toggle}/>
                            )}
                            <DailyCalorieIntake result={result}/>
                            <Button onClick={submit} text="Начать худеть"></Button>
                        </Modal>
                    )}
                </Container>
            </main>
        </>
    );
}
