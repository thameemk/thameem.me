/*
 * Project : thameem.me
 * Filename : Alerts.ts
 * Author : thameem
 * Modified time : Fri, 27 Jan 2023 at 12:02 am India Standard Time
 */


import React from "react";

export enum AlertType {
    error,
    success
}

function Alerts({
                    action,
                    title,
                    subtitle,
                    alert_type
                }: { action: any, title: string, subtitle: string, alert_type: AlertType }) {


    let alert_div_class = alert_type === 1 ? 'text-green-700 bg-green-100 border-green-400 border px-4 py-3 rounded relative mt-2 mb-2' : 'text-red-700 bg-red-100 border-red-400 border px-4 py-3 rounded relative mt-2 mb-2'

    let alert_close_button_class = alert_type === 1 ? 'text-green-500' : 'text-red-500'

    return (

        <div
            className={`${alert_div_class} border px-4 py-3 rounded relative mt-2 mb-2`}
            role="alert"
        >
            <strong className="font-bold">{title}</strong>
            <span className="block sm:inline">{subtitle}</span>
            <button
                onClick={action}
                className="absolute top-0 bottom-0 right-0 px-4 py-3"
            >
                <svg
                    className={`${alert_close_button_class} fill-current h-6 w-6 `}
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <title>Close</title>
                    <path
                        d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                </svg>
            </button>
        </div>

    );
}

export default Alerts