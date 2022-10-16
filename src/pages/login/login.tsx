import React from "react";
import Button from "../../components/button";
import SdvtIcon from "../../static/sdvt-icon";
import {IconContext} from "react-icons";
import {Link} from "react-router-dom";
import Input from "../../components/input";
import Checkbox from "../../components/checkbox";

function LoginPage() {
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
                            Войдите в свой аккаунт
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Телефон
                                </label>
                                <Input type="email" name="email" id="email" placeholder=" +7 (123) 123‒45‒67" required/>
                            </div>
                            <div>
                                <label htmlFor="password"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Пароль</label>
                                <Input className="w-full" type="password" name="password" id="password" placeholder="••••••••" required/>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <Checkbox id="remember" aria-describedby="remember" type="checkbox" required/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                            Запомнить меня
                                        </label>
                                    </div>
                                </div>
                                <a href="#"
                                   className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:underline">
                                    Забыли пароль?
                                </a>
                            </div>
                            <Button>
                                Войти
                            </Button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Нет аккаунта?&nbsp;
                                <Link to="/registration"
                                      className="font-medium hover:underline">
                                    Регистрация
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
    )
}


export default LoginPage;
