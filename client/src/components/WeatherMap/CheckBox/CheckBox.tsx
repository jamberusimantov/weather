import React from "react";


export default function CheckBox(props: any) {
    const { source: { checked, label, setChecked } } = props;

    return (
        <>
            <input
                type="checkbox"
                checked={checked}
                onChange={(event) => { setChecked(event.target.checked) }
                } />
            {label}
        </>
    )
}
