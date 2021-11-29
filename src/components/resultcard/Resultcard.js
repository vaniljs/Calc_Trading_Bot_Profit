import React from "react";


const Resultcard = (props) => {
    const {month, valueOnVoice, valueProfit} = props;

    let declinationMonth = '';
    switch (month){
        case '6':
            declinationMonth = 'месяцев'
            break;
        case '12':
            declinationMonth = 'месяцев'
            break;
        default:
            declinationMonth = 'месяца'
    }

    return (
        <div className="cardResult">
            <p className="cardTitle">Через <span>{month}</span> {declinationMonth}</p>
            <div className="resultColumn">
                <div className="onInvoice">
                    <div className="invoiceColumn">$ {valueOnVoice}</div>
                    <div className="invoiceTitle">На счету</div>
                </div>
                <div className="profit">
                    <div className="profitColumn">$ {valueProfit}</div>
                    <div className="profitTitle">Чистая прибыль</div>
                </div>
            </div>
        </div>
    )
};

export default Resultcard;