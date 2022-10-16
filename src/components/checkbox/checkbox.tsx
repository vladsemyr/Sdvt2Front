import React from "react";

function Checkbox(props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
    return (
        <input
            type="checkbox"
            {...props.id ? {id: props.id}: {}}
            {...props["aria-describedby"] ? {"aria-describedby" : props["aria-describedby"]}: {}}
            className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            {...props.required ? {required : true}: {}}
        />
    )
}

export default Checkbox;