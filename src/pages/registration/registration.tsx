import {IconContext} from "react-icons";
import SdvtIcon from "../../static/sdvt-icon";
import Input from "../../components/input";
import Checkbox from "../../components/checkbox";
import Button from "../../components/button";
import {Link} from "react-router-dom";
import React, {useEffect} from "react";
import useSWR from 'swr'
import useAuth from "../../context/auth";
import {ImSpinner2} from "react-icons/im";

function RegistrationPage() {
    const auth = useAuth();

    const clearPassword = () => {
        (document.getElementById("password") as HTMLInputElement).value = "";
    };

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (form) => {
        form.preventDefault();

        auth.clearError();

        const formData = new FormData(form.currentTarget);
        const phoneValue = formData.get("phone");
        const passwordValue = formData.get("password");

        if (!phoneValue) {
            return;
        }

        if (!passwordValue) {
            return;
        }

        const phone = phoneValue.toString();
        const password = phoneValue.toString();

        auth.signUp(phone, password);
    };

    useEffect(() => {
        clearPassword();
    }, [auth.error])

    return (
        <div className="flex flex-col justify-center items-center px-6 py-8 h-screen lg:py-0">
            <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <IconContext.Provider value={{size: "30px"}}>
                    <SdvtIcon/>
                </IconContext.Provider>
                <span className="ml-2 mr-8">СДВТ</span>
            </div>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white overflow-auto">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold tracking-tight leading-tight text-gray-900 md:text-2xl dark:text-white">
                        Регистрация
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="phone"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Телефон
                            </label>
                            <Input type="tel" name="phone" id="phone" placeholder="+7 (123) 123‒45‒67"
                                   required pattern="[0-9]{3}"
                                   title="Номер телефона в формате +7 (123) 123‒45‒67"
                                   {...auth.loading ? {disabled: true} : {disabled: false}}
                            />
                        </div>
                        <div>
                            <label htmlFor="password"
                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
                            <Input className="w-full" type="password" name="password"
                                   id="password" placeholder="..." required
                                   {...auth.loading ? {disabled: true} : {disabled: false}}
                            />
                        </div>
                        <Button type="submit" {...auth.loading ? {disabled: true} : {disabled: false}}>
                            <div className="flex">
                                {
                                    auth.loading && (
                                        <>
                                            <ImSpinner2 className="animate-spin h-5 w-5 mr-3" />
                                            Загрузка
                                        </>
                                    )
                                }
                                {
                                    !auth.loading && "Далее"
                                }
                            </div>
                        </Button>
                        {
                            auth.error &&
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                                <span className="font-medium">
                                    {auth.error.toString()}
                                </span>
                            </p>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage;