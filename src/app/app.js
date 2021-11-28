import React, {useState, useEffect } from 'react';
import 'rc-slider/assets/index.css';
import RangeSlider from "../components/ranges";
import Resultcard from "../components/resultcard/Resultcard";


export function App() {

    const [state, setState] = useState({
        initialInvestmentAmount: {
            class: 'initial_investment_amount',
            title: 'Начальная сумма инвестиций',
            min: 1000,
            max: 10000,
            step: 500,
            value: 1000
        },
        monthlyReplenishment: {
            class: 'monthlyReplenishment',
            title: 'Ежемесячное пополнение',
            min: 0,
            max: 1000,
            step: 50,
            value: 0
        },
        averageMonthlyReturn: {
            class: 'average_monthly_return',
            title: 'Среднемесячная доходность',
            min: 15,
            max: 25,
            step: 5,
            value: 15
        },
        result: {
            voice: {
                month3: 0,
                month6: 0,
                month12: 0,
                month24: 0
            },
            profit: {
                month3: 0,
                month6: 0,
                month12: 0,
                month24: 0
            }

        }
    });


    function saveInitialInvestmentAmount(e) {
        setState(state => {
            return {
                ...state,
                initialInvestmentAmount: {
                    ...state.initialInvestmentAmount,
                    value: e
                }
            }
        })
    }


    function saveMonthlyReplenishment(e) {
        setState(state => {
            return {
                ...state,
                monthlyReplenishment: {
                    ...state.monthlyReplenishment,
                    value: e
                }
            }
        })
    }


    function saveAverageMonthlyReturn(e) {
        setState(state => {
            return {
                ...state,
                averageMonthlyReturn: {
                    ...state.averageMonthlyReturn,
                    value: e
                }
            }
        })
    }


    function calculate() {
        console.log('calculate()');
        let A2 = parseInt(state.initialInvestmentAmount.value, 10);
        let B2 = parseInt(state.monthlyReplenishment.value, 10);
        let C2 = parseInt(state.averageMonthlyReturn.value, 10)/100;

        let voice3month = ((A2+A2*C2)+((A2+A2*C2+B2)*C2)+((A2+A2*C2)+((A2+A2*C2+B2)*C2)+B2)*C2);
        let profit3month = (voice3month-A2-B2*2);
        let voice4month = voice3month+(voice3month+B2)*C2;
        let voice5month = voice4month+(voice4month+B2)*C2;
        let voice6month = voice5month+(voice5month+B2)*C2;
        let profit6month = voice6month-A2-B2*5;
        let voice7month = voice6month+(voice6month+B2)*C2;
        let voice8month = voice7month+(voice7month+B2)*C2;
        let voice9month = voice8month+(voice8month+B2)*C2;
        let voice10month = voice9month+(voice9month+B2)*C2;
        let voice11month = voice10month+(voice10month+B2)*C2;
        let voice12month = voice11month+(voice11month+B2)*C2;
        let profit12month = voice12month-A2-B2*11;
        let voice13month = voice12month+(voice12month+B2)*C2;
        let voice14month = voice13month+(voice13month+B2)*C2;
        let voice15month = voice14month+(voice14month+B2)*C2;
        let voice16month = voice15month+(voice15month+B2)*C2;
        let voice17month = voice16month+(voice16month+B2)*C2;
        let voice18month = voice17month+(voice17month+B2)*C2;
        let voice19month = voice18month+(voice18month+B2)*C2;
        let voice20month = voice19month+(voice19month+B2)*C2;
        let voice21month = voice20month+(voice20month+B2)*C2;
        let voice22month = voice21month+(voice21month+B2)*C2;
        let voice23month = voice22month+(voice22month+B2)*C2;
        let voice24month = voice23month+(voice23month+B2)*C2;
        let profit24month = voice24month-A2-B2*23;

        setState(state => {
            return {
                ...state,
                result: {
                    ...state.result,
                    voice: {
                        ...state.result.voice,
                        month3: formatMoney(voice3month),
                        month6: formatMoney(voice6month),
                        month12: formatMoney(voice12month),
                        month24: formatMoney(voice24month)
                    },
                    profit:  {
                        ...state.result.profit,
                        month3: formatMoney(profit3month),
                        month6: formatMoney(profit6month),
                        month12: formatMoney(profit12month),
                        month24: formatMoney(profit24month)
                    },
                }
            }
        })
    }


    function formatMoney(e) {
        return e.toFixed().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
    }


    useEffect(() => {
        calculate()
    }, [
                state.initialInvestmentAmount.value,
                state.monthlyReplenishment.value,
                state.averageMonthlyReturn.value
            ])


    return ( 
        <div>
            <div className="saaCalc">

                <div className="blockSliders">
                    <RangeSlider
                        classBlock={state.initialInvestmentAmount.class}
                        title={state.initialInvestmentAmount.title}
                        min={state.initialInvestmentAmount.min}
                        max={state.initialInvestmentAmount.max}
                        step={state.initialInvestmentAmount.step}
                        value={state.initialInvestmentAmount.value}
                        valueHandler={saveInitialInvestmentAmount}/>
                    <RangeSlider
                        classBlock={state.monthlyReplenishment.class}
                        title={state.monthlyReplenishment.title}
                        min={state.monthlyReplenishment.min}
                        max={state.monthlyReplenishment.max}
                        step={state.monthlyReplenishment.step}
                        value={state.monthlyReplenishment.value}
                        valueHandler={saveMonthlyReplenishment}/>
                    <RangeSlider
                        classBlock={state.averageMonthlyReturn.class}
                        title={state.averageMonthlyReturn.title}
                        min={state.averageMonthlyReturn.min}
                        max={state.averageMonthlyReturn.max}
                        step={state.averageMonthlyReturn.step}
                        value={state.averageMonthlyReturn.value}
                        valueHandler={saveAverageMonthlyReturn}/>
                </div>


                <div className="blockResult">
                    <Resultcard
                        month='3'
                        valueOnVoice={state.result.voice.month3}
                        valueProfit={state.result.profit.month3}/>
                    <Resultcard
                        month='6'
                        valueOnVoice={state.result.voice.month6}
                        valueProfit={state.result.profit.month6}/>
                    <Resultcard
                        month='12'
                        valueOnVoice={state.result.voice.month12}
                        valueProfit={state.result.profit.month12}/>
                    <Resultcard
                        month='24'
                        valueOnVoice={state.result.voice.month24}
                        valueProfit={state.result.profit.month24}/>
                </div>

            </div>
        </div>
    )
}