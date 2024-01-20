import React from "react";

type Props = {
    title: string;
}

const PageTitle = ({
    title
}: Props) => {
    return (
        <h1 className="page-title">
            { title }
        </h1>
    );
};

export default PageTitle;